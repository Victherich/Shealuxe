import PropertiesGallerySection from '@/components/PropertiesGallerySection'
import PropertyPortalHero from '@/components/PropertyPortalHero'
import ScheduleAndPaymentSection from '@/components/ScheduleAndPaymentSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <PropertyPortalHero/>
      <PropertiesGallerySection/>
      <ScheduleAndPaymentSection/>
    </div>
  )
}

export default page
