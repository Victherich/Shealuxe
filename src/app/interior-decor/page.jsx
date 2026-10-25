import GallerySection from '@/components/GallerySection'
import InteriorDecorHeroSection from '@/components/InteriorDecorHeroSection'
import InteriorDecorShowcase from '@/components/InteriorDecorShowcase'
import React from 'react'

const page = () => {
  return (
    <div>
      <InteriorDecorHeroSection/>
      <InteriorDecorShowcase/>
      <GallerySection/>
    </div>
  )
}

export default page
