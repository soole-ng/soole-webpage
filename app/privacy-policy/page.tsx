import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import React from 'react'
import SoolePrivacyPolicy from './components/privacy'

const PrivacyPolicy = () => {
  return (
  <main>
    <Navbar whiteBg />
    <SoolePrivacyPolicy />
    <Footer hideFooter />
    
  </main>
  )
}

export default PrivacyPolicy