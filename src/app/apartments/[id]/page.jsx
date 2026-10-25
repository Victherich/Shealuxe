




// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useParams } from "next/navigation";
// import styled from "styled-components";
// import Link from "next/link";
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Bed,
//   Play,
//   CheckCircle2,
//   ArrowLeft,
//   Tv,
//   Wifi,
//   ShieldCheck,
//   Zap,
// } from "lucide-react";
// import { secondaryColoring } from "@/components/Context";
// import { doc, getDoc, collection, getDocs } from "firebase/firestore";
// import { db } from "@/firebaseConfig";

// /* ================= COLORS & THEMING ================= */
// const GoldAccent = secondaryColoring || "#E2B04A";
// const DarkGreen = "#09281e";
// const MidGreen = "#11382b";
// const WarmBg = "#FAF8F4";
// const CardBg = "#FFFFFF";
// const DarkText = "#1A1A1A";
// const MutedText = "#66625b";
// const BorderColor = "#E2DDD5";

// /* ================= STYLED COMPONENTS ================= */
// const PageWrapper = styled.div`
//   width: 100%;
//   background-color: #ffffff;
//   color: ${DarkText};
//   min-height: 100vh;
//   padding-bottom: 5rem;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2.5rem 1.5rem 0;
//   box-sizing: border-box;
// `;

// const BackLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   font-size: 0.7rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   color: ${MutedText};
//   text-decoration: none;
//   text-transform: uppercase;
//   margin-bottom: 1.5rem;
//   transition: color 0.2s;

//   &:hover {
//     color: ${DarkText};
//   }
// `;

// const TwoColumnLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1.6fr 1fr;
//   gap: 2.5rem;
//   align-items: start;

//   @media (max-width: 960px) {
//     grid-template-columns: 1fr;
//   }
// `;

// /* ----- MEDIA / GALLERY PLAYER ----- */
// const MediaStage = styled.div`
//   width: 100%;
//   aspect-ratio: 16 / 9;
//   background-color: #1a1a1a;
//   border-radius: 4px;
//   overflow: hidden;
//   position: relative;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

//   img,
//   iframe,
//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border: none;
//   }
// `;

// const PlayOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.35);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   .play-btn {
//     width: 64px;
//     height: 64px;
//     border-radius: 50%;
//     background: ${GoldAccent};
//     color: #111827;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: transform 0.2s;

//     &:hover {
//       transform: scale(1.1);
//     }
//   }
// `;

// const ThumbnailGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   gap: 0.75rem;
//   margin-top: 1rem;

//   @media (max-width: 600px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const ThumbCard = styled.div`
//   aspect-ratio: 16 / 10;
//   border-radius: 2px;
//   overflow: hidden;
//   cursor: pointer;
//   position: relative;
//   border: 2px solid ${(p) => (p.$active ? GoldAccent : "transparent")};
//   opacity: ${(p) => (p.$active ? 1 : 0.65)};
//   transition: all 0.2s;

//   img, video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .video-badge {
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.4);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #ffffff;
//   }

//   &:hover {
//     opacity: 1;
//   }
// `;

// /* ----- DETAILS SECTION ----- */
// const InfoSection = styled.div`
//   margin-top: 2rem;
// `;

// const MainTitle = styled.h1`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 2.4rem;
//   font-weight: 400;
//   color: ${DarkText};
//   margin: 0 0 0.4rem 0;
// `;

// const LocationTag = styled.p`
//   font-size: 0.85rem;
//   color: ${MutedText};
//   margin: 0 0 1.5rem 0;
//   display: flex;
//   align-items: center;
//   gap: 6px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-top: 1px solid ${BorderColor};
//   margin: 1.5rem 0;
// `;

// const SubHeading = styled.h3`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 1.35rem;
//   font-weight: 400;
//   color: ${DarkText};
//   margin: 0 0 0.75rem 0;
// `;

// const Description = styled.p`
//   font-size: 0.88rem;
//   color: ${MutedText};
//   line-height: 1.75;
//   font-weight: 300;
//   margin: 0;
// `;

// const AmenitiesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1rem;
//   margin-top: 1rem;

//   @media (max-width: 600px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const AmenityItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 0.82rem;
//   color: ${DarkText};

//   svg {
//     width: 16px;
//     height: 16px;
//     color: ${MidGreen};
//   }
// `;

// /* ----- BOOKING SIDEBAR CARD ----- */
// const BookingCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 4px;
//   padding: 1.75rem;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
//   position: sticky;
//   top: 2rem;
// `;

// const PriceHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   margin-bottom: 1.5rem;

//   .price {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 1.8rem;
//     font-weight: 700;
//     color: ${MidGreen};
//   }

//   .unit {
//     font-size: 0.82rem;
//     color: ${MutedText};
//   }

//   .beds {
//     font-size: 0.75rem;
//     color: ${MutedText};
//   }
// `;

// const FormGrid = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 0.85rem;
// `;

// const FormRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 0.75rem;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.35rem;

//   label {
//     font-size: 0.62rem;
//     font-weight: 700;
//     letter-spacing: 0.12em;
//     color: ${MutedText};
//     text-transform: uppercase;
//   }

//   input,
//   select {
//     width: 100%;
//     padding: 0.75rem;
//     background-color: ${WarmBg};
//     border: 1px solid ${BorderColor};
//     border-radius: 2px;
//     font-size: 0.82rem;
//     color: ${DarkText};
//     outline: none;
//     box-sizing: border-box;

//     &:focus {
//       border-color: ${GoldAccent};
//     }
//   }
// `;

// const GoldSubmitBtn = styled.button`
//   width: 100%;
//   padding: 0.9rem;
//   background-color: ${GoldAccent};
//   color: #111827;
//   font-size: 0.75rem;
//   font-weight: 800;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   border: none;
//   border-radius: 2px;
//   cursor: pointer;
//   margin-top: 0.5rem;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.92;
//   }
// `;

// const DisclaimerNote = styled.p`
//   font-size: 0.68rem;
//   color: ${MutedText};
//   line-height: 1.5;
//   text-align: center;
//   margin-top: 1rem;
// `;

// /* ----- YOU MAY ALSO LIKE SECTION ----- */
// const YouMayAlsoLikeSection = styled.section`
//   background-color: ${WarmBg};
//   margin-top: 5rem;
//   padding: 4rem 1.5rem;
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   max-width: 600px;
//   margin: 0 auto 2.5rem;

//   .tag {
//     font-size: 0.65rem;
//     font-weight: 700;
//     letter-spacing: 0.2em;
//     color: ${GoldAccent};
//     text-transform: uppercase;
//     display: inline-block;
//     margin-bottom: 0.5rem;
//   }

//   h2 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 2.2rem;
//     font-weight: 400;
//     margin: 0;
//   }
// `;

// const RelatedGrid = styled.div`
//   max-width: 1100px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1.75rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const RelatedCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 4px;
//   overflow: hidden;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
// `;

// const CardImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   aspect-ratio: 16 / 10;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .featured-badge {
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     background: ${GoldAccent};
//     color: #111827;
//     font-size: 0.6rem;
//     font-weight: 800;
//     padding: 3px 8px;
//     border-radius: 2px;
//   }

//   .video-tag {
//     position: absolute;
//     bottom: 10px;
//     left: 10px;
//     background: rgba(0, 0, 0, 0.75);
//     color: #ffffff;
//     font-size: 0.62rem;
//     font-weight: 700;
//     padding: 4px 10px;
//     border-radius: 2px;
//     display: flex;
//     align-items: center;
//     gap: 4px;
//   }
// `;

// const CardBody = styled.div`
//   padding: 1.25rem;
// `;

// const CardTitle = styled.h3`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 1.25rem;
//   font-weight: 400;
//   margin: 0 0 0.3rem 0;
// `;

// const CardPills = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 6px;
//   margin: 0.8rem 0 1.2rem;
// `;

// const Pill = styled.span`
//   background: ${WarmBg};
//   color: ${DarkText};
//   border: 1px solid ${BorderColor};
//   font-size: 0.58rem;
//   font-weight: 700;
//   padding: 3px 7px;
//   border-radius: 2px;
// `;

// const CardActions = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 0.5rem;
// `;

// const OutlineBtn = styled(Link)`
//   border: 1px solid ${MidGreen};
//   color: ${MidGreen};
//   padding: 0.6rem;
//   font-size: 0.68rem;
//   font-weight: 700;
//   text-align: center;
//   text-decoration: none;
//   text-transform: uppercase;
//   border-radius: 2px;
// `;

// const SolidBtn = styled(Link)`
//   background: ${MidGreen};
//   color: #ffffff;
//   padding: 0.6rem;
//   font-size: 0.68rem;
//   font-weight: 700;
//   text-align: center;
//   text-decoration: none;
//   text-transform: uppercase;
//   border-radius: 2px;
// `;

// /* ================= MAIN COMPONENT ================= */
// export default function ApartmentDetailPage() {
//   const params = useParams();
//   const apartmentId = params?.id;

//   const [apartmentData, setApartmentData] = useState(null);
//   const [relatedApartments, setRelatedApartments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [activeMediaIndex, setActiveMediaIndex] = useState(0);
//   const [isPlayingVideo, setIsPlayingVideo] = useState(false);

//   // Booking Form State
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState("2 Guests");
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");

//   // Fetch apartment details & related listings from Firestore
//   useEffect(() => {
//     const fetchApartmentDetails = async () => {
//       if (!apartmentId) return;
//       try {
//         setLoading(true);
//         // 1. Fetch current apartment doc
//         const docRef = doc(db, "shortlets", apartmentId);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();

//           // Build dynamic gallery from media map
//           const gallery = [];
//           if (data.media?.img1) gallery.push({ id: "img-1", type: "image", url: data.media.img1 });
//           if (data.media?.img2) gallery.push({ id: "img-2", type: "image", url: data.media.img2 });
//           if (data.media?.img3) gallery.push({ id: "img-3", type: "image", url: data.media.img3 });
//           if (data.media?.img4) gallery.push({ id: "img-4", type: "image", url: data.media.img4 });
//           if (data.media?.video) gallery.push({ id: "vid-1", type: "video", url: data.media.img1 || data.media.img2, videoUrl: data.media.video });

//           // Fallback if gallery is empty
//           if (gallery.length === 0) {
//             gallery.push({ id: "img-1", type: "image", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80" });
//           }

//           setApartmentData({
//             id: docSnap.id,
//             title: data.title || "Luxury Apartment",
//             location: data.location || "Lagos",
//             bedrooms: Number(data.bedrooms) || 1,
//             pricePerNight: Number(data.pricePerNight) || 0,
//             priceFormatted: data.priceFormatted || `₦${Number(data.pricePerNight || 0).toLocaleString()}`,
//             description: data.description || "No description provided.",
//             amenities: data.amenities || [
//               { name: "24/7 power supply", icon: Zap },
//               { name: "Free WiFi", icon: Wifi },
//               { name: "Secured area", icon: ShieldCheck },
//             ],
//             gallery,
//           });
//         }

//         // 2. Fetch all shortlets for "You May Also Like"
//         const querySnapshot = await getDocs(collection(db, "shortlets"));
//         const allListings = querySnapshot.docs
//           .map((d) => ({
//             id: d.id,
//             title: d.data().title || "Luxury Apartment",
//             location: d.data().location || "Lagos",
//             price: d.data().priceFormatted || `₦${Number(d.data().pricePerNight || 0).toLocaleString()}`,
//             featured: true,
//             hasVideo: !!d.data().media?.video,
//             image: d.data().media?.img1 || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
//             tags: d.data().tags || ["24/7 POWER SUPPLY", "FREE WIFI", "SECURED AREA"],
//           }))
//           .filter((item) => item.id !== apartmentId); // Exclude current apartment

//         setRelatedApartments(allListings.slice(0, 2)); // Limit to 2 related items
//       } catch (error) {
//         console.error("Error fetching apartment detail:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApartmentDetails();
//   }, [apartmentId]);

//   const activeMedia = apartmentData?.gallery[activeMediaIndex] || {};

//   // Calculate nights automatically
//   const calculatedNights = useMemo(() => {
//     if (!checkIn || !checkOut) return 1;
//     const start = new Date(checkIn);
//     const end = new Date(checkOut);
//     const diffTime = Math.abs(end - start);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays > 0 ? diffDays : 1;
//   }, [checkIn, checkOut]);

//   const totalPrice = (apartmentData?.pricePerNight || 0) * calculatedNights;

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Booking Request Submitted for ${apartmentData?.title}!\nTotal: ₦${totalPrice.toLocaleString()}`
//     );
//   };

//   if (loading) {
//     return (
//       <PageWrapper>
//         <Container style={{ textAlign: "center", padding: "6rem 0" }}>
//           <p style={{ color: MutedText, fontSize: "1.1rem" }}>Loading apartment details...</p>
//         </Container>
//       </PageWrapper>
//     );
//   }

//   if (!apartmentData) {
//     return (
//       <PageWrapper>
//         <Container style={{ textAlign: "center", padding: "6rem 0" }}>
//           <p style={{ color: MutedText, fontSize: "1.1rem", marginBottom: "1rem" }}>Apartment not found.</p>
//           <BackLink href="/">← Back to Apartments</BackLink>
//         </Container>
//       </PageWrapper>
//     );
//   }

//   return (
//     <PageWrapper>
//       <Container>
//         <BackLink href="/">
//           <ArrowLeft style={{ width: "14px", height: "14px" }} /> BACK TO APARTMENTS
//         </BackLink>

//         <TwoColumnLayout>
//           {/* LEFT: GALLERY & APARTMENT INFO */}
//           <div>
//             <MediaStage>
//               {isPlayingVideo && activeMedia.type === "video" ? (
//                 <video src={activeMedia.videoUrl} controls autoPlay />
//               ) : (
//                 <>
//                   <img src={activeMedia.url} alt={apartmentData.title} />
//                   {activeMedia.type === "video" && (
//                     <PlayOverlay onClick={() => setIsPlayingVideo(true)}>
//                       <div className="play-btn">
//                         <Play style={{ width: "24px", height: "24px", fill: "#111827" }} />
//                       </div>
//                     </PlayOverlay>
//                   )}
//                 </>
//               )}
//             </MediaStage>

//             {/* THUMBNAILS */}
//             <ThumbnailGrid>
//               {apartmentData.gallery.map((item, idx) => (
//                 <ThumbCard
//                   key={item.id}
//                   $active={idx === activeMediaIndex}
//                   onClick={() => {
//                     setActiveMediaIndex(idx);
//                     setIsPlayingVideo(item.type === "video");
//                   }}
//                 >
//                   <img src={item.url} alt="thumbnail" />
//                   {item.type === "video" && (
//                     <div className="video-badge">
//                       <Play style={{ width: "16px", height: "16px", fill: "#fff" }} />
//                     </div>
//                   )}
//                 </ThumbCard>
//               ))}
//             </ThumbnailGrid>

//             {/* APARTMENT TEXT DETAILS */}
//             <InfoSection>
//               <MainTitle>{apartmentData.title}</MainTitle>
//               <LocationTag>
//                 <MapPin style={{ width: "14px", height: "14px" }} /> {apartmentData.location}
//               </LocationTag>

//               <p style={{ fontSize: "0.85rem", color: MutedText, display: "flex", gap: "6px" }}>
//                 <Bed style={{ width: "16px", height: "16px" }} /> {apartmentData.bedrooms} Bedrooms
//               </p>

//               <Divider />

//               <SubHeading>About this apartment</SubHeading>
//               <Description>{apartmentData.description}</Description>

//               <Divider />

//               <SubHeading>Amenities & Features</SubHeading>
//               <AmenitiesGrid>
//                 {apartmentData.amenities.map((amenity, idx) => {
//                   return (
//                     <AmenityItem key={idx}>
//                       <Zap />
//                       <span>{amenity.name || amenity}</span>
//                     </AmenityItem>
//                   );
//                 })}
//               </AmenitiesGrid>
//             </InfoSection>
//           </div>

//           {/* RIGHT: BOOKING SIDEBAR */}
//           <BookingCard>
//             <PriceHeader>
//               <div>
//                 <span className="price">{apartmentData.priceFormatted}</span>
//                 <span className="unit"> / night</span>
//               </div>
//               <span className="beds">{apartmentData.bedrooms} Bedrooms</span>
//             </PriceHeader>

//             <FormGrid onSubmit={handleBookingSubmit}>
//               <FormRow>
//                 <FormGroup>
//                   <label>CHECK-IN</label>
//                   <input
//                     type="date"
//                     value={checkIn}
//                     onChange={(e) => setCheckIn(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>CHECK-OUT</label>
//                   <input
//                     type="date"
//                     value={checkOut}
//                     onChange={(e) => setCheckOut(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//               </FormRow>

//               <FormGroup>
//                 <label>GUESTS</label>
//                 <select value={guests} onChange={(e) => setGuests(e.target.value)}>
//                   <option>1 Guest</option>
//                   <option>2 Guests</option>
//                   <option>3 Guests</option>
//                   <option>4+ Guests</option>
//                 </select>
//               </FormGroup>

//               <FormGroup>
//                 <label>FULL NAME</label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   required
//                 />
//               </FormGroup>

//               <FormRow>
//                 <FormGroup>
//                   <label>EMAIL</label>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>PHONE</label>
//                   <input
//                     type="tel"
//                     placeholder="Phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//               </FormRow>

//               <GoldSubmitBtn type="submit">
//                 BOOK & PAY ₦{totalPrice.toLocaleString()} →
//               </GoldSubmitBtn>

//               <DisclaimerNote>
//                 Prices as per night. Select your dates and guest count, then proceed to payment or contact your reservation.
//               </DisclaimerNote>
//             </FormGrid>
//           </BookingCard>
//         </TwoColumnLayout>
//       </Container>

//       {/* YOU MAY ALSO LIKE SECTION */}
//       {relatedApartments.length > 0 && (
//         <YouMayAlsoLikeSection>
//           <SectionHeader>
//             <span className="tag">— KEEP LOOKING —</span>
//             <h2>You May Also Like</h2>
//           </SectionHeader>

//           <RelatedGrid>
//             {relatedApartments.map((apt) => (
//               <RelatedCard key={apt.id}>
//                 <CardImageWrapper>
//                   <img src={apt.image} alt={apt.title} />
//                   {apt.featured && <span className="featured-badge">FEATURED</span>}
//                   {apt.hasVideo && (
//                     <span className="video-tag">
//                       <Play style={{ width: "12px", height: "12px" }} /> VIDEO TOUR
//                     </span>
//                   )}
//                 </CardImageWrapper>

//                 <CardBody>
//                   <CardTitle>{apt.title}</CardTitle>
//                   <LocationTag style={{ marginBottom: "0.5rem" }}>
//                     <MapPin style={{ width: "12px", height: "12px" }} /> {apt.location}
//                   </LocationTag>

//                   <CardPills>
//                     {apt.tags.map((tag, idx) => (
//                       <Pill key={idx}>{tag}</Pill>
//                     ))}
//                   </CardPills>

//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{apt.price}</span>
//                     <span style={{ fontSize: "0.75rem", color: MutedText }}>/ night</span>
//                   </div>

//                   <CardActions>
//                     <OutlineBtn href={`/apartments/${apt.id}`}>VIEW</OutlineBtn>
//                     <SolidBtn href={`/apartments/${apt.id}`}>BOOK</SolidBtn>
//                   </CardActions>
//                 </CardBody>
//               </RelatedCard>
//             ))}
//           </RelatedGrid>
//         </YouMayAlsoLikeSection>
//       )}
//     </PageWrapper>
//   );
// }





"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  MapPin,
  Calendar,
  Users,
  Bed,
  Play,
  CheckCircle2,
  ArrowLeft,
  Tv,
  Wifi,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { secondaryColoring, useAppContext } from "@/components/Context";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

/* ================= COLORS & THEMING ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreen = "#09281e";
const MidGreen = "#11382b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const BorderColor = "#E2DDD5";

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  color: ${DarkText};
  min-height: 100vh;
  padding-bottom: 5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 0;
  box-sizing: border-box;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${MutedText};
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: ${DarkText};
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

/* ----- MEDIA / GALLERY PLAYER ----- */
const MediaStage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #1a1a1a;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  img,
  iframe,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .play-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${GoldAccent};
    color: #111827;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ThumbCard = styled.div`
  aspect-ratio: 16 / 10;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid ${(p) => (p.$active ? GoldAccent : "transparent")};
  opacity: ${(p) => (p.$active ? 1 : 0.65)};
  transition: all 0.2s;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-badge {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }

  &:hover {
    opacity: 1;
  }
`;

/* ----- DETAILS SECTION ----- */
const InfoSection = styled.div`
  margin-top: 2rem;
`;

const MainTitle = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.4rem 0;
`;

const LocationTag = styled.p`
  font-size: 0.85rem;
  color: ${MutedText};
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${BorderColor};
  margin: 1.5rem 0;
`;

const SubHeading = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.35rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.75rem 0;
`;

const Description = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  line-height: 1.75;
  font-weight: 300;
  margin: 0;
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: ${DarkText};

  svg {
    width: 16px;
    height: 16px;
    color: ${MidGreen};
  }
`;

/* ----- BOOKING SIDEBAR CARD ----- */
const BookingCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 1.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 2rem;
`;

const PriceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5rem;

  .price {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${MidGreen};
  }

  .unit {
    font-size: 0.82rem;
    color: ${MutedText};
  }

  .beds {
    font-size: 0.75rem;
    color: ${MutedText};
  }
`;

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: ${MutedText};
    text-transform: uppercase;
  }

  input,
  select {
    width: 100%;
    padding: 0.75rem;
    background-color: ${WarmBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.82rem;
    color: ${DarkText};
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${GoldAccent};
    }
  }
`;

const GoldSubmitBtn = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: ${GoldAccent};
  color: #111827;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`;

const DirectTransferBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${WarmBg};
  color: ${MutedText};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${GoldAccent};
    color: ${DarkText};
  }
`;

const DisclaimerNote = styled.p`
  font-size: 0.68rem;
  color: ${MutedText};
  line-height: 1.5;
  text-align: center;
  margin-top: 1rem;
`;

/* ----- YOU MAY ALSO LIKE SECTION ----- */
const YouMayAlsoLikeSection = styled.section`
  background-color: ${WarmBg};
  margin-top: 5rem;
  padding: 4rem 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2.5rem;

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0;
  }
`;

const RelatedGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .featured-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${GoldAccent};
    color: #111827;
    font-size: 0.6rem;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 2px;
  }

  .video-tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.75);
    color: #ffffff;
    font-size: 0.62rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
`;

const CardTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 0.3rem 0;
`;

const CardPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0.8rem 0 1.2rem;
`;

const Pill = styled.span`
  background: ${WarmBg};
  color: ${DarkText};
  border: 1px solid ${BorderColor};
  font-size: 0.58rem;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 2px;
`;

const CardActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const OutlineBtn = styled(Link)`
  border: 1px solid ${MidGreen};
  color: ${MidGreen};
  padding: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 2px;
`;

const SolidBtn = styled(Link)`
  background: ${MidGreen};
  color: #ffffff;
  padding: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 2px;
`;

/* ================= MAIN COMPONENT ================= */
export default function ApartmentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const apartmentId = params?.id;
  const { payWithPaystack } = useAppContext();

  const [apartmentData, setApartmentData] = useState(null);
  const [relatedApartments, setRelatedApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Auth States
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  // Booking Form State
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Sync auth state & user details
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const data = userSnap.data();
            setUserData(data);
            setFullName(data.fullName || user.displayName || "");
            setEmail(user.email || "");
            setPhone(data.phone || user.phoneNumber || "");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch apartment details & related listings from Firestore
  useEffect(() => {
    const fetchApartmentDetails = async () => {
      if (!apartmentId) return;
      try {
        setLoading(true);
        const docRef = doc(db, "shortlets", apartmentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          const gallery = [];
          if (data.media?.img1) gallery.push({ id: "img-1", type: "image", url: data.media.img1 });
          if (data.media?.img2) gallery.push({ id: "img-2", type: "image", url: data.media.img2 });
          if (data.media?.img3) gallery.push({ id: "img-3", type: "image", url: data.media.img3 });
          if (data.media?.img4) gallery.push({ id: "img-4", type: "image", url: data.media.img4 });
          if (data.media?.video) gallery.push({ id: "vid-1", type: "video", url: data.media.img1 || data.media.img2, videoUrl: data.media.video });

          if (gallery.length === 0) {
            gallery.push({ id: "img-1", type: "image", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80" });
          }

          setApartmentData({
            id: docSnap.id,
            title: data.title || "Luxury Apartment",
            location: data.location || "Lagos",
            bedrooms: Number(data.bedrooms) || 1,
            pricePerNight: Number(data.pricePerNight) || 0,
            priceFormatted: data.priceFormatted || `₦${Number(data.pricePerNight || 0).toLocaleString()}`,
            description: data.description || "No description provided.",
            amenities: data.amenities || [
              { name: "24/7 power supply", icon: Zap },
              { name: "Free WiFi", icon: Wifi },
              { name: "Secured area", icon: ShieldCheck },
            ],
            gallery,
          });
        }

        const querySnapshot = await getDocs(collection(db, "shortlets"));
        const allListings = querySnapshot.docs
          .map((d) => ({
            id: d.id,
            title: d.data().title || "Luxury Apartment",
            location: d.data().location || "Lagos",
            price: d.data().priceFormatted || `₦${Number(d.data().pricePerNight || 0).toLocaleString()}`,
            featured: true,
            hasVideo: !!d.data().media?.video,
            image: d.data().media?.img1 || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            tags: d.data().tags || ["24/7 POWER SUPPLY", "FREE WIFI", "SECURED AREA"],
          }))
          .filter((item) => item.id !== apartmentId);

        setRelatedApartments(allListings.slice(0, 2));
      } catch (error) {
        console.error("Error fetching apartment detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartmentDetails();
  }, [apartmentId]);

  const activeMedia = apartmentData?.gallery[activeMediaIndex] || {};

  const calculatedNights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  const totalPrice = (apartmentData?.pricePerNight || 0) * calculatedNights;

  // Helper function to check login state before payment
  const checkAuthAndRequireLogin = async () => {
    if (!currentUser) {
      const res = await Swal.fire({
        title: "Login Required",
        text: "You must be logged in to book an apartment. Please click Login to continue.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#11382b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      });

      if (res.isConfirmed) {
        router.push("/login");
      }
      return false;
    }
    return true;
  };

  // Paystack Booking Handler
  const handlePayNow = async (e) => {
    e.preventDefault();
    const isLoggedIn = await checkAuthAndRequireLogin();
    if (!isLoggedIn) return;

    if (!checkIn || !checkOut) {
      Swal.fire("Dates Required", "Please select your check-in and check-out dates.", "warning");
      return;
    }

    if (totalPrice <= 0) {
      Swal.fire("Invalid Amount", "Please check your booking duration.", "warning");
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "subaccounts"));

      if (querySnapshot.empty) {
        Swal.fire(
          "Payout Account Missing",
          "The payout account configuration is missing. Please try again later.",
          "warning"
        );
        return;
      }

      const subaccountData = querySnapshot.docs[0].data();
      const subaccountCode = subaccountData.subaccount_code;

      if (!subaccountCode) {
        Swal.fire("Invalid Payout Setup", "The seller payout account configuration is invalid.", "error");
        return;
      }

      const uniqueOrderNumber = `APT-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

      const orderPayload = {
        orderNumber: uniqueOrderNumber,
        userId: currentUser.uid,
        items: [
          {
            id: apartmentData.id,
            name: apartmentData.title,
            title: apartmentData.title,
            price: apartmentData.pricePerNight,
            quantity: calculatedNights,
            total: totalPrice,
          },
        ],
        subtotal: totalPrice,
        deliveryFee: 0,
        discount: 0,
        finalTotal: totalPrice,
        currency: "NGN",
        bookingDetails: {
          checkIn,
          checkOut,
          guests,
          nights: calculatedNights,
        },
        accountInfo: {
          name: fullName || userData?.fullName || currentUser?.displayName || "Valued Customer",
          email: email || currentUser?.email || "",
          phone: phone || userData?.phone || currentUser?.phoneNumber || "Not provided",
        },
        paymentType: "ONLINE PAYMENT",
        paymentStatus: "Paid",
        orderStatus: "Pending",
      };

      localStorage.setItem("pendingOrder", JSON.stringify(orderPayload));
      payWithPaystack(totalPrice, "NGN", subaccountCode);
    } catch (error) {
      console.error("Error initializing Paystack payment:", error);
      Swal.fire("Error", "Could not verify payment configuration. Please try again.", "error");
    }
  };

  // Direct Bank Transfer Handler
  const handleDirectTransfer = async (e) => {
    e.preventDefault();
    const isLoggedIn = await checkAuthAndRequireLogin();
    if (!isLoggedIn) return;

    if (!checkIn || !checkOut) {
      Swal.fire("Dates Required", "Please select your check-in and check-out dates.", "warning");
      return;
    }

    if (totalPrice <= 0) {
      Swal.fire("Invalid Amount", "Please check your booking duration.", "warning");
      return;
    }

    const uniqueOrderNumber = `APT-TRF-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

    const pendingTransferPayload = {
      orderNumber: uniqueOrderNumber,
      userId: currentUser.uid,
      items: [
        {
          id: apartmentData.id,
          name: apartmentData.title,
          title: apartmentData.title,
          price: apartmentData.pricePerNight,
          quantity: calculatedNights,
          total: totalPrice,
        },
      ],
      subtotal: totalPrice,
      deliveryFee: 0,
      discount: 0,
      finalTotal: totalPrice,
      currency: "NGN",
      bookingDetails: {
        checkIn,
        checkOut,
        guests,
        nights: calculatedNights,
      },
      accountInfo: {
        name: fullName || userData?.fullName || currentUser?.displayName || "Valued Customer",
        email: email || currentUser?.email || "",
        phone: phone || userData?.phone || currentUser?.phoneNumber || "Not provided",
      },
    };

    localStorage.setItem("pendingTransferOrder", JSON.stringify(pendingTransferPayload));
    router.push("/dashboard/direct-transfer");
  };

  if (loading) {
    return (
      <PageWrapper>
        <Container style={{ textAlign: "center", padding: "6rem 0" }}>
          <p style={{ color: MutedText, fontSize: "1.1rem" }}>Loading apartment details...</p>
        </Container>
      </PageWrapper>
    );
  }

  if (!apartmentData) {
    return (
      <PageWrapper>
        <Container style={{ textAlign: "center", padding: "6rem 0" }}>
          <p style={{ color: MutedText, fontSize: "1.1rem", marginBottom: "1rem" }}>Apartment not found.</p>
          <BackLink href="/">← Back to Apartments</BackLink>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <BackLink href="/">
          <ArrowLeft style={{ width: "14px", height: "14px" }} /> BACK TO APARTMENTS
        </BackLink>

        <TwoColumnLayout>
          {/* LEFT: GALLERY & APARTMENT INFO */}
          <div>
            <MediaStage>
              {isPlayingVideo && activeMedia.type === "video" ? (
                <video src={activeMedia.videoUrl} controls autoPlay />
              ) : (
                <>
                  <img src={activeMedia.url} alt={apartmentData.title} />
                  {activeMedia.type === "video" && (
                    <PlayOverlay onClick={() => setIsPlayingVideo(true)}>
                      <div className="play-btn">
                        <Play style={{ width: "24px", height: "24px", fill: "#111827" }} />
                      </div>
                    </PlayOverlay>
                  )}
                </>
              )}
            </MediaStage>

            {/* THUMBNAILS */}
            <ThumbnailGrid>
              {apartmentData.gallery.map((item, idx) => (
                <ThumbCard
                  key={item.id}
                  $active={idx === activeMediaIndex}
                  onClick={() => {
                    setActiveMediaIndex(idx);
                    setIsPlayingVideo(item.type === "video");
                  }}
                >
                  <img src={item.url} alt="thumbnail" />
                  {item.type === "video" && (
                    <div className="video-badge">
                      <Play style={{ width: "16px", height: "16px", fill: "#fff" }} />
                    </div>
                  )}
                </ThumbCard>
              ))}
            </ThumbnailGrid>

            {/* APARTMENT TEXT DETAILS */}
            <InfoSection>
              <MainTitle>{apartmentData.title}</MainTitle>
              <LocationTag>
                <MapPin style={{ width: "14px", height: "14px" }} /> {apartmentData.location}
              </LocationTag>

              <p style={{ fontSize: "0.85rem", color: MutedText, display: "flex", gap: "6px" }}>
                <Bed style={{ width: "16px", height: "16px" }} /> {apartmentData.bedrooms} Bedrooms
              </p>

              <Divider />

              <SubHeading>About this apartment</SubHeading>
              <Description>{apartmentData.description}</Description>

              <Divider />

              <SubHeading>Amenities & Features</SubHeading>
              <AmenitiesGrid>
                {apartmentData.amenities.map((amenity, idx) => {
                  return (
                    <AmenityItem key={idx}>
                      <Zap />
                      <span>{amenity.name || amenity}</span>
                    </AmenityItem>
                  );
                })}
              </AmenitiesGrid>
            </InfoSection>
          </div>

          {/* RIGHT: BOOKING SIDEBAR */}
          <BookingCard>
            <PriceHeader>
              <div>
                <span className="price">{apartmentData.priceFormatted}</span>
                <span className="unit"> / night</span>
              </div>
              <span className="beds">{apartmentData.bedrooms} Bedrooms</span>
            </PriceHeader>

            <FormGrid>
              <FormRow>
                <FormGroup>
                  <label>CHECK-IN</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>CHECK-OUT</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label>GUESTS</label>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <label>EMAIL</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>PHONE</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </FormGroup>
              </FormRow>

              <GoldSubmitBtn type="button" onClick={handlePayNow}>
                PAY NOW WITH PAYSTACK (₦{totalPrice.toLocaleString()}) →
              </GoldSubmitBtn>

              <DirectTransferBtn type="button" onClick={handleDirectTransfer}>
                PAY BY DIRECT TRANSFER
              </DirectTransferBtn>

              <DisclaimerNote>
                Select your dates and guest count, then proceed via Paystack or Direct Bank Transfer.
              </DisclaimerNote>
            </FormGrid>
          </BookingCard>
        </TwoColumnLayout>
      </Container>

      {/* YOU MAY ALSO LIKE SECTION */}
      {relatedApartments.length > 0 && (
        <YouMayAlsoLikeSection>
          <SectionHeader>
            <span className="tag">— KEEP LOOKING —</span>
            <h2>You May Also Like</h2>
          </SectionHeader>

          <RelatedGrid>
            {relatedApartments.map((apt) => (
              <RelatedCard key={apt.id}>
                <CardImageWrapper>
                  <img src={apt.image} alt={apt.title} />
                  {apt.featured && <span className="featured-badge">FEATURED</span>}
                  {apt.hasVideo && (
                    <span className="video-tag">
                      <Play style={{ width: "12px", height: "12px" }} /> VIDEO TOUR
                    </span>
                  )}
                </CardImageWrapper>

                <CardBody>
                  <CardTitle>{apt.title}</CardTitle>
                  <LocationTag style={{ marginBottom: "0.5rem" }}>
                    <MapPin style={{ width: "12px", height: "12px" }} /> {apt.location}
                  </LocationTag>

                  <CardPills>
                    {apt.tags.map((tag, idx) => (
                      <Pill key={idx}>{tag}</Pill>
                    ))}
                  </CardPills>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{apt.price}</span>
                    <span style={{ fontSize: "0.75rem", color: MutedText }}>/ night</span>
                  </div>

                  <CardActions>
                    <OutlineBtn href={`/apartments/${apt.id}`}>VIEW</OutlineBtn>
                    <SolidBtn href={`/apartments/${apt.id}`}>BOOK</SolidBtn>
                  </CardActions>
                </CardBody>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </YouMayAlsoLikeSection>
      )}
    </PageWrapper>
  );
}