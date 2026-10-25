


import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from './registry';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/components/Context";
import { CartProvider } from "@/components/CartContext";
import BookConsultationBanner from "@/components/BookConsultationBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PINKLES NG LTD | Empowering Brands. Building Legacies.",
  description: "Empowering Brands. Building Legacies.",
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>

      
          <CartProvider>
             <ContextProvider>
          <Header />
          {children}
          <BookConsultationBanner/>
          <Footer />
          </ContextProvider>
          </CartProvider>
            </StyledComponentsRegistry>
        
      </body>
    </html>
  );
}
