"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { db, auth } from "@/firebaseConfig";
import { collection, getDocs, doc, setDoc, deleteDoc, query, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import ProductCard from "@/components/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import { useRouter, useParams } from "next/navigation";

/* ================= THEME & COLORS ================= */

const softBg = '#f8fafc';
const borderColor = '#e2e8f0';
const textMain = '#0f172a';
const textMuted = '#475569';

/* ================= STYLED COMPONENTS ================= */

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${softBg};
  border: 1px solid ${borderColor};
  border-radius: 14px;
  padding: 20px 15px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${textMain};
  margin: 0;

  span {
    color: #00aeef;
  }
`;

const ResultsCount = styled.p`
  font-size: 1rem;
  color: ${textMuted};
  font-weight: 600;
  margin: 0;

  span {
    color: ${textMain};
    font-weight: 800;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 240px));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const MessageState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: ${textMuted};
  font-size: 1rem;
  font-weight: 500;
`;

/* ================= COMPONENT ================= */

export default function DynamicLocationPage() {
  const params = useParams();
  // Extract locationId from dynamic routing params (e.g., [locationId])
  const TARGET_LOCATION_ID = params?.locationId;
  
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentLocationName, setCurrentLocationName] = useState("Location");
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [wishlistIds, setWishlistIds] = useState([]);
  const router = useRouter();

  // Helper to get category title by ID (retained for ProductCard compatibility)
  const getCategoryName = (catId) => {
    const found = categories.find((c) => c.id === catId);
    return found ? found.title : "";
  };

  // Real-time listener for categories (retained for ProductCard compatibility)
  useEffect(() => {
    const unsubscribeCategories = onSnapshot(
      collection(db, "categories"),
      (categoriesSnapshot) => {
        const fetchedCategories = categoriesSnapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            title: data.title || data.name || "Untitled Category",
          };
        });
        setCategories(fetchedCategories);
      }
    );

    return () => unsubscribeCategories();
  }, []);

  // Real-time listener for locations to dynamically lookup titles
  useEffect(() => {
    const unsubscribeLocations = onSnapshot(
      collection(db, "locations"),
      (locationsSnapshot) => {
        const fetchedLocations = locationsSnapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            title: data.title || data.name || data.location || "Untitled Location",
          };
        });
        setLocations(fetchedLocations);

        // Find and set current location display title
        if (TARGET_LOCATION_ID) {
          const matchedLoc = fetchedLocations.find((l) => l.id === TARGET_LOCATION_ID);
          if (matchedLoc) {
            setCurrentLocationName(matchedLoc.title);
          }
        }
      }
    );

    return () => unsubscribeLocations();
  }, [TARGET_LOCATION_ID]);

  // Real-time listener for products filtered by TARGET_LOCATION_ID
  useEffect(() => {
    if (!TARGET_LOCATION_ID) return;
    setLoading(true);

    const unsubscribeProducts = onSnapshot(
      collection(db, "products"),
      (productsSnapshot) => {
        const fetchedProducts = productsSnapshot.docs
          .map((docSnap) => {
            const data = docSnap.data();
            let locIds = data.locationIds || [];
            if (locIds.length === 0 && data.locationId) {
              locIds = [data.locationId];
            }

            let catIds = data.categoryIds || [];
            if (catIds.length === 0 && data.categoryId) {
              catIds = [data.categoryId];
            }

            return {
              id: docSnap.id,
              name: data.name || "Untitled Product",
              locationIds: locIds,
              locationId: data.locationId || "",
              categoryIds: catIds,
              categoryId: data.categoryId || "",
              amount: Number(data.amount || data.price) || 0,
              images: data.images || [],
              image: data.image || "",
              variations: data.variations || [],
              createdAt: data.createdAt,
              isLive: data.isLive === true,
              strikeAmount: data.strikeAmount,
            };
          })
          .filter((product) => {
            const matchesLocation = product.locationIds.includes(TARGET_LOCATION_ID) || product.locationId === TARGET_LOCATION_ID;
            return product.isLive && matchesLocation;
          });

        setProducts(fetchedProducts);
        setLoading(false);
      },
      (error) => {
        console.error("Error listening to products for location:", error);
        setLoading(false);
      }
    );

    return () => unsubscribeProducts();
  }, [TARGET_LOCATION_ID]);

  // Listen to authenticated user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  // Fetch user's wishlist IDs
  useEffect(() => {
    async function fetchUserWishlist() {
      if (!currentUser) {
        setWishlistIds([]);
        return;
      }
      try {
        const q = query(collection(db, "wishlists"), where("userId", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const ids = querySnapshot.docs.map(docSnap => docSnap.data().productId);
        setWishlistIds(ids);
      } catch (error) {
        console.error("Error fetching wishlist IDs:", error);
      }
    }
    fetchUserWishlist();
  }, [currentUser]);

  // Toggle wishlist handler
  const handleToggleWishlist = async (e, productId) => {
    e.stopPropagation();

    if (!currentUser) {
      Swal.fire({
        title: "Please Login",
        text: "Please log in to manage your wishlist.",
        icon: "warning",
        confirmButtonColor: "#1c3ba4",
        background: "#ffffff",
        color: "#0f172a"
      });
      return;
    }

    const isCurrentlyWishlisted = wishlistIds.includes(productId);
    const wishlistDocId = `${currentUser.uid}_${productId}`;
    const wishlistRef = doc(db, "wishlists", wishlistDocId);

    if (isCurrentlyWishlisted) {
      setWishlistIds(wishlistIds.filter(id => id !== productId));
    } else {
      setWishlistIds([...wishlistIds, productId]);
    }

    try {
      if (isCurrentlyWishlisted) {
        await deleteDoc(wishlistRef);
        Swal.fire({ text: "Removed from wishlist!", icon: "info", timer: 1500, showConfirmButton: false, background: "#ffffff", color: "#0f172a" });
      } else {
        await setDoc(wishlistRef, {
          userId: currentUser.uid,
          productId: productId,
          addedAt: new Date()
        });
        Swal.fire({ text: "Saved to wishlist!", icon: "success", timer: 1500, showConfirmButton: false, background: "#ffffff", color: "#0f172a" });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      if (isCurrentlyWishlisted) {
        setWishlistIds([...wishlistIds, productId]);
      } else {
        setWishlistIds(wishlistIds.filter(id => id !== productId));
      }
      Swal.fire({ text: "Failed to update wishlist.", icon: "error", timer: 2000, showConfirmButton: false, background: "#ffffff", color: "#0f172a" });
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          📍 {currentLocationName}
        </SectionTitle>
        <ResultsCount style={{ color: "#1c3ba4", cursor: "pointer", display: "flex", alignItems: "center", gap: "1px" }} onClick={() => router.push('/store')}>
          All Products<FaArrowRight />
        </ResultsCount>
      </SectionHeader>

      <ProductsGrid>
        {loading ? (
          <MessageState>Loading products for this location...</MessageState>
        ) : products.length === 0 ? (
          <MessageState>No products found in this location.</MessageState>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={handleToggleWishlist}
              getCategoryName={getCategoryName}
            />
          ))
        )}
      </ProductsGrid>
    </SectionContainer>
  );
}