'use client';

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/navigation';
import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useCart } from '@/components/CartContext';
import { primaryColoring, secondaryColoring } from "@/components/Context";

// 🎨 ENITZ BRAND THEME COLORS
const PrimaryNavy = primaryColoring;
const PrimaryCyan = secondaryColoring;
const brandGradient = `linear-gradient(135deg, ${primaryColoring} 0%,  ${secondaryColoring} 100%)`;

// --- ENITZ LIMITED THEME & STYLES ---
const cardBg = '#ffffff';
const borderColor = '#e2e8f0';
const textMain = '#0f172a';
const textMuted = '#475569';
const softBg = '#f8fafc';
const successGreen = '#10b981';
const dangerRed = '#ef4444';
const brandCyan =secondaryColoring;


const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const PageContainer = styled.div`
  font-family: inherit;
  color: ${textMain};
  background: ${cardBg};
  min-height: 100vh;
  padding: 24px 16px 60px 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
`;

const SearchCard = styled.div`
  background: ${softBg};
  border: 1px solid ${borderColor};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  h2 {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
    color: ${textMain};
  }

  p {
    font-size: 0.9rem;
    color: ${textMuted};
    margin: 0;
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  input {
    flex: 1;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid ${borderColor};
    background: ${cardBg};
    color: ${textMain};
    font-size: 0.95krem;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${brandCyan};
    }
  }

  button {
    background: ${brandGradient};
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const BackButton = styled.button`
  background: transparent;
  border: 1px solid ${borderColor};
  color: ${textMain};
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  transition: all 0.2s ease;

  &:hover {
    background: ${softBg};
    border-color: ${brandCyan};
    color: ${brandCyan};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

/* --- Image Gallery --- */
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: static;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 969px) {
    position: sticky;
    top: 24px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${borderColor};
  background: ${softBg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.04);
    }
  }

  @media (max-width: 576px) {
    height: 320px;
  }
`;

const FloatingWishlistIcon = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border: 1px solid ${borderColor};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background: ${cardBg};
  }
`;

const ThumbnailsRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 6px;
  max-width: 100%;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
`;

const Thumbnail = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${(props) => (props.$active ? brandCyan : borderColor)};
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: ${brandCyan};
  }
`;

/* --- Product Info Column --- */
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${softBg};
  border: 1px solid ${borderColor};
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const CategoryBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${brandCyan};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #f0f9ff;
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 6px 14px;
  border-radius: 9999px;
  width: fit-content;
  animation: ${floatAnimation} 4s ease-in-out infinite;
`;

const ProductTitle = styled.h1`
  font-size: clamp(1.4rem, 2.5vw, 2.2rem);
  font-weight: 800;
  color: ${textMain};
  margin: 0;
  line-height: 1.25;
  word-break: break-word;
`;

const PriceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid ${borderColor};
  padding-bottom: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const PriceText = styled.span`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  background: ${brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-break: break-word;
`;

const StockBadge = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) => (props.$inStock ? successGreen : dangerRed)};
  background: ${(props) => (props.$inStock ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)')};
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${textMain};
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: ${textMuted};
    line-height: 1.6;
    margin: 0;
    word-break: break-word;
  }
`;

const StateContainer = styled.div`
  text-align: center;
  padding: 40px 16px;
  font-size: 1.05rem;
  color: ${textMuted};
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  font-weight: 500;
`;

const StrikePriceText = styled.span`
  font-size: 0.8rem;
  color: #94a3b8;
  text-decoration: line-through;
  font-weight: 600;
`;

const DiscountBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 800;
  color: #16a34a;
  background: #dcfce7;
  padding: 1px 5px;
  border-radius: 4px;
`;

const BestsellerBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${brandGradient};
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 5px 10px;
  border-radius: 20px;
  z-index: 5;
  box-shadow: 0 4px 10px rgba(28, 59, 164, 0.3);
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

// --- COMPONENT ---
export default function GetProductById() {
  const router = useRouter();
  const [inputId, setInputId] = useState('');
  const [activeProductId, setActiveProductId] = useState('');
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedVariations, setSelectedVariations] = useState({});
  const [selectedTier, setSelectedTier] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const { addToCart } = useCart();

  // 1. Listen to authenticated user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data());
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // 2. Check wishlist status when product or user changes
  useEffect(() => {
    async function checkWishlistStatus() {
      if (!activeProductId || !currentUser) return;
      try {
        const wishlistDocId = `${currentUser.uid}_${activeProductId}`;
        const wishlistRef = doc(db, "wishlists", wishlistDocId);
        const snap = await getDoc(wishlistRef);
        if (snap.exists()) {
          setIsWishlisted(true);
        } else {
          setIsWishlisted(false);
        }
      } catch (err) {
        console.error("Error checking wishlist:", err);
      }
    }
    checkWishlistStatus();
  }, [activeProductId, currentUser]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!inputId.trim()) {
      Swal.fire({ text: "Please enter a valid Product ID", icon: "warning", confirmButtonColor: PrimaryNavy });
      return;
    }
    setActiveProductId(inputId.trim());
  };

  // 3. Fetch product details from Firestore whenever activeProductId changes
  useEffect(() => {
    async function fetchProductDetails() {
      if (!activeProductId) return;
      try {
        setLoading(true);
        const docRef = doc(db, "products", activeProductId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const basePrice = Number(data.amount || data.price) || 0;
          const tiers = data.priceTiers || data.tieredPricing || [];

          const fetchedProduct = {
            id: docSnap.id,
            name: data.name || data.title || "Untitled Product",
            categoryIds: data.categoryIds || (data.categoryId ? [data.categoryId] : []),
            pricingType: data.pricingType || (tiers.length > 0 ? "tiered" : "single"),
            amount: basePrice,
            tieredPricing: tiers,
            links: data.youtubeLinks || data.productLinks || [],
            description: data.description || "No description provided for this item.",
            images: data.images?.length > 0 ? data.images : data.image ? [data.image] : [],
            neverFinishes: data.neverFinishes ?? true,
            quantity: Number(data.quantity || 0),
            createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : "Recent",
            reviews: data.reviews || [],
            averageRating: data.rating || 0,
            reviewCount: data.reviewCount || (data.reviews ? data.reviews.length : 0),
            variations: data.variations || [],
            features: data.features || [],
            strikeAmount: data.strikeAmount,
            locationIds: data.locationIds || (data.locationId ? [data.locationId] : []),
          };
          setProduct(fetchedProduct);
          setSelectedImageIndex(0);
          setSelectedVariations({});

          if (tiers.length > 0) {
            setSelectedTier(tiers[0]);
          } else {
            setSelectedTier(null);
          }

          // Fetch Categories
          if (fetchedProduct.categoryIds.length > 0) {
            const categoryPromises = fetchedProduct.categoryIds.map(async (catId) => {
              const catRef = doc(db, "categories", catId);
              const catSnap = await getDoc(catRef);
              if (catSnap.exists()) {
                const catData = catSnap.data();
                const rawTitle = catData.title || catData.name || "Collection";
                return rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);
              }
              return null;
            });
            const resolvedCategories = (await Promise.all(categoryPromises)).filter(Boolean);
            setCategories(resolvedCategories.length > 0 ? resolvedCategories : ["Signature Collection"]);
          } else {
            setCategories(["Signature Collection"]);
          }

          // Fetch Locations
          if (fetchedProduct.locationIds.length > 0) {
            const locationPromises = fetchedProduct.locationIds.map(async (locId) => {
              const locRef = doc(db, "locations", locId);
              const locSnap = await getDoc(locRef);
              if (locSnap.exists()) {
                const locData = locSnap.data();
                const rawName = locData.name || locData.title || locData.location || "Location";
                return rawName.charAt(0).toUpperCase() + rawName.slice(1);
              }
              return null;
            });
            const resolvedLocations = (await Promise.all(locationPromises)).filter(Boolean);
            setLocations(resolvedLocations);
          } else {
            setLocations([]);
          }
        } else {
          setProduct(null);
          Swal.fire({ title: "Not Found", text: "No product found with this ID.", icon: "error", confirmButtonColor: PrimaryNavy });
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        Swal.fire({ title: "Error", text: "Failed to fetch product data.", icon: "error", confirmButtonColor: PrimaryNavy });
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [activeProductId]);

  const handleToggleWishlist = async () => {
    if (!currentUser) {
      Swal.fire({ text: "Please log in to manage your wishlist.", icon: "warning", confirmButtonColor: PrimaryNavy });
      return;
    }

    const newStatus = !isWishlisted;
    setIsWishlisted(newStatus);

    try {
      const wishlistDocId = `${currentUser.uid}_${activeProductId}`;
      const wishlistRef = doc(db, "wishlists", wishlistDocId);

      if (newStatus) {
        await setDoc(wishlistRef, {
          userId: currentUser.uid,
          productId: activeProductId,
          addedAt: new Date()
        });
        Swal.fire({ text: "Saved to wishlist!", icon: "success", timer: 2000, showConfirmButton: false });
      } else {
        await deleteDoc(wishlistRef);
        Swal.fire({ text: "Removed from wishlist!", icon: "info", timer: 2000, showConfirmButton: false });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      setIsWishlisted(!newStatus);
    }
  };

  const currentActivePrice = selectedTier ? Number(selectedTier.price) : product?.amount || 0;

  const handleAddToCart = () => {
    if (!product) return;

    if (product.variations && product.variations.length > 0) {
      for (const v of product.variations) {
        if (!selectedVariations[v.name] || selectedVariations[v.name].trim() === "") {
          Swal.fire({
            title: "Selection Required",
            text: `Please select a value for "${v.name}" before adding to cart.`,
            icon: "warning",
            confirmButtonColor: PrimaryNavy
          });
          return;
        }
      }
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: currentActivePrice,
      basePrice: product.amount,
      tieredPricing: product.tieredPricing || [],
      tier: selectedTier ? selectedTier.name || selectedTier.label : null,
      image: product.images[0] || "",
      variations: selectedVariations,
      quantity: 1,
    });

    Swal.fire({
      title: "Added to cart!",
      text: "What would you like to do next?",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Proceed to Cart",
      cancelButtonText: "Continue",
      confirmButtonColor: PrimaryNavy,
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/cart");
      }
    });
  };

  const calculateDiscountPercent = (currentPrice, strikePrice) => {
    if (!strikePrice || strikePrice <= currentPrice) return 0;
    return Math.round(((strikePrice - currentPrice) / strikePrice) * 100);
  };

  const discountPercent = calculateDiscountPercent(product?.amount || 0, product?.strikeAmount);
  const itemCats = product?.categoryIds || [];
  const isBestseller = itemCats.includes("HXEy3XhgQJgtJ1fJUgxP");
  const isInStock = product ? (product.neverFinishes || product.quantity > 0) : false;
  const activeImage = product?.images[selectedImageIndex] || "https://placehold.co/600x600?text=No+Image";

  return (
    <PageContainer>
      <ContentWrapper>
        <BackButton onClick={() => router.back()}>
          ← Back
        </BackButton>

        <SearchCard>
          <h2>Lookup Product by ID</h2>
          <p>Enter the exact Firestore product document ID to inspect and load its details.</p>
          <SearchForm onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="e.g. 3oTVRDE..."
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
            <button type="submit">Fetch Product</button>
          </SearchForm>
        </SearchCard>

        {loading && (
          <StateContainer>Loading product details from Firestore...</StateContainer>
        )}

        {!loading && !product && activeProductId && (
          <StateContainer>No product found matching ID: {activeProductId}</StateContainer>
        )}

        {!loading && !product && !activeProductId && (
          <StateContainer>Please enter a Product ID above to view details.</StateContainer>
        )}

        {!loading && product && (
          <ProductGrid>
            <GalleryContainer>
              <ImageWrapper>
                {isBestseller && (
                  <BestsellerBadge>🔥 Bestseller</BestsellerBadge>
                )}
                <FloatingWishlistIcon onClick={handleToggleWishlist} title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
                  {isWishlisted ? (
                    <span style={{ color: dangerRed, fontSize: "1.2rem" }}>❤️</span>
                  ) : (
                    <span style={{ color: textMain, fontSize: "1.2rem" }}>🤍</span>
                  )}
                </FloatingWishlistIcon>
                <img src={activeImage} alt={product.name} />
              </ImageWrapper>
              
              <p style={{ fontSize: "12px", color: textMuted }}>Click thumbnail to view alternate angle</p>

              {product.images.length > 1 && (
                <ThumbnailsRow>
                  {product.images.map((imgUrl, index) => (
                    <Thumbnail
                      key={index}
                      $active={selectedImageIndex === index}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img src={imgUrl} alt={`${product.name} thumbnail ${index + 1}`} />
                    </Thumbnail>
                  ))}
                </ThumbnailsRow>
              )}
            </GalleryContainer>

            <InfoContainer>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "1px" }}>
                {categories.map((cat, idx) => (
                  <CategoryBadge key={idx}>{cat}</CategoryBadge>
                ))}
              </div>

              {locations.length > 0 && (
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "1px", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: textMuted }}>📍</span>
                  {locations.map((loc, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.75rem",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        background: "rgba(0, 0, 0, 0.05)",
                        color: textMuted,
                      }}
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              )}

              <ProductTitle>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
              </ProductTitle>
              <p style={{ fontSize: '0.75rem', color: textMuted, marginTop: '-10px' }}>ID: {product.id}</p>

              <PriceRow>
                <PriceText>
                  ₦{currentActivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </PriceText>

                {product.strikeAmount && (
                  <>
                    <StrikePriceText>
                      ₦{Number(product.strikeAmount).toLocaleString()}
                    </StrikePriceText>
                    <DiscountBadge>{discountPercent}% OFF</DiscountBadge>
                  </>
                )}

                <StockBadge $inStock={isInStock}>
                  {product.neverFinishes ? "In Stock" : product.quantity > 0 ? `${product.quantity} left` : "Out of Stock"}
                </StockBadge>
              </PriceRow>

              {product.tieredPricing && product.tieredPricing.length > 0 && (
                <DescriptionSection>
                  <h3>{product.pricingType === "singleqtytiered" ? "Quantity Pricing Options" : "Bulk Pricing"}</h3>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {product.tieredPricing.map((tier, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "8px",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          color: brandCyan,
                        }}
                      >
                        {product.pricingType === "singleqtytiered"
                          ? `Qty: ${tier.minQty} = ₦${Number(tier.price).toLocaleString()}`
                          : tier.maxQty == null
                          ? `Qty: ${tier.minQty}+ = ₦${Number(tier.price).toLocaleString()}`
                          : `Qty: ${tier.minQty} to ${tier.maxQty} = ₦${Number(tier.price).toLocaleString()}`}
                      </div>
                    ))}
                  </div>
                </DescriptionSection>
              )}

              <DescriptionSection>
                <h3>Product Description</h3>
                <p>{product.description}</p>
              </DescriptionSection>

              {product.variations && product.variations.length > 0 && (
                <DescriptionSection>
                  <h3>Variations</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {product.variations.map((v, idx) => (
                      <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: "600", color: textMain }}>{v.name}:</span>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          {v.options.split(",").map((opt, optIdx) => {
                            const optionTrimmed = opt.trim();
                            const isSelected = selectedVariations[v.name] === optionTrimmed;
                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => setSelectedVariations({ ...selectedVariations, [v.name]: optionTrimmed })}
                                style={{
                                  padding: "6px 12px",
                                  borderRadius: "8px",
                                  fontSize: "0.85rem",
                                  fontWeight: "600",
                                  cursor: "pointer",
                                  border: `1px solid ${isSelected ? brandCyan : borderColor}`,
                                  background: isSelected ? "#f0f9ff" : cardBg,
                                  color: isSelected ? brandCyan : textMain,
                                }}
                              >
                                {optionTrimmed}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </DescriptionSection>
              )}

              {/* <button
                onClick={handleAddToCart}
                style={{
                  background: brandGradient,
                  color: "#fff",
                  border: "none",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "12px",
                  boxShadow: "0 6px 20px rgba(28, 59, 164, 0.3)"
                }}
              >
                Add to Cart
              </button> */}
            </InfoContainer>
          </ProductGrid>
        )}
      </ContentWrapper>
    </PageContainer>
  );
}