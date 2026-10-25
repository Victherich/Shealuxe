



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import styled, { keyframes } from "styled-components";
// import Swal from "sweetalert2";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "@/firebaseConfig";
// import { 
//   Sparkles, 
//   ShieldCheck, 
//   User, 
//   Mail, 
//   Phone, 
//   Lock, 
//   Eye, 
//   EyeOff, 
//   ArrowRight,
//   CheckCircle2
// } from "lucide-react";
// import { primaryColoring, secondaryColoring } from "@/components/Context";

// // --- MAJINFOTEK & MODERN BRAND THEME ---
// const brandCyan = secondaryColoring;
// const brandDarkNavy = primaryColoring;
// const brandGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;

// // Animations
// const floatAnimation = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-4px) rotate(1deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// const PageContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f8fafc;
//   padding: 32px 16px;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
//                 radial-gradient(circle at 90% 80%, rgba(28, 59, 164, 0.05) 0%, transparent 40%);
//     pointer-events: none;
//     z-index: 1;
//   }
// `;

// const AuthWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   width: 100%;
//   max-width: 1000px;
//   background: #ffffff;
//   border-radius: 24px;
//   border: 1px solid #e2e8f0;
//   box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.07);
//   overflow: hidden;
//   position: relative;
//   z-index: 2;

//   @media (min-width: 768px) {
//     grid-template-columns: 1.05fr 1fr;
//   }
// `;

// const BrandingSide = styled.div`
//   background: ${brandGradient};
//   color: #ffffff;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.15), transparent 60%);
//     z-index: 1;
//   }

//   @media (min-width: 768px) {
//     padding: 50px;
//   }
// `;

// const BrandLogo = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 1.25rem;
//   font-weight: 800;
//   letter-spacing: -0.02em;
//   color: #ffffff;
//   margin: 0;
//   position: relative;
//   z-index: 2;
// `;

// const Badge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 14px;
//   border-radius: 9999px;
//   background: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(8px);
//   border: 1px solid rgba(255, 255, 255, 0.25);
//   color: #ffffff;
//   font-size: 0.75rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   margin-bottom: 16px;
//   animation: ${floatAnimation} 4s ease-in-out infinite;
//   width: fit-content;
// `;

// const BrandingContent = styled.div`
//   position: relative;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   margin: auto 0;
//   padding: 20px 0;
// `;

// const Headline = styled.h1`
//   font-size: clamp(2rem, 3vw, 2.5rem);
//   font-weight: 800;
//   line-height: 1.15;
//   letter-spacing: -0.03em;
//   margin: 0;
//   color: #ffffff;
// `;

// const Subtext = styled.p`
//   font-size: 0.95rem;
//   line-height: 1.6;
//   color: #f1f5f9;
//   opacity: 0.9;
//   margin: 0;
//   max-width: 340px;
// `;

// const FeatureList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   position: relative;
//   z-index: 2;
//   margin-top: 10px;
// `;

// const FeatureItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 0.85rem;
//   color: #e2e8f0;
//   font-weight: 500;

//   svg {
//     color: #c4b5fd;
//     width: 1rem;
//     height: 1rem;
//     flex-shrink: 0;
//   }
// `;

// const FormSide = styled.div`
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: #475569;
//   background: #ffffff;

//   @media (min-width: 768px) {
//     padding: 48px;
//   }
// `;

// const FormHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   margin-bottom: 24px;
// `;

// const Title = styled.h2`
//   font-size: 1.75rem;
//   font-weight: 800;
//   margin: 0;
//   color: #0f172a;
//   letter-spacing: -0.02em;
// `;

// const FormSubtitle = styled.p`
//   font-size: 0.9rem;
//   color: #64748b;
//   margin: 0;
// `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 16px;

//   @media (max-width: 500px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   grid-column: ${(props) => (props.$full ? "span 2" : "span 1")};

//   @media (max-width: 500px) {
//     grid-column: span 1;
//   }
// `;

// const Label = styled.label`
//   font-size: 0.85rem;
//   font-weight: 600;
//   color: #334155;
// `;

// const InputWrapper = styled.div`
//   position: relative;
//   width: 100%;
// `;

// const InputIconWrapper = styled.div`
//   position: absolute;
//   left: 14px;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #94a3b8;
//   display: flex;
//   align-items: center;
//   pointer-events: none;

//   svg {
//     width: 1.15rem;
//     height: 1.15rem;
//   }
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px 16px 12px 44px;
//   border-radius: 12px;
//   background-color: #f8fafc !important;
//   color: #0f172a !important;
//   border: 1px solid #cbd5e1;
//   font-size: 0.95rem;
//   outline: none;
//   transition: all 0.2s ease;
//   box-sizing: border-box;

//   &::placeholder {
//     color: #94a3b8;
//   }

//   &:focus {
//     border-color: ${brandCyan};
//     background-color: #ffffff !important;
//     box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
//   }
// `;

// const EyeButton = styled.button`
//   position: absolute;
//   right: 14px;
//   top: 50%;
//   transform: translateY(-50%);
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   color: #64748b;
//   display: flex;
//   align-items: center;
//   padding: 4px;
//   transition: color 0.2s ease;

//   &:hover {
//     color: ${brandCyan};
//   }

//   svg {
//     width: 1.15rem;
//     height: 1.15rem;
//   }
// `;

// const CheckboxWrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   font-size: 0.85rem;
//   line-height: 1.4;
//   color: #475569;
//   grid-column: span 2;
//   margin: 4px 0;

//   @media (max-width: 500px) {
//     grid-column: span 1;
//   }
// `;

// const Checkbox = styled.input`
//   margin-top: 2px;
//   width: 16px;
//   height: 16px;
//   cursor: pointer;
//   accent-color: ${brandCyan};
//   border-radius: 4px;
// `;

// const PolicyText = styled.span`
//   text-align: left;
//   margin: 0;
  
//   a {
//     color: ${brandCyan};
//     font-weight: 700;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const SubmitButton = styled.button`
//   grid-column: span 2;
//   width: 100%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   padding: 14px 24px;
//   border-radius: 12px;
//   background: ${brandGradient};
//   color: #ffffff;
//   font-weight: 700;
//   font-size: 1rem;
//   border: none;
//   cursor: pointer;
//   box-shadow: 0 4px 16px rgba(139, 92, 246, 0.25);
//   transition: all 0.3s ease;
//   margin-top: 4px;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35);
//   }

//   @media (max-width: 500px) {
//     grid-column: span 1;
//   }
// `;

// const LinkText = styled.p`
//   grid-column: span 2;
//   margin: 8px 0 0 0;
//   cursor: pointer;
//   color: #64748b;
//   font-size: 0.9rem;
//   text-align: center;

//   span {
//     color: ${brandCyan};
//     font-weight: 700;
//     transition: text-decoration 0.2s;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 500px) {
//     grid-column: span 1;
//   }
// `;

// // ✨ USER SIGNUP COMPONENT
// export default function UserSignup() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     confirmEmail: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     role: "customer",
//   });
//   const [agreed, setAgreed] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.email !== form.confirmEmail) {
//       return Swal.fire({
//         title: "Error",
//         text: "Emails do not match",
//         icon: "error",
//         confirmButtonColor: "#8b5cf6",
//         background: "#ffffff",
//         color: "#0f172a",
//       });
//     }

//     if (form.password !== form.confirmPassword) {
//       return Swal.fire({
//         title: "Error",
//         text: "Passwords do not match",
//         icon: "error",
//         confirmButtonColor: "#8b5cf6",
//         background: "#ffffff",
//         color: "#0f172a",
//       });
//     }

//     if (!agreed) {
//       return Swal.fire({
//         title: "Required",
//         text: "You must agree to the Terms & Privacy Policy to continue",
//         icon: "warning",
//         confirmButtonColor: "#8b5cf6",
//         background: "#ffffff",
//         color: "#0f172a",
//       });
//     }

//     Swal.fire({
//       title: "Please wait...",
//       text: "Setting up your account...",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//       background: "#ffffff",
//       color: "#0f172a",
//     });

//     try {
//       const { name, email, phone, password, role } = form;
      
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await updateProfile(user, { displayName: name });

//       await setDoc(doc(db, "users", user.uid), {
//         uid: user.uid,
//         name,
//         email,
//         phone,
//         role, 
//         createdAt: new Date(),
//       });

//       Swal.fire({
//         title: "Success 🎉",
//         text: "Welcome! Your account is ready.",
//         icon: "success",
//         confirmButtonColor: "#8b5cf6",
//         background: "#ffffff",
//         color: "#0f172a",
//       });
//       router.push("/dashboard"); 
      
//     } catch (err) {
//      console.log("Error code:", err.code);
//     console.log("Error message:", err.message);

//     Swal.fire({
//       title: "Error ❌",
//       text: `${err.code}: ${err.message}`, // This will show you if it's permission-denied or something else
//       icon: "error",
//       confirmButtonColor: "#8b5cf6",
//       background: "#ffffff",
//       color: "#0f172a",
//     });
//     }
//   };

//   return (
//     <PageContainer>
//       <AuthWrapper>
//         {/* Left Visual Branding Panel */}
//         <BrandingSide>
//           <BrandLogo>
//             <Sparkles className="w-5 h-5 text-purple-300" />
//             <span>SHEALUXE</span>
//           </BrandLogo>

//           <BrandingContent>
//             <Badge>
//               <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
//               <span>Get Started</span>
//             </Badge>
//             <Headline>Create Your Account</Headline>
//             <Subtext>
//               Join our ecosystem to track purchases, manage system resources, and experience modern transactions seamlessly.
//             </Subtext>
//           </BrandingContent>

//           <FeatureList>
//             <FeatureItem>
//               <CheckCircle2 />
//               Instant access to your secure client dashboard
//             </FeatureItem>
//             <FeatureItem>
//               <ShieldCheck />
//               Full data protection and compliance
//             </FeatureItem>
//           </FeatureList>
//         </BrandingSide>

//         {/* Right Form Panel */}
//         <FormSide>
//           <FormHeader>
//             <Title>Create Account</Title>
//             <FormSubtitle>Fill in your details to get started</FormSubtitle>
//           </FormHeader>

//           <form onSubmit={handleSubmit}>
//             <FormGrid>
//               <InputGroup $full>
//                 <Label>Full Name</Label>
//                 <InputWrapper>
//                   <InputIconWrapper>
//                     <User />
//                   </InputIconWrapper>
//                   <Input 
//                     name="name" 
//                     placeholder="John Doe" 
//                     value={form.name} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </InputWrapper>
//               </InputGroup>

//               <InputGroup>
//                 <Label>Email Address</Label>
//                 <InputWrapper>
//                   <InputIconWrapper>
//                     <Mail />
//                   </InputIconWrapper>
//                   <Input 
//                     name="email" 
//                     type="email" 
//                     placeholder="name@example.com" 
//                     value={form.email} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </InputWrapper>
//               </InputGroup>

//               <InputGroup>
//                 <Label>Confirm Email</Label>
//                 <InputWrapper>
//                   <InputIconWrapper>
//                     <Mail />
//                   </InputIconWrapper>
//                   <Input 
//                     name="confirmEmail" 
//                     type="email" 
//                     placeholder="name@example.com" 
//                     value={form.confirmEmail} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </InputWrapper>
//               </InputGroup>

//               <InputGroup $full>
//                 <Label>Phone Number</Label>
//                 <InputWrapper>
//                   <InputIconWrapper>
//                     <Phone />
//                   </InputIconWrapper>
//                   <Input 
//                     name="phone" 
//                     type="tel" 
//                     placeholder="08012345678" 
//                     value={form.phone} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </InputWrapper>
//               </InputGroup>

//               <InputGroup>
//                 <Label>Password</Label>
//                 <InputWrapper>
//                   <InputIconWrapper>
//                     <Lock />
//                   </InputIconWrapper>
//                   <Input
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="••••••••"
//                     value={form.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <EyeButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
//                     {showPassword ? <EyeOff /> : <Eye />}
//                   </EyeButton>
//                 </InputWrapper>
//               </InputGroup>

//               <InputGroup>
//                 <Label>Confirm Password</Label>
//                 <InputWrapper>
//                   <InputIconWrapper>
//                     <Lock />
//                   </InputIconWrapper>
//                   <Input
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="••••••••"
//                     value={form.confirmPassword}
//                     onChange={handleChange}
//                     required
//                   />
//                   <EyeButton type="button" onClick={() => setShowConfirmPassword((prev) => !prev)}>
//                     {showConfirmPassword ? <EyeOff /> : <Eye />}
//                   </EyeButton>
//                 </InputWrapper>
//               </InputGroup>

//               <CheckboxWrapper>
//                 <Checkbox
//                   type="checkbox"
//                   checked={agreed}
//                   onChange={(e) => setAgreed(e.target.checked)}
//                 />
//                 <PolicyText>
//                   I agree to the{" "}
//                   <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
//                     Terms & Conditions
//                   </a>{" "}
//                   and{" "}
//                   <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
//                     Privacy Policy
//                   </a>
//                 </PolicyText>
//               </CheckboxWrapper>

//               <SubmitButton type="submit">
//                 <span>Create Account</span>
//                 <ArrowRight className="w-4 h-4" />
//               </SubmitButton>

//               <LinkText onClick={() => router.push("/login")}>
//                 Already have an account? <span>Login</span>
//               </LinkText>
//             </FormGrid>
//           </form>
//         </FormSide>
//       </AuthWrapper>
//     </PageContainer>
//   );
// }





"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";
import { User, Mail, Phone, Lock, UserPlus } from "lucide-react";
import { secondaryColoring } from "@/components/Context";

/* ================= COLORS & BRANDING ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const InputBorder = "#E2DDD5";

/* ================= PAGE & CARD CONTAINERS ================= */
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${WarmBg};
  padding: 32px 16px;
  box-sizing: border-box;
  font-family: inherit;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const IconHeaderBadge = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background-color: ${GreenBtnBg};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 14px rgba(17, 56, 43, 0.2);

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.2rem;
  font-weight: 500;
  color: ${DarkText};
  margin: 0 0 0.4rem 0;
  letter-spacing: -0.01em;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${MutedText};
  margin: 0;
  font-weight: 300;
`;

const AuthCard = styled.div`
  width: 100%;
  max-width: 480px;
  background: ${CardBg};
  border: 1px solid ${InputBorder};
  border-radius: 12px;
  padding: 2.2rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;

/* ================= GOOGLE BUTTON ================= */
const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.8rem 1rem;
  background-color: #ffffff;
  border: 1px solid ${InputBorder};
  border-radius: 4px;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${DarkText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${GoldAccent};
    background-color: #fafafa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

/* ================= DIVIDER ================= */
const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #a8a299;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: ${InputBorder};
  }

  span {
    padding: 0 0.8rem;
  }
`;

/* ================= FORM STYLES ================= */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${DarkText};
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #a8a299;
  display: flex;
  align-items: center;
  pointer-events: none;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 38px;
  border-radius: 4px;
  background-color: #ffffff;
  color: ${DarkText};
  border: 1px solid ${InputBorder};
  font-size: 0.88rem;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &::placeholder {
    color: #a8a299;
    font-weight: 300;
  }

  &:focus {
    border-color: ${GoldAccent};
    box-shadow: 0 0 0 2px rgba(226, 176, 74, 0.15);
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.82rem;
  line-height: 1.4;
  color: ${MutedText};
  margin: 0.2rem 0;
`;

const Checkbox = styled.input`
  margin-top: 3px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: ${GreenBtnBg};
  border-radius: 3px;
`;

const PolicyText = styled.span`
  text-align: left;
  margin: 0;

  a {
    color: ${GreenBtnBg};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${GreenBtnBg};
  color: #ffffff;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.05em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.4rem;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FooterText = styled.p`
  font-size: 0.85rem;
  color: ${MutedText};
  margin-top: 1.5rem;
  text-align: center;

  span {
    color: ${GreenBtnBg};
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ================= MAIN SIGNUP COMPONENT ================= */
export default function UserSignup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // 1. Email & Password Sign Up
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.email !== form.confirmEmail) {
      return Swal.fire({
        title: "Error ❌",
        text: "Emails do not match",
        icon: "error",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }

    if (form.password !== form.confirmPassword) {
      return Swal.fire({
        title: "Error ❌",
        text: "Passwords do not match",
        icon: "error",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }

    if (!agreed) {
      return Swal.fire({
        title: "Required ⚠️",
        text: "You must agree to the Terms & Privacy Policy to continue",
        icon: "warning",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }

    Swal.fire({
      title: "Please wait...",
      text: "Setting up your account...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      background: "#ffffff",
      color: "#111827",
    });

    try {
      const { name, email, phone, password, role } = form;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        phone,
        role,
        createdAt: new Date(),
      });

      Swal.fire({
        title: "Success 🎉",
        text: "Welcome! Your account is ready.",
        icon: "success",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
      router.push("/dashboard");
    } catch (err) {
      console.log("Error code:", err.code);
      console.log("Error message:", err.message);

      Swal.fire({
        title: "Error ❌",
        text: `${err.code}: ${err.message}`,
        icon: "error",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }
  };

  // 2. Google Sign Up / Sign In Integration
  const handleGoogleSignUp = async () => {
    // Swal.fire({
    //   title: "Connecting...",
    //   text: "Opening Google Sign-In...",
    //   allowOutsideClick: false,
    //   didOpen: () => Swal.showLoading(),
    //   background: "#ffffff",
    //   color: "#111827",
    // });

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Sync Firestore user profile document if it doesn't exist yet
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "User",
          email: user.email,
          phone: user.phoneNumber || "",
          role: "customer",
          createdAt: new Date(),
        });
      }

      Swal.fire({
        title: "Success 🎉",
        text: "Signed up with Google successfully!",
        icon: "success",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
      router.push("/dashboard");
    } catch (error) {
      Swal.fire({
        title: "Google Sign-Up Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }
  };

  return (
    <PageContainer>
      {/* HEADER LOGO ICON AND TITLE */}
      <HeaderWrapper>
        <IconHeaderBadge>
          <UserPlus />
        </IconHeaderBadge>
        <Title>Create an account</Title>
        <Subtitle>Sign up to get started</Subtitle>
      </HeaderWrapper>

      {/* SIGNUP CARD CONTAINER */}
      <AuthCard>
        {/* GOOGLE SIGN UP BUTTON */}
        <GoogleButton type="button" onClick={handleGoogleSignUp}>
          <svg viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Continue with Google
        </GoogleButton>

        <Divider>
          <span>OR</span>
        </Divider>

        {/* REGISTRATION FORM */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <InputWrapper>
              <InputIconWrapper>
                <User />
              </InputIconWrapper>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <InputWrapper>
                <InputIconWrapper>
                  <Mail />
                </InputIconWrapper>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmEmail">Confirm Email</Label>
              <InputWrapper>
                <InputIconWrapper>
                  <Mail />
                </InputIconWrapper>
                <Input
                  id="confirmEmail"
                  name="confirmEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={form.confirmEmail}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <InputWrapper>
              <InputIconWrapper>
                <Phone />
              </InputIconWrapper>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="08012345678"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <InputWrapper>
                <InputIconWrapper>
                  <Lock />
                </InputIconWrapper>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <InputWrapper>
                <InputIconWrapper>
                  <Lock />
                </InputIconWrapper>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>
          </FormRow>

          <CheckboxWrapper>
            <Checkbox
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <PolicyText>
              I agree to the{" "}
              <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </PolicyText>
          </CheckboxWrapper>

          <SubmitButton type="submit">Create account</SubmitButton>
        </Form>
      </AuthCard>

      {/* FOOTER LOGIN LINK */}
      <FooterText>
        Already have an account?{" "}
        <span onClick={() => router.push("/login")}>Log in</span>
      </FooterText>
    </PageContainer>
  );
}