import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import FloatingWhatsApp from '@/components/shared/floating-whatsapp'
import PolicyNav from './components/policy-nav'
import SoolePrivacyPolicy from '@/components/policy/privacy'
import SooleRefundPolicy from '@/components/policy/refund'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policies | Soole',
  description:
    "Soole's privacy policy and payments and refunds policy - what we do with your data, what you pay, and how to get your money back.",
}

/**
 * Every Soole policy on one page.
 *
 * Privacy and Payments & Refunds were separate routes, which meant somebody
 * looking for "the legal bit" had to know which of the two they wanted before
 * they could start reading. They are one subject to a passenger.
 *
 * Each policy keeps its own heading and its own last-updated date, because
 * they are revised independently and a single date across both would be a
 * claim we cannot keep true.
 *
 * The section ids are load-bearing: /privacy-policy is linked from inside the
 * shipped mobile app and from the app store listings, and it redirects here
 * with #privacy attached. Renaming these breaks links we cannot update
 * retroactively - a shipped build keeps pointing at the old URL forever.
 */
const PolicyPage = () => {
  return (
    <main>
      <Navbar whiteBg />

      <div className="bg-[#FAFCF7]">
        <section className="brand-width pt-10 pb-2 md:pt-16 md:pb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#058B42] mb-3">
            Legal
          </span>
          <h1 className="text-[28px] md:text-[44px] lg:text-[52px] font-bold text-[#042011] leading-tight max-w-[820px]">
            Our policies
          </h1>
          <p className="mt-4 text-[#25373F]/80 text-base md:text-lg max-w-[720px]">
            How we handle your data, and what happens to your money. Written to
            describe what the platform actually does today.
          </p>
        </section>
      </div>

      <PolicyNav />

      <section id="privacy" className="scroll-mt-24">
        <SoolePrivacyPolicy />
      </section>

      <section id="payments-refunds" className="scroll-mt-24">
        <SooleRefundPolicy />
      </section>

      <Footer hideFooter />
      <FloatingWhatsApp />
    </main>
  )
}

export default PolicyPage
