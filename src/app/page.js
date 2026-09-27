import React from 'react';
import HeroSection2 from '@/components/Hero';
import LandingPageComponent from '@/components/LandingPageComponent';
import TestimonialsSection from '@/components/TestimonialSection';

import FeaturedProducts from '@/components/FeaturedProducts';
import SearchBar from '@/components/SearchBar';
import NewArrivals from '@/components/NewArrivals';
import BestSellers from '@/components/BestSellers';
import GallerySection from '@/components/GallerySection';
import ShopByCategory from '@/components/ShopByCategory';
import ShopByLocation from '@/components/ShopByLocation';






export default function CompleteLandingPage() {
 



  
  return (
    <>
    <HeroSection2/>
    <SearchBar/>
    <FeaturedProducts/>
    <GallerySection/>
    <ShopByCategory/>
    <ShopByLocation/>
    <NewArrivals/>
    <br/>
    <br/>
    <br/>
    <BestSellers/>

    <LandingPageComponent/>

 <TestimonialsSection/>

    </>

  );
}