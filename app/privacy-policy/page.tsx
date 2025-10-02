import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import React from 'react'
import SoolePrivacyPolicy from './components/privacy'
import FloatingWhatsApp from '@/components/shared/floating-whatsapp'

const PrivacyPolicy = () => {
  return (
  <main>
    <Navbar whiteBg />
    <SoolePrivacyPolicy />
    <Footer hideFooter />
    <FloatingWhatsApp />
  </main>
  )
}

export default PrivacyPolicy