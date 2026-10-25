"use client";

import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { auth, db } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

/* ================= THEME COLORS (Light Mode) ================= */
const Theme = {
  PageBg: "#FAF8F4",        // Soft warm ivory/cream background
  SurfaceBg: "#FFFFFF",     // Pure white for card sections
  SurfaceAlt: "#F2EDE4",    // Light cream for inputs/cards
  PrimaryGreen: "#11382b",  // Deep forest green primary color
  GoldAccent: "#B28A2E",    // Muted warm gold accent
  TextDark: "#1E293B",      // Main dark text
  TextMuted: "#64748B",     // Secondary text
  BorderColor: "#E2D9CE",   // Warm border tone
  DangerColor: "#C53030",   // Refined red for delete buttons
};

const Container = styled.div`
  background-color: ${Theme.PageBg};
  min-height: 100vh;
  padding: 3rem 1.5rem 5rem;
  color: ${Theme.TextDark};
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const TitleGroup = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${Theme.PrimaryGreen};
  font-family: serif;
`;

const SubtitleText = styled.p`
  color: ${Theme.TextMuted};
  font-size: 0.95rem;
  margin-top: 0.5rem;
`;

const PlusButton = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${Theme.PrimaryGreen};
  color: ${Theme.SurfaceBg};
  border: none;
  box-shadow: 0 4px 12px rgba(17, 56, 43, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${Theme.GoldAccent};
    color: ${Theme.PrimaryGreen};
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  background: ${Theme.SurfaceBg};
  padding: 1.25rem;
  border-radius: 10px;
  border: 1px solid ${Theme.BorderColor};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${Theme.BorderColor};
  background: ${Theme.SurfaceAlt};
  font-size: 0.95rem;
  color: ${Theme.TextDark};
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${Theme.GoldAccent};
  }

  &::placeholder {
    color: ${Theme.TextMuted};
  }
`;

const PortfolioSection = styled.div`
  background: ${Theme.SurfaceBg};
  padding: 1.75rem;
  border-radius: 10px;
  border: 1px solid ${Theme.BorderColor};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ImageCard = styled.div`
  background: ${Theme.SurfaceAlt};
  border: 1px solid ${Theme.BorderColor};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .card-body {
    padding: 12px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;

    p {
      font-size: 0.9rem;
      font-weight: 600;
      color: ${Theme.TextDark};
      margin-bottom: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ActionRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Btn = styled.button`
  flex: 1;
  padding: 8px;
  background: ${Theme.PrimaryGreen};
  color: ${Theme.SurfaceBg};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }

  ${(props) =>
    props.$delete &&
    `
      background: ${Theme.DangerColor};
    `}
`;

/* ---------------- MODAL ---------------- */

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(17, 56, 43, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;
`;

const ModalCard = styled.div`
  width: 420px;
  background: ${Theme.SurfaceBg};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${Theme.BorderColor};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 90vh;

  h2 {
    color: ${Theme.PrimaryGreen};
    font-family: serif;
    font-size: 1.5rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.85rem;
  color: ${Theme.PrimaryGreen};
  margin-top: 1rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid ${Theme.BorderColor};
  background: ${Theme.SurfaceAlt};
  font-size: 0.9rem;
  color: ${Theme.TextDark};
  margin-top: 6px;
  outline: none;

  &:focus {
    border-color: ${Theme.GoldAccent};
  }
`;

const ModalFooter = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const PreviewBtn = styled.span`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  width: 100%;
  margin-top: 6px;
  padding: 9px 12px;
  background: ${Theme.GoldAccent};
  color: ${Theme.PrimaryGreen};
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const EmptyState = styled.p`
  font-size: 0.9rem;
  color: ${Theme.TextMuted};
  font-style: italic;
  text-align: center;
  padding: 2rem 0;
`;

/* ---------------- COMPONENT ---------------- */

export default function InteriorPortfolioManager() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Dedicated separate collection reference for interior decor portfolio items
  const portfolioRef = collection(db, "interiorPortfolio");

  // Load Portfolio Items from the dedicated collection
  const loadPortfolio = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const q = query(portfolioRef, where("userId", "==", user.uid));
      const snapshot = await getDocs(q);

      const arr = [];
      snapshot.forEach((docSnap) => {
        arr.push({ id: docSnap.id, ...docSnap.data() });
      });

      // Sort client-side by creation date descending
      arr.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setPortfolioItems(arr);
    } catch (error) {
      console.error("Error fetching interior portfolio:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) loadPortfolio();
    });
    return () => unsubscribe();
  }, []);

  // Real-time title search filtering
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return portfolioItems;
    return portfolioItems.filter((item) =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [portfolioItems, searchQuery]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      Swal.fire("Error", "Only image files are allowed", "error");
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const compressImage = async (file, maxSizeKB = 150) => {
    if (!file) throw new Error("No file provided");
    const options = {
      maxSizeMB: maxSizeKB / 1024,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
      fileType: "image/jpeg",
    };

    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error("Compression failed:", error);
      return file;
    }
  };

  const uploadToCloudinary = async (blob) => {
    const data = new FormData();
    data.append("file", blob, "interior-portfolio.jpg");
    data.append("upload_preset", "bees_interior");
    data.append("folder", "interior_decor_portfolio");

    const res = await fetch("https://api.cloudinary.com/v1_1/aqxyleoh/image/upload", {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error?.message || "Upload failed");
    }

    return json.secure_url;
  };

  const openNewModal = () => {
    setModalOpen(true);
    setEditingId(null);
    setTitle("");
    resetImageState();
  };

  const openEditModal = (item) => {
    setModalOpen(true);
    setEditingId(item.id);
    setTitle(item.title);
    setImageFile(null);
    setImagePreview(item.url);
  };

  const savePortfolioItem = async () => {
    const user = auth.currentUser;
    if (!user) return;

    if (!title.trim()) {
      return Swal.fire("Missing Field", "Image title is required.", "warning");
    }

    if (!editingId && !imageFile) {
      return Swal.fire("Missing Field", "An image file is required.", "warning");
    }

    setLoading(true);
    Swal.fire({
      title: editingId ? "Updating item..." : "Uploading item...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      let imageUrl = imagePreview;

      if (imageFile) {
        const compressedBlob = await compressImage(imageFile, 150);
        imageUrl = await uploadToCloudinary(compressedBlob);
      }

      if (editingId) {
        await updateDoc(doc(db, "interiorPortfolio", editingId), {
          title,
          url: imageUrl,
        });
        Swal.fire("Updated!", "Portfolio item updated successfully.", "success");
      } else {
        await addDoc(portfolioRef, {
          userId: user.uid,
          title,
          url: imageUrl,
          createdAt: serverTimestamp(),
        });
        Swal.fire("Success!", "New item added to portfolio.", "success");
      }

      setModalOpen(false);
      loadPortfolio();
    } catch (error) {
      console.error(error);
      Swal.fire("Error", error.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  const deletePortfolioItem = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete item?",
      text: "This item will be removed permanently from your portfolio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      confirmButtonColor: Theme.DangerColor,
    });

    if (!confirm.isConfirmed) return;

    try {
      await deleteDoc(doc(db, "interiorPortfolio", id));
      Swal.fire("Deleted!", "Portfolio item removed successfully.", "success");
      loadPortfolio();
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Could not delete item.", "error");
    }
  };

  const resetImageState = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <Container>
      <ContentWrapper>
        <HeaderSection>
          <TitleGroup>
            <Title>Interior Decor Portfolio</Title>
            <SubtitleText>
              Manage your showcase images and titles directly in your database.
            </SubtitleText>
          </TitleGroup>
          <PlusButton onClick={openNewModal}>+ Add New Portfolio Item</PlusButton>
        </HeaderSection>

        {/* SEARCH BAR */}
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search portfolio by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        {/* PORTFOLIO GALLERY GRID */}
        <PortfolioSection>
          {filteredItems.length === 0 ? (
            <EmptyState>
              {searchQuery
                ? `No portfolio items matching "${searchQuery}".`
                : "No portfolio items uploaded yet."}
            </EmptyState>
          ) : (
            <ImageGrid>
              {filteredItems.map((img) => (
                <ImageCard key={img.id}>
                  <img src={img.url} alt={img.title} />
                  <div className="card-body">
                    <p title={img.title}>{img.title}</p>
                    <ActionRow>
                      <Btn onClick={() => openEditModal(img)}>Edit</Btn>
                      <Btn $delete onClick={() => deletePortfolioItem(img.id)}>
                        Delete
                      </Btn>
                    </ActionRow>
                  </div>
                </ImageCard>
              ))}
            </ImageGrid>
          )}
        </PortfolioSection>

        {/* ADD / EDIT MODAL */}
        {modalOpen && (
          <ModalBackground
            onClick={() => {
              setModalOpen(false);
              resetImageState();
            }}
          >
            <ModalCard onClick={(e) => e.stopPropagation()}>
              <h2>{editingId ? "Edit Portfolio Item" : "Add Portfolio Item"}</h2>

              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Modern Living Room Sofa"
              />

              <Label>Image File</Label>
              <input
                id="portfolioUpload"
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                style={{ display: "none" }}
              />
              <label htmlFor="portfolioUpload">
                <PreviewBtn as="span">Select / Change Image</PreviewBtn>
              </label>

              {imagePreview && (
                <div>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "160px",
                      borderRadius: "6px",
                      objectFit: "cover",
                      marginTop: "12px",
                      border: `2px solid ${Theme.PrimaryGreen}`,
                    }}
                  />
                </div>
              )}

              <ModalFooter>
                <Btn onClick={savePortfolioItem} disabled={loading}>
                  {editingId ? "Update" : "Save"}
                </Btn>
                <Btn
                  $delete
                  onClick={() => {
                    setModalOpen(false);
                    resetImageState();
                  }}
                >
                  Cancel
                </Btn>
              </ModalFooter>
            </ModalCard>
          </ModalBackground>
        )}
      </ContentWrapper>
    </Container>
  );
}