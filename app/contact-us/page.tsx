import React from 'react'
import ContactHero from './components/contact-hero'
import TechnicalSupportForm from './components/technical-form'
import Footer from '@/components/shared/footer'

const Contactus = () => {
  return (
    <main>
      <ContactHero />
      <TechnicalSupportForm />
      <Footer />
    </main>
  )
}

export default Contactus