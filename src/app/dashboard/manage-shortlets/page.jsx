

// "use client";

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { 
//   Plus, 
//   Trash2, 
//   Edit3, 
//   MapPin, 
//   Bed, 
//   Video, 
//   Image as ImageIcon, 
//   Check, 
//   X, 
//   ArrowLeft 
// } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { db } from "@/firebaseConfig";
// import { 
//   collection, 
//   addDoc, 
//   getDocs, 
//   doc, 
//   updateDoc, 
//   deleteDoc, 
//   serverTimestamp 
// } from "firebase/firestore";
// import Swal from "sweetalert2";
// import imageCompression from "browser-image-compression";
// import { secondaryColoring } from "@/components/Context";

// /* ================= THEME & STYLES ================= */
// const GoldAccent = secondaryColoring || "#E2B04A";
// const DarkGreen = "#09281e";
// const MidGreen = "#11382b";
// const WarmBg = "#FAF8F4";
// const CardBg = "#FFFFFF";
// const DarkText = "#1A1A1A";
// const MutedText = "#66625b";
// const BorderColor = "#E2DDD5";

// const PageWrapper = styled.div`
//   width: 100%;
//   background-color: ${WarmBg};
//   color: ${DarkText};
//   min-height: 100vh;
//   padding: 3rem 1.5rem 5rem;
//   box-sizing: border-box;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const HeaderRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;
//   gap: 1rem;
// `;

// const TitleArea = styled.div`
//   h1 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 2.2rem;
//     font-weight: 400;
//     margin: 0 0 0.3rem 0;
//     color: ${DarkText};
//   }
//   p {
//     font-size: 0.85rem;
//     color: ${MutedText};
//     margin: 0;
//   }
// `;

// const PrimaryBtn = styled.button`
//   background-color: ${MidGreen};
//   color: #ffffff;
//   padding: 0.8rem 1.4rem;
//   font-size: 0.75rem;
//   font-weight: 800;
//   letter-spacing: 0.12em;
//   text-transform: uppercase;
//   border: none;
//   border-radius: 2px;
//   cursor: pointer;
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// const BackLink = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   font-size: 0.7rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   color: ${MutedText};
//   background: none;
//   border: none;
//   cursor: pointer;
//   text-transform: uppercase;
//   margin-bottom: 1.5rem;

//   &:hover {
//     color: ${DarkText};
//   }
// `;

// /* ----- FORM MODAL / SECTION ----- */
// const FormCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 4px;
//   padding: 2rem;
//   margin-bottom: 3rem;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

//   h3 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 1.5rem;
//     margin-top: 0;
//     margin-bottom: 1.5rem;
//     color: ${DarkText};
//     border-bottom: 1px solid ${BorderColor};
//     padding-bottom: 0.75rem;
//   }
// `;

// const GridForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1.25rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.4rem;
//   grid-column: ${props => props.$full ? "span 2" : "span 1"};

//   label {
//     font-size: 0.65rem;
//     font-weight: 700;
//     letter-spacing: 0.12em;
//     color: ${MutedText};
//     text-transform: uppercase;
//   }

//   input, textarea, select {
//     width: 100%;
//     padding: 0.75rem;
//     background-color: ${WarmBg};
//     border: 1px solid ${BorderColor};
//     border-radius: 2px;
//     font-size: 0.85rem;
//     color: ${DarkText};
//     outline: none;
//     box-sizing: border-box;

//     &:focus {
//       border-color: ${GoldAccent};
//     }
//   }

//   textarea {
//     resize: vertical;
//     min-height: 100px;
//   }
// `;

// const MediaUploadGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1rem;
//   grid-column: span 2;

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MediaPreviewBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   background: ${WarmBg};
//   border: 1px dashed ${BorderColor};
//   padding: 1rem;
//   border-radius: 4px;
//   text-align: center;

//   .preview-img {
//     width: 100%;
//     height: 120px;
//     object-fit: cover;
//     border-radius: 2px;
//   }

//   .placeholder {
//     height: 120px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: ${MutedText};
//     font-size: 0.75rem;
//     gap: 6px;
//   }
// `;

// const FormActions = styled.div`
//   grid-column: span 2;
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
// `;

// /* ----- SHORTLETS LIST GRID ----- */
// const ShortletsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.5rem;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ShortletCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 4px;
//   overflow: hidden;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
//   display: flex;
//   flex-direction: column;

//   .card-img {
//     width: 100%;
//     aspect-ratio: 16 / 10;
//     object-fit: cover;
//   }

//   .card-body {
//     padding: 1.25rem;
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
// `;

// const CardTitle = styled.h3`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 1.2rem;
//   margin: 0 0 0.3rem 0;
// `;

// const ActionButtons = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   margin-top: 1rem;

//   button {
//     flex: 1;
//     padding: 0.5rem;
//     font-size: 0.68rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     border-radius: 2px;
//     cursor: pointer;
//     border: 1px solid ${BorderColor};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 4px;

//     &.edit {
//       background: ${WarmBg};
//       color: ${MidGreen};
//       &:hover { border-color: ${MidGreen}; }
//     }

//     &.delete {
//       background: #fef2f2;
//       color: #dc2626;
//       border-color: #fecaca;
//       &:hover { background: #fee2e2; }
//     }
//   }
// `;

// export default function ShortletManagerPage() {
//   const router = useRouter();
//   const [shortlets, setShortlets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Form State
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [bedrooms, setBedrooms] = useState(2);
//   const [pricePerNight, setPricePerNight] = useState("");
//   const [description, setDescription] = useState("");
  
//   // Media Files & Previews
//   const [img1File, setImg1File] = useState(null);
//   const [img1Preview, setImg1Presign] = useState("");
//   const [img2File, setImg2File] = useState(null);
//   const [img2Preview, setImg2Presign] = useState("");
//   const [img3File, setImg3File] = useState(null);
//   const [img3Preview, setImg3Presign] = useState("");
//   const [img4File, setImg4File] = useState(null);
//   const [img4Preview, setImg4Presign] = useState("");
//   const [vidFile, setVidFile] = useState(null);
//   const [vidPreview, setVidPreview] = useState("");

//   // Fetch Shortlets from Firestore
//   const fetchShortlets = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "shortlets"));
//       const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setShortlets(list);
//     } catch (err) {
//       console.error("Error fetching shortlets:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchShortlets();
//   }, []);

//   // Handle file selection & local preview generation
//   const handleFileChange = (e, slot) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const previewUrl = URL.createObjectURL(file);

//     if (slot === 1) { setImg1File(file); setImg1Presign(previewUrl); }
//     if (slot === 2) { setImg2File(file); setImg2Presign(previewUrl); }
//     if (slot === 3) { setImg3File(file); setImg3Presign(previewUrl); }
//     if (slot === 4) { setImg4File(file); setImg4Presign(previewUrl); }
//     if (slot === 'vid') { setVidFile(file); setVidPreview(previewUrl); }
//   };

//   // Image compression utility
//   const compressImage = async (file, maxSizeKB = 150) => {
//     if (!file) throw new Error("No file provided");
//     const options = {
//       maxSizeMB: maxSizeKB / 1024,
//       maxWidthOrHeight: 1200,
//       useWebWorker: true,
//       fileType: "image/jpeg",
//     };

//     try {
//       return await imageCompression(file, options);
//     } catch (error) {
//       console.error("Compression failed:", error);
//       return file;
//     }
//   };

//   // Compress and upload to Cloudinary
//   const uploadToCloudinary = async (file, folderName = "pinkles_shortlets") => {
//     if (!file) return null;
//     try {
//       const compressed = await compressImage(file, 150);
//       const data = new FormData();
//       data.append("file", compressed);
//       data.append("upload_preset", "bees_interior");
//       data.append("folder", folderName);

//       const res = await fetch("https://api.cloudinary.com/v1_1/aqxyleoh/auto/upload", {
//         method: "POST",
//         body: data,
//       });
//       const result = await res.json();
//       if (!res.ok) throw new Error(result.error?.message || "Upload failed");
//       return result.secure_url;
//     } catch (err) {
//       console.error("Cloudinary upload error:", err);
//       return null;
//     }
//   };

//   // Save / Submit Shortlet
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!editingId && !img1File) {
//       Swal.fire("Compulsory Image Missing", "Please provide the first (primary) image for the shortlet.", "warning");
//       return;
//     }

//     setIsSubmitting(true);
//     Swal.fire({ title: "Saving Shortlet...", text: "Compressing images & uploading media...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

//     try {
//       const uploadedUrls = {
//         img1: img1File ? await uploadToCloudinary(img1File) : img1Preview,
//         img2: img2File ? await uploadToCloudinary(img2File) : img2Preview,
//         img3: img3File ? await uploadToCloudinary(img3File) : img3Preview,
//         img4: img4File ? await uploadToCloudinary(img4File) : img4Preview,
//         video: vidFile ? await uploadToCloudinary(vidFile) : vidPreview,
//       };

//       const payload = {
//         title: title.trim(),
//         location: location.trim(),
//         bedrooms: Number(bedrooms),
//         pricePerNight: Number(pricePerNight),
//         priceFormatted: `₦${Number(pricePerNight).toLocaleString()}`,
//         description: description.trim(),
//         media: uploadedUrls,
//         updatedAt: serverTimestamp(),
//       };

//       if (editingId) {
//         await updateDoc(doc(db, "shortlets", editingId), payload);
//         Swal.fire("Success", "Shortlet updated successfully!", "success");
//       } else {
//         payload.createdAt = serverTimestamp();
//         await addDoc(collection(db, "shortlets"), payload);
//         Swal.fire("Success", "New shortlet created successfully!", "success");
//       }

//       resetForm();
//       fetchShortlets();
//     } catch (err) {
//       console.error("Error saving shortlet:", err);
//       Swal.fire("Error", err.message || "Failed to save shortlet.", "error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setIsFormOpen(false);
//     setEditingId(null);
//     setTitle("");
//     setLocation("");
//     setBedrooms(2);
//     setPricePerNight("");
//     setDescription("");
//     setImg1File(null); setImg1Presign("");
//     setImg2File(null); setImg2Presign("");
//     setImg3File(null); setImg3Presign("");
//     setImg4File(null); setImg4Presign("");
//     setVidFile(null); setVidPreview("");
//   };

//   const handleEdit = (item) => {
//     setEditingId(item.id);
//     setTitle(item.title || "");
//     setLocation(item.location || "");
//     setBedrooms(item.bedrooms || 2);
//     setPricePerNight(item.pricePerNight || "");
//     setDescription(item.description || "");
//     setImg1Presign(item.media?.img1 || "");
//     setImg2Presign(item.media?.img2 || "");
//     setImg3Presign(item.media?.img3 || "");
//     setImg4Presign(item.media?.img4 || "");
//     setVidPreview(item.media?.video || "");
//     setIsFormOpen(true);
//   };

//   const handleDelete = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This shortlet will be permanently deleted.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#dc2626",
//       confirmButtonText: "Yes, delete",
//     });

//     if (confirm.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, "shortlets", id));
//         Swal.fire("Deleted", "Shortlet has been removed.", "success");
//         fetchShortlets();
//       } catch (err) {
//         Swal.fire("Error", "Could not delete shortlet.", "error");
//       }
//     }
//   };

//   return (
//     <PageWrapper>
//       <Container>
//         <BackLink onClick={() => router.back()}>
//           <ArrowLeft size={14} /> Back
//         </BackLink>

//         <HeaderRow>
//           <TitleArea>
//             <h1>Shortlets Management</h1>
//             <p>Create, edit, and manage your luxury short-let apartments.</p>
//           </TitleArea>
//           {!isFormOpen && (
//             <PrimaryBtn onClick={() => { resetForm(); setIsFormOpen(true); }}>
//               <Plus size={16} /> Add New Shortlet
//             </PrimaryBtn>
//           )}
//         </HeaderRow>

//         {isFormOpen && (
//           <FormCard>
//             <h3>{editingId ? "Edit Shortlet Apartment" : "Add New Shortlet Apartment"}</h3>
//             <GridForm onSubmit={handleSubmit}>
//               <FormGroup>
//                 <label>Title</label>
//                 <input type="text" placeholder="e.g. Luxury Two Bedroom" value={title} onChange={(e) => setTitle(e.target.value)} required />
//               </FormGroup>

//               <FormGroup>
//                 <label>Location</label>
//                 <input type="text" placeholder="e.g. Magodo Phase 2" value={location} onChange={(e) => setLocation(e.target.value)} required />
//               </FormGroup>

//               <FormGroup>
//                 <label>Bedrooms</label>
//                 <input type="number" placeholder="2" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required />
//               </FormGroup>

//               <FormGroup>
//                 <label>Price Per Night (₦)</label>
//                 <input type="number" placeholder="135000" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} required />
//               </FormGroup>

//               <FormGroup $full>
//                 <label>Description & Amenities</label>
//                 <textarea placeholder="Describe amenities, check-in rules..." value={description} onChange={(e) => setDescription(e.target.value)} required />
//               </FormGroup>

//               {/* MEDIA INPUTS & PREVIEWS */}
//               <MediaUploadGrid>
//                 {/* Image 1 - Compulsory */}
//                 <MediaPreviewBox>
//                   <label style={{ fontSize: "0.6rem", fontWeight: 700 }}>IMAGE 1 (COMPULSORY)</label>
//                   {img1Preview ? <img src={img1Preview} alt="Preview 1" className="preview-img" /> : <div className="placeholder"><ImageIcon size={20} /> No Image</div>}
//                   <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 1)} required={!editingId && !img1Preview} />
//                 </MediaPreviewBox>

//                 {/* Image 2 - Optional */}
//                 <MediaPreviewBox>
//                   <label style={{ fontSize: "0.6rem", fontWeight: 700 }}>IMAGE 2 (OPTIONAL)</label>
//                   {img2Preview ? <img src={img2Preview} alt="Preview 2" className="preview-img" /> : <div className="placeholder"><ImageIcon size={20} /> Optional</div>}
//                   <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 2)} />
//                 </MediaPreviewBox>

//                 {/* Image 3 - Optional */}
//                 <MediaPreviewBox>
//                   <label style={{ fontSize: "0.6rem", fontWeight: 700 }}>IMAGE 3 (OPTIONAL)</label>
//                   {img3Preview ? <img src={img3Preview} alt="Preview 3" className="preview-img" /> : <div className="placeholder"><ImageIcon size={20} /> Optional</div>}
//                   <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 3)} />
//                 </MediaPreviewBox>

//                 {/* Image 4 - Optional */}
//                 <MediaPreviewBox>
//                   <label style={{ fontSize: "0.6rem", fontWeight: 700 }}>IMAGE 4 (OPTIONAL)</label>
//                   {img4Preview ? <img src={img4Preview} alt="Preview 4" className="preview-img" /> : <div className="placeholder"><ImageIcon size={20} /> Optional</div>}
//                   <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 4)} />
//                 </MediaPreviewBox>

//                 {/* Video - Optional */}
//                 <MediaPreviewBox style={{ gridColumn: "span 2" }}>
//                   <label style={{ fontSize: "0.6rem", fontWeight: 700 }}>VIDEO TOUR (OPTIONAL)</label>
//                   {vidPreview ? <video src={vidPreview} controls className="preview-img" /> : <div className="placeholder"><Video size={20} /> Optional Video Tour</div>}
//                   <input type="file" accept="video/*" onChange={(e) => handleFileChange(e, 'vid')} />
//                 </MediaPreviewBox>
//               </MediaUploadGrid>

//               <FormActions>
//                 <PrimaryBtn type="submit" disabled={isSubmitting}>
//                   {isSubmitting ? "Saving..." : <><Check size={16} /> Save Shortlet</>}
//                 </PrimaryBtn>
//                 <PrimaryBtn type="button" onClick={resetForm} style={{ background: "#66625b" }}>
//                   <X size={16} /> Cancel
//                 </PrimaryBtn>
//               </FormActions>
//             </GridForm>
//           </FormCard>
//         )}

//         {loading ? (
//           <p style={{ textAlign: "center", padding: "3rem" }}>Loading shortlets...</p>
//         ) : shortlets.length === 0 ? (
//           <p style={{ textAlign: "center", padding: "3rem", color: MutedText }}>No shortlets found. Add your first apartment above.</p>
//         ) : (
//           <ShortletsGrid>
//             {shortlets.map((item) => (
//               <ShortletCard key={item.id}>
//                 <img src={item.media?.img1 || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"} alt={item.title} className="card-img" />
//                 <div className="card-body">
//                   <div>
//                     <CardTitle>{item.title}</CardTitle>
//                     <p style={{ fontSize: "0.8rem", color: MutedText, display: "flex", alignItems: "center", gap: "4px", margin: "0 0 0.5rem 0" }}>
//                       <MapPin size={12} /> {item.location}
//                     </p>
//                     <p style={{ fontSize: "0.78rem", color: MutedText, display: "flex", alignItems: "center", gap: "4px", margin: "0 0 1rem 0" }}>
//                       <Bed size={13} /> {item.bedrooms} Bedrooms • <strong style={{ color: MidGreen }}>{item.priceFormatted} / night</strong>
//                     </p>
//                   </div>
//                   <ActionButtons>
//                     <button className="edit" onClick={() =>{ handleEdit(item);window.scroll(0,0)}}>
//                       <Edit3 size={14} /> Edit
//                     </button>
//                     <button className="delete" onClick={() => handleDelete(item.id)}>
//                       <Trash2 size={14} /> Delete
//                     </button>
//                   </ActionButtons>
//                 </div>
//               </ShortletCard>
//             ))}
//           </ShortletsGrid>
//         )}
//       </Container>
//     </PageWrapper>
//   );
// }






"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { 
  Plus, 
  Trash2, 
  Edit3, 
  MapPin, 
  Bed, 
  Video, 
  Image as ImageIcon, 
  Check, 
  X, 
  ArrowLeft 
} from "lucide-react";
import { useRouter } from "next/navigation";
import { db } from "@/firebaseConfig";
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from "firebase/firestore";
import Swal from "sweetalert2";
import imageCompression from "browser-image-compression";
import { secondaryColoring } from "@/components/Context";

/* ================= THEME & STYLES ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreen = "#09281e";
const MidGreen = "#11382b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const BorderColor = "#E2DDD5";

const PageWrapper = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  min-height: 100vh;
  padding: 3rem 1.5rem 5rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TitleArea = styled.div`
  h1 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0 0 0.3rem 0;
    color: ${DarkText};
  }
  p {
    font-size: 0.85rem;
    color: ${MutedText};
    margin: 0;
  }
`;

const PrimaryBtn = styled.button`
  background-color: ${MidGreen};
  color: #ffffff;
  padding: 0.8rem 1.4rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${MutedText};
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  &:hover {
    color: ${DarkText};
  }
`;

/* ----- FORM MODAL / SECTION ----- */
const FormCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: ${DarkText};
    border-bottom: 1px solid ${BorderColor};
    padding-bottom: 0.75rem;
  }
`;

const GridForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  grid-column: ${props => props.$full ? "span 2" : "span 1"};

  label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: ${MutedText};
    text-transform: uppercase;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    background-color: ${WarmBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.85rem;
    color: ${DarkText};
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const MediaUploadGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-column: span 2;
`;

const MediaPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${WarmBg};
  border: 1px dashed ${BorderColor};
  padding: 1rem;
  border-radius: 4px;
  text-align: center;

  .preview-container {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 5px;

    img {
      width: 100px;
      height: 90px;
      object-fit: cover;
      border-radius: 2px;
      flex-shrink: 0;
      border: 1px solid ${BorderColor};
    }
  }

  .placeholder {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${MutedText};
    font-size: 0.75rem;
    gap: 6px;
  }

  .preview-img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 2px;
  }
`;

const FormActions = styled.div`
  grid-column: span 2;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

/* ----- SHORTLETS LIST GRID ----- */
const ShortletsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ShortletCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;

  .card-img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }

  .card-body {
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const CardTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.2rem;
  margin: 0 0 0.3rem 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  button {
    flex: 1;
    padding: 0.5rem;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid ${BorderColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &.edit {
      background: ${WarmBg};
      color: ${MidGreen};
      &:hover { border-color: ${MidGreen}; }
    }

    &.delete {
      background: #fef2f2;
      color: #dc2626;
      border-color: #fecaca;
      &:hover { background: #fee2e2; }
    }
  }
`;

export default function ShortletManagerPage() {
  const router = useRouter();
  const [shortlets, setShortlets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState(2);
  const [pricePerNight, setPricePerNight] = useState("");
  const [description, setDescription] = useState("");
  
  // Multiple Image Files & Previews State
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  
  // Video File & Preview State
  const [vidFile, setVidFile] = useState(null);
  const [vidPreview, setVidPreview] = useState("");

  // Fetch Shortlets from Firestore
  const fetchShortlets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "shortlets"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setShortlets(list);
    } catch (err) {
      console.error("Error fetching shortlets:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShortlets();
  }, []);

  // Handle multiple image selection
  const handleImagesSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setImageFiles(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Handle video selection
  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setVidFile(file);
    setVidPreview(URL.createObjectURL(file));
  };

  // Image compression utility
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

  // Compress and upload to Cloudinary
  const uploadToCloudinary = async (file, folderName = "pinkles_shortlets") => {
    if (!file) return null;
    try {
      const compressed = await compressImage(file, 150);
      const data = new FormData();
      data.append("file", compressed);
      data.append("upload_preset", "bees_interior");
      data.append("folder", folderName);

      const res = await fetch("https://api.cloudinary.com/v1_1/aqxyleoh/auto/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error?.message || "Upload failed");
      return result.secure_url;
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      return null;
    }
  };

  // Save / Submit Shortlet
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editingId && imageFiles.length === 0) {
      Swal.fire("Compulsory Images Missing", "Please select at least one image for the shortlet.", "warning");
      return;
    }

    setIsSubmitting(true);
    Swal.fire({ title: "Saving Shortlet...", text: "Compressing images & uploading media...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      // Upload all newly selected image files
      let uploadedImageUrls = [];
      if (imageFiles.length > 0) {
        for (const file of imageFiles) {
          const url = await uploadToCloudinary(file);
          if (url) uploadedImageUrls.push(url);
        }
      } else {
        // Fallback to existing previews if editing and no new files were chosen
        uploadedImageUrls = imagePreviews;
      }

      // Upload video if a new one is selected, otherwise retain existing video URL string
      const videoUrl = vidFile ? await uploadToCloudinary(vidFile) : (typeof vidPreview === 'string' ? vidPreview : null);

      const payload = {
        title: title.trim(),
        location: location.trim(),
        bedrooms: Number(bedrooms),
        pricePerNight: Number(pricePerNight),
        priceFormatted: `₦${Number(pricePerNight).toLocaleString()}`,
        description: description.trim(),
        media: {
          images: uploadedImageUrls,
          video: videoUrl,
          // Backward compatibility fallback keys if other components look for img1
          img1: uploadedImageUrls[0] || "",
          img2: uploadedImageUrls[1] || "",
          img3: uploadedImageUrls[2] || "",
          img4: uploadedImageUrls[3] || "",
        },
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        await updateDoc(doc(db, "shortlets", editingId), payload);
        Swal.fire("Success", "Shortlet updated successfully!", "success");
      } else {
        payload.createdAt = serverTimestamp();
        await addDoc(collection(db, "shortlets"), payload);
        Swal.fire("Success", "New shortlet created successfully!", "success");
      }

      resetForm();
      fetchShortlets();
    } catch (err) {
      console.error("Error saving shortlet:", err);
      Swal.fire("Error", err.message || "Failed to save shortlet.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setTitle("");
    setLocation("");
    setBedrooms(2);
    setPricePerNight("");
    setDescription("");
    setImageFiles([]);
    setImagePreviews([]);
    setVidFile(null);
    setVidPreview("");
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setTitle(item.title || "");
    setLocation(item.location || "");
    setBedrooms(item.bedrooms || 2);
    setPricePerNight(item.pricePerNight || "");
    setDescription(item.description || "");
    
    // Support both multi-image arrays and legacy single img keys
    const existingImages = item.media?.images || [
      item.media?.img1,
      item.media?.img2,
      item.media?.img3,
      item.media?.img4,
    ].filter(Boolean);

    setImagePreviews(existingImages);
    setImageFiles([]);
    setVidPreview(item.media?.video || "");
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This shortlet will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Yes, delete",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteDoc(doc(db, "shortlets", id));
        Swal.fire("Deleted", "Shortlet has been removed.", "success");
        fetchShortlets();
      } catch (err) {
        Swal.fire("Error", "Could not delete shortlet.", "error");
      }
    }
  };

  return (
    <PageWrapper>
      <Container>
        <BackLink onClick={() => router.back()}>
          <ArrowLeft size={14} /> Back
        </BackLink>

        <HeaderRow>
          <TitleArea>
            <h1>Shortlets Management</h1>
            <p>Create, edit, and manage your luxury short-let apartments.</p>
          </TitleArea>
          {!isFormOpen && (
            <PrimaryBtn onClick={() => { resetForm(); setIsFormOpen(true); }}>
              <Plus size={16} /> Add New Shortlet
            </PrimaryBtn>
          )}
        </HeaderRow>

        {isFormOpen && (
          <FormCard>
            <h3>{editingId ? "Edit Shortlet Apartment" : "Add New Shortlet Apartment"}</h3>
            <GridForm onSubmit={handleSubmit}>
              <FormGroup>
                <label>Title</label>
                <input type="text" placeholder="e.g. Luxury Two Bedroom" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </FormGroup>

              <FormGroup>
                <label>Location</label>
                <input type="text" placeholder="e.g. Magodo Phase 2" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </FormGroup>

              <FormGroup>
                <label>Bedrooms</label>
                <input type="number" placeholder="2" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required />
              </FormGroup>

              <FormGroup>
                <label>Price Per Night (₦)</label>
                <input type="number" placeholder="135000" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} required />
              </FormGroup>

              <FormGroup $full>
                <label>Description & Amenities</label>
                <textarea placeholder="Describe amenities, check-in rules..." value={description} onChange={(e) => setDescription(e.target.value)} required />
              </FormGroup>

              {/* MULTIPLE IMAGES & VIDEO INPUTS */}
              <MediaUploadGrid>
                <MediaPreviewBox>
                  <label style={{ fontSize: "0.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    APARTMENT IMAGES (MULTIPLE ALLOWED)
                  </label>
                  {imagePreviews.length > 0 ? (
                    <div className="preview-container">
                      {imagePreviews.map((src, idx) => (
                        <img key={idx} src={src} alt={`Preview ${idx + 1}`} />
                      ))}
                    </div>
                  ) : (
                    <div className="placeholder"><ImageIcon size={20} /> No Images Selected</div>
                  )}
                  <input type="file" accept="image/*" multiple onChange={handleImagesSelect} style={{ marginTop: "10px" }} />
                </MediaPreviewBox>

                <MediaPreviewBox>
                  <label style={{ fontSize: "0.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    VIDEO TOUR (OPTIONAL)
                  </label>
                  {vidPreview && typeof vidPreview === 'string' ? (
                    <video src={vidPreview} controls className="preview-img" />
                  ) : (
                    <div className="placeholder"><Video size={20} /> Optional Video Tour</div>
                  )}
                  <input type="file" accept="video/*" onChange={handleVideoSelect} style={{ marginTop: "10px" }} />
                </MediaPreviewBox>
              </MediaUploadGrid>

              <FormActions>
                <PrimaryBtn type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : <><Check size={16} /> Save Shortlet</>}
                </PrimaryBtn>
                <PrimaryBtn type="button" onClick={resetForm} style={{ background: "#66625b" }}>
                  <X size={16} /> Cancel
                </PrimaryBtn>
              </FormActions>
            </GridForm>
          </FormCard>
        )}

        {loading ? (
          <p style={{ textAlign: "center", padding: "3rem" }}>Loading shortlets...</p>
        ) : shortlets.length === 0 ? (
          <p style={{ textAlign: "center", padding: "3rem", color: MutedText }}>No shortlets found. Add your first apartment above.</p>
        ) : (
          <ShortletsGrid>
            {shortlets.map((item) => {
              const displayImg = item.media?.images?.[0] || item.media?.img1 || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80";
              return (
                <ShortletCard key={item.id}>
                  <img src={displayImg} alt={item.title} className="card-img" />
                  <div className="card-body">
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <p style={{ fontSize: "0.8rem", color: MutedText, display: "flex", alignItems: "center", gap: "4px", margin: "0 0 0.5rem 0" }}>
                        <MapPin size={12} /> {item.location}
                      </p>
                      <p style={{ fontSize: "0.78rem", color: MutedText, display: "flex", alignItems: "center", gap: "4px", margin: "0 0 1rem 0" }}>
                        <Bed size={13} /> {item.bedrooms} Bedrooms • <strong style={{ color: MidGreen }}>{item.priceFormatted} / night</strong>
                      </p>
                    </div>
                    <ActionButtons>
                      <button className="edit" onClick={() => { handleEdit(item); window.scroll(0,0); }}>
                        <Edit3 size={14} /> Edit
                      </button>
                      <button className="delete" onClick={() => handleDelete(item.id)}>
                        <Trash2 size={14} /> Delete
                      </button>
                    </ActionButtons>
                  </div>
                </ShortletCard>
              );
            })}
          </ShortletsGrid>
        )}
      </Container>
    </PageWrapper>
  );
}