

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import styled, { keyframes } from "styled-components";
// import Swal from "sweetalert2";
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebaseConfig";
// import { Sparkles, ShieldCheck, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
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
//     grid-template-columns: 1.1fr 1fr;
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
//     padding: 50px;
//   }
// `;

// const FormHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   margin-bottom: 28px;
// `;

// const Title = styled.h2`
//   font-size: 1.85rem;
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

// const FormGrid = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
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

// const SubmitButton = styled.button`
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
//   margin-top: 6px;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35);
//   }

//   &:disabled {
//     opacity: 0.7;
//     cursor: not-allowed;
//     transform: none;
//   }
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   margin-top: 6px;
//   text-align: center;
// `;

// const LinkText = styled.p`
//   margin: 0;
//   cursor: pointer;
//   color: #64748b;
//   font-size: 0.9rem;

//   span {
//     color: ${brandCyan};
//     font-weight: 700;
//     transition: text-decoration 0.2s;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const LoadingContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #f8fafc;
//   color: #0f172a;
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 24px;
// `;

// // ✨ USER LOGIN COMPONENT
// export default function UserLogin() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     Swal.fire({
//       title: "Please wait...",
//       text: "Authenticating your session...",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//       background: "#ffffff",
//       color: "#0f172a",
//     });

//     try {
//       const { email, password } = form;
//       await signInWithEmailAndPassword(auth, email, password);
//       Swal.fire({
//         title: "Success ✅",
//         text: "Logged in successfully",
//         icon: "success",
//         confirmButtonColor: "#8b5cf6",
//         background: "#ffffff",
//         color: "#0f172a",
//       });
//       router.push("/dashboard");
//     } catch (error) {
//       Swal.fire({
//         title: "Login Failed ❌",
//         text: error.message,
//         icon: "error",
//         confirmButtonColor: "#8b5cf6",
//         background: "#ffffff",
//         color: "#0f172a",
//       });
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setLoading(false);
//       if (user) router.push("/dashboard");
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (loading) return <LoadingContainer>Loading...</LoadingContainer>;

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
//               <span>Secure Portal</span>
//             </Badge>
//             <Headline>Welcome Back</Headline>
//             <Subtext>
//               Log in to access your dashboard, manage system resources, and experience modern transactions seamlessly.
//             </Subtext>
//           </BrandingContent>

//           <FeatureList>
//             <FeatureItem>
//               <ShieldCheck />
//               Enterprise-grade encryption and privacy protection
//             </FeatureItem>
//             <FeatureItem>
//               <Sparkles />
//               Real-time synchronization across your devices
//             </FeatureItem>
//           </FeatureList>
//         </BrandingSide>

//         {/* Right Form Panel */}
//         <FormSide>
//           <FormHeader>
//             <Title>Sign In</Title>
//             <FormSubtitle>Enter your account details to proceed</FormSubtitle>
//           </FormHeader>

//           <FormGrid onSubmit={handleSubmit}>
//             <InputGroup>
//               <Label>Email Address</Label>
//               <InputWrapper>
//                 <InputIconWrapper>
//                   <Mail />
//                 </InputIconWrapper>
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </InputWrapper>
//             </InputGroup>

//             <InputGroup>
//               <Label>Password</Label>
//               <InputWrapper>
//                 <InputIconWrapper>
//                   <Lock />
//                 </InputIconWrapper>
//                 <Input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   value={form.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <EyeButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
//                   {showPassword ? <EyeOff /> : <Eye /> }
//                 </EyeButton>
//               </InputWrapper>
//             </InputGroup>

//             <SubmitButton type="submit">
//               <span>Sign In</span>
//               <ArrowRight className="w-4 h-4" />
//             </SubmitButton>

//             <LinkContainer>
//               <LinkText onClick={() => router.push("/signup")}>
//                 Don't have an account? <span>Sign Up</span>
//               </LinkText>

//               <LinkText onClick={() => router.push("/forgot-password")}>
//                 <span>Forgot Password?</span>
//               </LinkText>
//             </LinkContainer>
//           </FormGrid>
//         </FormSide>
//       </AuthWrapper>
//     </PageContainer>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Mail, Lock, LogIn } from "lucide-react";
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
  max-width: 440px;
  background: ${CardBg};
  border: 1px solid ${InputBorder};
  border-radius: 12px;
  padding: 2rem;
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
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${DarkText};
`;

const ForgotLink = styled.span`
  font-size: 0.78rem;
  color: ${GreenBtnBg};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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
  margin-top: 0.5rem;

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

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${WarmBg};
  color: ${DarkText};
  font-size: 1rem;
  font-weight: 500;
`;

/* ================= MAIN LOGIN COMPONENT ================= */
export default function UserLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 1. Email & Password Sign In
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Please wait...",
      text: "Authenticating your session...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      background: "#ffffff",
      color: "#111827",
    });

    try {
      const { email, password } = form;
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Success ✅",
        text: "Logged in successfully",
        icon: "success",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
      router.push("/dashboard");
    } catch (error) {
      Swal.fire({
        title: "Login Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }
  };

  // 2. Continue with Google Sign In
  const handleGoogleSignIn = async () => {
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
      await signInWithPopup(auth, provider);
      Swal.fire({
        title: "Success ✅",
        text: "Signed in with Google successfully",
        icon: "success",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
      router.push("/dashboard");
    } catch (error) {
      Swal.fire({
        title: "Google Sign-In Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: GreenBtnBg,
        background: "#ffffff",
        color: "#111827",
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) router.push("/dashboard");
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <LoadingContainer>Loading...</LoadingContainer>;

  return (
    <PageContainer>
      {/* HEADER LOGO ICON AND TITLE */}
      <HeaderWrapper>
        <IconHeaderBadge>
          <LogIn />
        </IconHeaderBadge>
        <Title>Welcome back</Title>
        <Subtitle>Log in to your account</Subtitle>
      </HeaderWrapper>

      {/* LOGIN CARD CONTAINER */}
      <AuthCard>
        {/* GOOGLE SIGN IN BUTTON */}
        <GoogleButton type="button" onClick={handleGoogleSignIn}>
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

        {/* EMAIL / PASSWORD FORM */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
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
            <LabelRow>
              <Label htmlFor="password">Password</Label>
              <ForgotLink onClick={() => router.push("/forgot-password")}>
                Forgot password?
              </ForgotLink>
            </LabelRow>
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

          <SubmitButton type="submit">Log in</SubmitButton>
        </Form>
      </AuthCard>

      {/* FOOTER SIGN UP LINK */}
      <FooterText>
        Don't have an account?{" "}
        <span onClick={() => router.push("/signup")}>Create one</span>
      </FooterText>
    </PageContainer>
  );
}