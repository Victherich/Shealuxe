// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import styled from "styled-components";

// const brandCyan = '#00aeef';
// const brandGradient = 'linear-gradient(135deg, #00aeef 0%, #0b1b48 100%)';
// const borderColor = '#e2e8f0';
// const textMain = '#0f172a';
// const textMuted = '#475569';
// const softBg = '#f8fafc';

// export default function SearchBar({ 
//   title = "Quality within Reach", 
//   subtitle = "Search our entire catalog of premium products, games, and accessories instantly.",
//   placeholder = "Search products by name..." 
// }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const router = useRouter();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!searchTerm.trim()) return;
//     router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
//   };

//   return (
//     <SearchSection>
//       <SearchContentWrapper>
//         <SearchHeader>
//           {/* <SearchTitle>{title}</SearchTitle> */}
//           {/* <SearchSubtitle>{subtitle}</SearchSubtitle> */}
//         </SearchHeader>

//         <SearchForm onSubmit={handleSearch}>
//           <SearchInputWrapper>
//             <SearchInput
//               type="text"
//               placeholder={placeholder}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <SearchButton type="submit">
//               Search
//             </SearchButton>
//           </SearchInputWrapper>
//         </SearchForm>
//       </SearchContentWrapper>
//     </SearchSection>
//   );
// }

// /* ================= STYLED COMPONENTS ================= */

// const SearchSection = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 5px 5px;
//   box-sizing: border-box;
// `;

// const SearchContentWrapper = styled.div`
//   background: ${softBg};
//   border: 1px solid ${borderColor};
//   border-radius: 20px;
//   padding: 32px 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   gap: 20px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

//   @media (max-width: 768px) {
//     padding: 24px 16px;
//   }
// `;

// const SearchHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   max-width: 600px;
// `;

// const SearchTitle = styled.h2`
//   font-size: clamp(1.35rem, 2.5vw, 1.75rem);
//   font-weight: 800;
//   color: ${textMain};
//   margin: 0;
//   letter-spacing: -0.5px;
// `;

// const SearchSubtitle = styled.p`
//   font-size: clamp(0.9rem, 1.5vw, 1rem);
//   color: ${textMuted};
//   line-height: 1.5;
//   margin: 0;
// `;

// const SearchForm = styled.form`
//   width: 100%;
//   max-width: 600px;
//   box-sizing: border-box;
// `;

// const SearchInputWrapper = styled.div`
//   display: flex;
//   background: #ffffff;
//   border: 1px solid ${borderColor};
//   border-radius: 14px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
//   transition: all 0.25s ease;

//   &:focus-within {
//     border-color: ${brandCyan};
//     box-shadow: 0 10px 35px rgba(0, 174, 239, 0.15);
//   }
// `;

// const SearchInput = styled.input`
//   flex: 1;
//   padding: 14px 20px;
//   border: none;
//   background: transparent;
//   color: ${textMain};
//   font-size: 1rem;
//   font-weight: 500;
//   outline: none;

//   &::placeholder {
//     color: ${textMuted};
//   }
// `;

// const SearchButton = styled.button`
//   background: ${brandGradient};
//   color: #ffffff;
//   border: none;
//   padding: 0 24px;
//   font-size: 0.95rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: opacity 0.2s ease;

//   &:hover {
//     opacity: 0.9;
//   }

//   @media (max-width: 480px) {
//     padding: 0 16px;
//     font-size: 0.85rem;
//   }
// `;




"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Search } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { primaryColoring, secondaryColoring } from "./Context";

// Updated with Majinfotek Theme: Deep Royal Blue #1c3ba4 & Rich Purple #8b5cf6
const primaryBlue = primaryColoring;
const richPurple = secondaryColoring;
const brandGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;
const borderColor = '#cbd5e1';
const textMain = '#0f172a';
const textMuted = '#475569';
const softBg = '#f8fafc';

export default function SearchBar({ 
  title = "Shop Our Collections", 
  subtitle = "Search our catalog of CCTV cameras, intercom systems, and security gadgets instantly.",
  placeholder = "Search Products by Name" 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <SearchSection>
      <SearchContentWrapper>
        <SearchHeader>
          <SearchTitle>{title}</SearchTitle>
          {/* <SearchSubtitle>{subtitle}</SearchSubtitle> */}
        </SearchHeader>

        <SearchForm onSubmit={handleSearch}>
          <SearchInputWrapper>
            <SearchIconWrapper>
              <Search className="w-5 h-5 text-slate-400" />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton type="submit">
              <FaSearch/>
            </SearchButton>
          </SearchInputWrapper>
        </SearchForm>
      </SearchContentWrapper>
    </SearchSection>
  );
}

/* ================= STYLED COMPONENTS ================= */

const SearchSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  // padding: 10px 1.5rem;
  box-sizing: border-box;
`;

const SearchContentWrapper = styled.div`
  background: ${softBg};
  border: 1px solid ${borderColor};
  border-radius: 20px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const SearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;
`;

const SearchTitle = styled.h2`
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 800;
  color: ${textMain};
  margin: 0;
  letter-spacing: -0.5px;
`;

const SearchSubtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: ${textMuted};
  line-height: 1.5;
  margin: 0;
`;

const SearchForm = styled.form`
  width: 100%;
  max-width: 650px;
  box-sizing: border-box;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid ${borderColor};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;

  &:focus-within {
    border-color: ${richPurple};
    box-shadow: 0 10px 35px rgba(139, 92, 246, 0.15);
  }
`;

const SearchIconWrapper = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  color: ${textMuted};
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 14px 16px;
  border: none;
  background: transparent;
  color: ${textMain};
  font-size: 1rem;
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: ${textMuted};
  }
`;

const SearchButton = styled.button`
  background: ${brandGradient};
  color: #ffffff;
  border: none;
  padding: 0 10px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
  height: 100%;
  min-height: 50px;

  &:hover {
    opacity: 0.92;
  }

  @media (max-width: 480px) {
    padding: 0 18px;
    font-size: 0.85rem;
  }
`;