import React from 'react'
import FaqHero from './components/faq-hero';
import Footer from '@/components/shared/footer';
import SlantPhoneSection from '@/components/landing-page-components/slant-section';
import FaqSection from './components/faq-section';

const FAQ = () => {
  return (
    <main>
      <FaqHero />
      <FaqSection />
      <SlantPhoneSection backgroundColor="#C9EC7C" textColor="#0C1316" />

      <Footer />
    </main>
  )
}

export default FAQ;