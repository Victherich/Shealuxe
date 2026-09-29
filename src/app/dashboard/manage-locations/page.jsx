"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp,
  query,
  where,
  writeBatch
} from "firebase/firestore";
import styled from "styled-components";
import Swal from "sweetalert2";
import { primaryColoring, secondaryColoring } from "@/components/Context";

// 🎨 ENITZ BRAND THEME COLORS
const PrimaryNavy = primaryColoring;
const PrimaryCyan = secondaryColoring;
const ThemeGradient = `linear-gradient(135deg, ${primaryColoring} 0%,  ${secondaryColoring} 100%)`;
const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";
const Danger = "#ef4444";

// 🌟 Styled Components (Strict max 10px spacing/gaps/margins/padding rule)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${Dark};
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-family: inherit;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 15px 35px rgba(11, 27, 72, 0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const ColorfulTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  letter-spacing: -0.02em;
`;

const ColorfulSub = styled.p`
  font-size: 0.95rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ColorfulSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PrimaryButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
`;

const LocationCard = styled.div`
  background: ${White};
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${Border};
  border-left: 4px solid ${PrimaryCyan};
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: ${Dark};
`;

const LocationDesc = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${TextMuted};
  word-break: break-word;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 5px;
`;

const EditButton = styled.button`
  background: rgba(139, 92, 246, 0.1);
  color: ${PrimaryCyan};
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.2);
  }
`;

const DeleteButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  color: ${Danger};
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

const LoadingContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: ${Dark};
  font-weight: 700;
  background: ${White};
  border-radius: 10px;
  border: 1px solid ${Border};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 10px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  background: ${White};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${Border};
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.15);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 900;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  font-weight: 600;

  &:focus {
    border-color: ${PrimaryCyan};
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 70px;
  margin: 0;
  font-weight: 600;

  &:focus {
    border-color: ${PrimaryCyan};
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 5px;
`;

const CancelButton = styled.button`
  background: ${LightBg};
  color: ${TextMuted};
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: #cbd5e1;
    color: ${Dark};
  }
`;

const SaveButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(139, 92, 246, 0.2);

  &:hover {
    opacity: 0.95;
  }
`;

// 🔹 Compression utility function
const compressImage = (file, maxSizeKB = 100) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("No file provided"));

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const scaleSize = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;

        canvas.width = img.width * scaleSize;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let quality = 0.7;

        const compressLoop = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error("Compression failed"));

              const sizeKB = blob.size / 1024;
              if (sizeKB <= maxSizeKB || quality <= 0.1) {
                resolve(blob);
              } else {
                quality -= 0.1;
                compressLoop();
              }
            },
            "image/jpeg",
            quality
          );
        };

        compressLoop();
      };

      img.onerror = () => reject(new Error("Image load failed"));
    };

    reader.onerror = () => reject(new Error("File reading failed"));
    reader.readAsDataURL(file);
  });
};

export default function LocationsCrudPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State Controls
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Image States for Location
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "locations"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLocations(list);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch locations.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setTitleInput("");
    setDescInput("");
    setImageFile(null);
    setImagePreview("");
    setExistingImageUrl("");
    setIsModalOpen(true);
  };

  const openEditModal = (loc) => {
    setEditingId(loc.id);
    setTitleInput(loc.title);
    setDescInput(loc.description || "");
    setExistingImageUrl(loc.image || "");
    setImagePreview(loc.image || "");
    setImageFile(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTitleInput("");
    setDescInput("");
    setImageFile(null);
    setImagePreview("");
    setExistingImageUrl("");
    setEditingId(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setExistingImageUrl("");
    e.target.value = "";
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
    setExistingImageUrl("");
  };

  const handleSaveLocation = async (e) => {
    e.preventDefault();
    if (!titleInput.trim()) {
      return Swal.fire("Validation", "Please enter a location title.", "warning");
    }

    try {
      Swal.fire({
        text: "Processing...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      let finalImageUrl = existingImageUrl;

      if (imageFile) {
        const compressedBlob = await compressImage(imageFile, 100);

        const data = new FormData();
        data.append("file", compressedBlob, "location.jpg");
        data.append("upload_preset", "bees_interior");
        data.append("folder", "locations_majinfotek");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/aqxyleoh/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.error?.message || "Image upload failed");
        }

        finalImageUrl = result.secure_url;
      }

      const payload = {
        title: titleInput,
        description: descInput,
        image: finalImageUrl,
      };

      if (editingId) {
        const docRef = doc(db, "locations", editingId);
        await updateDoc(docRef, payload);
        Swal.close();
        Swal.fire("Updated!", "Location updated successfully.", "success");
      } else {
        await addDoc(collection(db, "locations"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        Swal.close();
        Swal.fire("Success!", "Location added successfully.", "success");
      }
      closeModal();
      fetchLocations();
    } catch (error) {
      Swal.close();
      Swal.fire("Error", error.message || "Could not save location.", "error");
    }
  };

  const handleDeleteLocation = async (locationToDelete) => {
    try {
      // Prevent deletion if the location has a fixed type field
      if (locationToDelete.type === "fixed") {
        await Swal.fire({
          title: "Cannot Delete",
          text: `"${locationToDelete.title}" is a protected fixed location and cannot be deleted.`,
          icon: "error",
          confirmButtonColor: PrimaryCyan,
        });
        return;
      }

      const productsQuery = query(collection(db, "products"), where("locationId", "==", locationToDelete.id));
      const productsSnapshot = await getDocs(productsQuery);

      if (!productsSnapshot.empty) {
        const locationOptions = locations
          .filter(loc => loc.id !== locationToDelete.id)
          .reduce((acc, loc) => {
            acc[loc.id] = loc.title;
            return acc;
          }, { "unassigned": "Move to Unassigned" });

        const { value: targetChoice } = await Swal.fire({
          title: "Location Contains Products!",
          text: `There are ${productsSnapshot.size} product(s) in "${locationToDelete.title}". Where should these products go before deletion?`,
          input: "select",
          inputOptions: locationOptions,
          inputPlaceholder: "Select a fallback location",
          showCancelButton: true,
          confirmButtonText: "Proceed & Reassign",
          confirmButtonColor: PrimaryCyan,
          cancelButtonColor: TextMuted,
        });

        if (!targetChoice) return;

        const batch = writeBatch(db);

        productsSnapshot.forEach((productDoc) => {
          batch.update(productDoc.ref, { 
            locationId: targetChoice === "unassigned" ? null : targetChoice,
            locationName: targetChoice === "unassigned" ? "Unassigned" : locationOptions[targetChoice]
          });
        });

        const locationRef = doc(db, "locations", locationToDelete.id);
        batch.delete(locationRef);

        await batch.commit();
        Swal.fire("Success!", "Location deleted and products safely reassigned.", "success");
        fetchLocations();
        return;
      }

      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: Danger,
        cancelButtonColor: TextMuted,
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteDoc(doc(db, "locations", locationToDelete.id));
        Swal.fire("Deleted!", "Location has been removed.", "success");
        fetchLocations();
      }
    } catch (error) {
      Swal.fire("Error", "Could not delete location.", "error");
    }
  };

  const filteredLocations = locations.filter((loc) =>
    loc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingContainer>Loading locations...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Locations Management 📍</ColorfulTitle>
        <ColorfulSub>Organize your physical or storage locations, add new zones, and manage inventory layouts.</ColorfulSub>
      </HeaderBanner>

      <ActionRow>
        <ColorfulSectionTitle>All Locations ({locations.length})</ColorfulSectionTitle>
     
        <StyledInput 
          type="text" 
          placeholder="Search locations by name..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          style={{ maxWidth: "250px", marginRight: "10px" }}
        />

        <PrimaryButton onClick={openAddModal}>
          <span>+ Add Location</span>
        </PrimaryButton>
      </ActionRow>

      {filteredLocations.length === 0 ? (
        <LoadingContainer>No locations found. Click "+ Add Location" to create one.</LoadingContainer>
      ) : (
       <LocationsGrid>
          {filteredLocations.map((loc) => (
            <LocationCard key={loc.id}>
              {loc.image && (
                <div style={{ width: "100%", height: "140px", overflow: "hidden", borderRadius: "8px 8px 0 0" }}>
                  <img src={loc.image} alt={loc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}
              <CardHeader>
                <LocationName>
                  {loc.title ? loc.title.charAt(0).toUpperCase() + loc.title.slice(1) : ""}
                </LocationName>
              </CardHeader>
              <LocationDesc>
                {(() => {
                  const desc = loc.description || "No description provided.";
                  return desc ? desc.charAt(0).toUpperCase() + desc.slice(1) : "";
                })()}
              </LocationDesc>
              <ButtonGroup>
                <EditButton onClick={() => openEditModal(loc)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDeleteLocation(loc)}>Delete</DeleteButton>
              </ButtonGroup>
            </LocationCard>
          ))}
        </LocationsGrid>
      )}

      {/* 🌟 Custom Form Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{editingId ? "Edit Location" : "Create New Location"}</ModalTitle>
            <form onSubmit={handleSaveLocation} style={{ display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              <StyledInput 
                type="text" 
                placeholder="Location Title" 
                value={titleInput} 
                onChange={(e) => setTitleInput(e.target.value)} 
                required 
              />
              <StyledTextarea 
                placeholder="Location Description" 
                value={descInput} 
                onChange={(e) => setDescInput(e.target.value)} 
              />

              {/* 🌟 Location Image Upload & Preview Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "#333" }}>
                  Location Image
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    style={{ fontSize: "0.85rem" }}
                  />
                  {imagePreview && (
                    <div style={{ position: "relative", width: "50px", height: "50px", borderRadius: "6px", overflow: "hidden", border: "1px solid #ccc" }}>
                      <img src={imagePreview} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <button 
                        type="button" 
                        onClick={handleRemoveImage}
                        style={{ position: "absolute", top: 0, right: 0, background: "red", color: "white", border: "none", fontSize: "10px", cursor: "pointer", padding: "2px 4px" }}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <ModalActions>
                <CancelButton type="button" onClick={closeModal}>Cancel</CancelButton>
                <SaveButton type="submit">{editingId ? "Save Changes" : "Create Location"}</SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}