





// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebaseConfig";

// // 🎨 ENITZ BRAND THEME COLORS
// const PrimaryNavy = "#0B1B48";
// const PrimaryCyan = "#00AEEF";
// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const LightBg = "#f8fafc";
// const TextMuted = "#475569";
// const ThemeGradient = "linear-gradient(135deg, #0B1B48 0%, #00AEEF 100%)";

// // 🌟 Styled Components (Clean, Professional Spacing)
// const PageContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${LightBg};
//   padding: 24px 16px;
//   box-sizing: border-box;
// `;

// const AuthWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   width: 100%;
//   max-width: 1000px;
//   background: ${White};
//   border-radius: 20px;
//   border: 1px solid ${Border};
//   box-shadow: 0 12px 30px rgba(11, 27, 72, 0.08);
//   overflow: hidden;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const BrandingSide = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
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
//     background: linear-gradient(135deg, rgba(11, 27, 72, 0.15) 0%, rgba(0, 0, 0, 0.1) 100%);
//     z-index: 1;
//   }
// `;

// const BrandingContent = styled.div`
//   position: relative;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   margin: auto 0;
// `;

// const BrandLogo = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 800;
//   letter-spacing: -0.5px;
//   color: ${White};
//   margin: 0;
//   position: relative;
//   z-index: 2;

//   span {
//     color: ${PrimaryCyan};
//   }
// `;

// const Headline = styled.h1`
//   font-size: clamp(1.8rem, 3vw, 2.4rem);
//   font-weight: 800;
//   line-height: 1.2;
//   letter-spacing: -0.5px;
//   margin: 0;
// `;

// const Subtext = styled.p`
//   font-size: 0.95rem;
//   line-height: 1.6;
//   color: #f8fafc;
//   opacity: 0.95;
//   margin: 0;
// `;

// const FormSide = styled.div`
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: ${TextMuted};
//   box-sizing: border-box;

//   @media (max-width: 480px) {
//     padding: 24px;
//   }
// `;

// const FormHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin-bottom: 24px;
// `;

// const Title = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 800;
//   margin: 0;
//   color: ${PrimaryNavy};
//   text-align: left;
// `;

// const FormGrid = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin: 0;
// `;

// const Label = styled.label`
//   font-size: 0.85rem;
//   font-weight: 700;
//   color: ${TextMuted};
//   text-align: left;
//   margin: 0;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px 16px;
//   border: 1px solid ${Border};
//   border-radius: 10px;
//   font-size: 0.95rem;
//   background: ${White};
//   color: ${Dark};
//   outline: none;
//   box-sizing: border-box;
//   margin: 0;
//   box-shadow: 0 2px 6px rgba(11, 27, 72, 0.02);
//   transition: all 0.2s ease;

//   &:focus {
//     border-color: ${PrimaryCyan};
//     box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.15);
//   }
// `;

// const PasswordWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   margin: 0;
// `;

// const EyeButton = styled.button`
//   position: absolute;
//   right: 14px;
//   top: 50%;
//   transform: translateY(-50%);
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   font-size: 0.85rem;
//   color: ${PrimaryCyan};
//   font-weight: 700;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 14px;
//   font-size: 1rem;
//   border: none;
//   border-radius: 12px;
//   cursor: pointer;
//   font-weight: 700;
//   box-shadow: 0 6px 20px rgba(0, 174, 239, 0.3);
//   transition: all 0.3s ease;
//   margin-top: 4px;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-2px);
//     box-shadow: 0 8px 25px rgba(0, 174, 239, 0.45);
//   }
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-top: 8px;
//   text-align: center;
// `;

// const LinkText = styled.p`
//   margin: 0;
//   cursor: pointer;
//   color: ${TextMuted};
//   font-size: 0.9rem;

//   span {
//     color: ${PrimaryCyan};
//     font-weight: 700;

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
//   background: ${LightBg};
//   color: ${Dark};
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 24px;
//   box-sizing: border-box;
// `;

// // ✨ LOGIN COMPONENT
// export default function UserLogin() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     Swal.fire({
//       title: "Please wait...",
//       text: "Logging in...",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     try {
//       const { email, password } = form;
//       await signInWithEmailAndPassword(auth, email, password);
//       Swal.fire("Success ✅", "Logged in successfully", "success");
//       router.push("/dashboard");
//     } catch (error) {
//       Swal.fire("Login Failed ❌", error.message, "error");
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAuthenticated(!!user);
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
//             ENITZ 
//             {/* <span>GLOBAL</span> */}
//           </BrandLogo>
//           <BrandingContent>
//             <Headline>Welcome Back</Headline>
//             <Subtext>
//               Log in to access your dashboard, manage items, and experience modern transactions.
//             </Subtext>
//           </BrandingContent>
//           <div />
//         </BrandingSide>

//         {/* Right Form Panel */}
//         <FormSide>
//           <FormHeader>
//             <Title>Login</Title>
//           </FormHeader>

//           <form onSubmit={handleSubmit}>
//             <FormGrid>
//               <InputGroup>
//                 <Label>Email Address</Label>
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </InputGroup>

//               <InputGroup>
//                 <Label>Password</Label>
//                 <PasswordWrapper>
//                   <Input
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="••••••••"
//                     value={form.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <EyeButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
//                     {showPassword ? "Hide" : "Show"}
//                   </EyeButton>
//                 </PasswordWrapper>
//               </InputGroup>

//               <Button type="submit">Login</Button>

//               <LinkContainer>
//                 <LinkText onClick={() => router.push("/signup")}>
//                   Don't have an account? <span>Sign Up</span>
//                 </LinkText>

//                 <LinkText onClick={() => router.push("/forgot-password")}>
//                   <span>Forgot Password</span>
//                 </LinkText>
//               </LinkContainer>
//             </FormGrid>
//           </form>
//         </FormSide>
//       </AuthWrapper>
//     </PageContainer>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";
import Swal from "sweetalert2";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Sparkles, ShieldCheck, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { primaryColoring, secondaryColoring } from "@/components/Context";

// --- MAJINFOTEK & MODERN BRAND THEME ---
const brandCyan = secondaryColoring;
const brandDarkNavy = primaryColoring;
const brandGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  padding: 32px 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(28, 59, 164, 0.05) 0%, transparent 40%);
    pointer-events: none;
    z-index: 1;
  }
`;

const AuthWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1000px;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 1fr;
  }
`;

const BrandingSide = styled.div`
  background: ${brandGradient};
  color: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.15), transparent 60%);
    z-index: 1;
  }

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

const BrandLogo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
  position: relative;
  z-index: 2;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  width: fit-content;
`;

const BrandingContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto 0;
  padding: 20px 0;
`;

const Headline = styled.h1`
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0;
  color: #ffffff;
`;

const Subtext = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #f1f5f9;
  opacity: 0.9;
  margin: 0;
  max-width: 340px;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 2;
  margin-top: 10px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: #e2e8f0;
  font-weight: 500;

  svg {
    color: #c4b5fd;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

const FormSide = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #475569;
  background: #ffffff;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 28px;
`;

const Title = styled.h2`
  font-size: 1.85rem;
  font-weight: 800;
  margin: 0;
  color: #0f172a;
  letter-spacing: -0.02em;
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`;

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputIconWrapper = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  display: flex;
  align-items: center;
  pointer-events: none;

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 12px;
  background-color: #f8fafc !important;
  color: #0f172a !important;
  border: 1px solid #cbd5e1;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: ${brandCyan};
    background-color: #ffffff !important;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #64748b;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: ${brandCyan};
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 12px;
  background: ${brandGradient};
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.25);
  transition: all 0.3s ease;
  margin-top: 6px;

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 6px;
  text-align: center;
`;

const LinkText = styled.p`
  margin: 0;
  cursor: pointer;
  color: #64748b;
  font-size: 0.9rem;

  span {
    color: ${brandCyan};
    font-weight: 700;
    transition: text-decoration 0.2s;

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
  background: #f8fafc;
  color: #0f172a;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 24px;
`;

// ✨ USER LOGIN COMPONENT
export default function UserLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Please wait...",
      text: "Authenticating your session...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      background: "#ffffff",
      color: "#0f172a",
    });

    try {
      const { email, password } = form;
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Success ✅",
        text: "Logged in successfully",
        icon: "success",
        confirmButtonColor: "#8b5cf6",
        background: "#ffffff",
        color: "#0f172a",
      });
      router.push("/dashboard");
    } catch (error) {
      Swal.fire({
        title: "Login Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#8b5cf6",
        background: "#ffffff",
        color: "#0f172a",
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
      <AuthWrapper>
        {/* Left Visual Branding Panel */}
        <BrandingSide>
          <BrandLogo>
            <Sparkles className="w-5 h-5 text-purple-300" />
            <span>SHEALUXE</span>
          </BrandLogo>

          <BrandingContent>
            <Badge>
              <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
              <span>Secure Portal</span>
            </Badge>
            <Headline>Welcome Back</Headline>
            <Subtext>
              Log in to access your dashboard, manage system resources, and experience modern transactions seamlessly.
            </Subtext>
          </BrandingContent>

          <FeatureList>
            <FeatureItem>
              <ShieldCheck />
              Enterprise-grade encryption and privacy protection
            </FeatureItem>
            <FeatureItem>
              <Sparkles />
              Real-time synchronization across your devices
            </FeatureItem>
          </FeatureList>
        </BrandingSide>

        {/* Right Form Panel */}
        <FormSide>
          <FormHeader>
            <Title>Sign In</Title>
            <FormSubtitle>Enter your account details to proceed</FormSubtitle>
          </FormHeader>

          <FormGrid onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Email Address</Label>
              <InputWrapper>
                <InputIconWrapper>
                  <Mail />
                </InputIconWrapper>
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>Password</Label>
              <InputWrapper>
                <InputIconWrapper>
                  <Lock />
                </InputIconWrapper>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <EyeButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <EyeOff /> : <Eye /> }
                </EyeButton>
              </InputWrapper>
            </InputGroup>

            <SubmitButton type="submit">
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </SubmitButton>

            <LinkContainer>
              <LinkText onClick={() => router.push("/signup")}>
                Don't have an account? <span>Sign Up</span>
              </LinkText>

              <LinkText onClick={() => router.push("/forgot-password")}>
                <span>Forgot Password?</span>
              </LinkText>
            </LinkContainer>
          </FormGrid>
        </FormSide>
      </AuthWrapper>
    </PageContainer>
  );
}