"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

/* ================= THEME & COLORS ================= */

const TextPrimary = "#0f172a";
const TextMuted = "#475569";
const BorderColor = "rgba(226, 232, 240, 0.9)";
const ThemeGradient = "linear-gradient(135deg, #1c3ba4 0%, #8b5cf6 100%)";

const softBg = '#f8fafc';
const borderColor = '#e2e8f0';
const textMain = '#0f172a';
const textMuted = '#475569';
const primaryColor ='#1c3ba4';

/* ================= STYLED COMPONENTS ================= */

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${softBg};
  border: 1px solid ${borderColor};
  border-radius: 14px;
  padding: 16px 20px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${textMain};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${primaryColor};
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }
`;

const LocationCard = styled.div`
  background: #ffffff;
  border: 1px solid ${borderColor};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  &:hover {
    border-color: ${primaryColor};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 174, 239, 0.08);
  }
`;

const IconBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(0, 174, 239, 0.1);
  color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const LocationName = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${textMain};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 30px;
  color: ${textMuted};
  font-size: 0.95rem;
  font-weight: 500;
  background: ${softBg};
  border: 1px solid ${borderColor};
  border-radius: 12px;
`;

/* ================= COMPONENT ================= */

export default function ShopByLocation() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Real-time listener for locations from Firestore
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, "locations"),
      (snapshot) => {
        const fetchedLocations = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          const rawTitle = data.title || data.name || data.location || "Untitled Location";
          return {
            id: docSnap.id,
            title: rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1),
          };
        });
        setLocations(fetchedLocations);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching locations:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>
          <FaMapMarkerAlt /> Shop By Location
        </SectionTitle>
      </SectionHeader>

      <LocationsGrid>
        {loading ? (
          <MessageState>Loading locations...</MessageState>
        ) : locations.length === 0 ? (
          <MessageState>No locations available at the moment.</MessageState>
        ) : (
          locations.map((loc) => (
            <LocationCard
              key={loc.id}
              onClick={() => router.push(`/location/${loc.id}`)}
            >
              <IconBox>
                <FaMapMarkerAlt />
              </IconBox>
              <LocationName title={loc.title}>{loc.title}</LocationName>
            </LocationCard>
          ))
        )}
      </LocationsGrid>
    </SectionWrapper>
  );
}