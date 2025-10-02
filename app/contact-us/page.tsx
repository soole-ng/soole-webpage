import React from 'react'
import ContactHero from './components/contact-hero'
import TechnicalSupportForm from './components/technical-form'
import Footer from '@/components/shared/footer'
import FloatingWhatsApp from '@/components/shared/floating-whatsapp'

const Contactus = () => {
  return (
    <main>
      <ContactHero />
      <TechnicalSupportForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

export default Contactus