import TermsAdvertisingAndReferences from '@/components/TermsAdvertisingAndReferences'
import TermsHeaderAndIntro from '@/components/TermsHeaderAndIntro'
import TermsRefundsAndProperty from '@/components/TermsRefundsAndProperty'
import TermsStaffAndPrivacy from '@/components/TermsStaffAndPrivacy'
import React from 'react'

const page = () => {
  return (
    <div>
      <TermsHeaderAndIntro/>
      <TermsRefundsAndProperty/>
      <TermsStaffAndPrivacy/>
      <TermsAdvertisingAndReferences/>
    </div>
  )
}

export default page
