import CollectionCalloutSection from '@/components/CollectionCalloutSection'
import MainStoreComponent from '@/components/MainStoreComponent'
import PersonalShoppingSection from '@/components/PersonalShoppingSection'
import TheEditShowcase from '@/components/TheEditShowcase'
import React from 'react'

const page = () => {
  return (
    <div>
        <CollectionCalloutSection/>
        <TheEditShowcase/>
        <MainStoreComponent/>
      <PersonalShoppingSection/>
    </div>
  )
}

export default page
