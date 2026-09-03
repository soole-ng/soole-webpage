import Link from 'next/link'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import FloatingWhatsApp from '@/components/shared/floating-whatsapp'
import LegacyHashRedirect from './components/legacy-hash-redirect'
import { POLICIES } from '@/components/policy/policy-links'
import PolicyIcon from '@/components/policy/policy-icon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policies | Soole',
  description:
    "Soole's terms of service, privacy policy, payments and refunds, cancellation policy and community guidelines.",
}

/**
 * The policy hub.
 *
 * Five policies on one scrolling page meant the terms of service alone ran to
 * seventeen sections before the privacy policy started, and anybody sent a
 * link to one of them landed in the middle of another. Each policy now has
 * its own page and its own URL, which is what makes it linkable from the app
 * store listings and quotable in a support reply.
 *
 * This page is the way in: what each one covers, so a reader picks the one
 * they came for instead of scrolling to find out.
 */
const PolicyHub = () => {
  return (
    <main>
      <Navbar whiteBg />
      <LegacyHashRedirect />

      <div className="bg-[#FAFCF7]">
        <section className="brand-width pt-10 pb-8 md:pt-16 md:pb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#058B42] mb-3">
            Legal
          </span>
          <h1 className="text-[28px] md:text-[44px] lg:text-[52px] font-bold text-[#042011] leading-tight max-w-[820px]">
            Our policies
          </h1>
          <p className="mt-4 text-[#25373F]/80 text-base md:text-lg max-w-[720px] leading-[1.7]">
            How we handle your data, what happens to your money, and the rules
            everybody travels by. Written to describe what the platform
            actually does today - if anything here does not match what you
            experience in the app, that is a fault on our side and we want to
            hear about it.
          </p>
        </section>

        <section className="brand-width pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {POLICIES.map((policy) => (
              <Link
                key={policy.slug}
                href={`/policy/${policy.slug}`}
                className="group flex flex-col rounded-2xl border border-[#E5EFDB] bg-white p-6 md:p-7 transition-colors duration-200 hover:border-[#058B42]"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF7E0] text-[#058B42] transition-colors duration-200 group-hover:bg-[#058B42] group-hover:text-white">
                  <PolicyIcon name={policy.icon} className="h-[22px] w-[22px]" />
                </span>
                <h2 className="text-[19px] md:text-[22px] font-bold text-[#042011] group-hover:text-[#058B42] transition-colors duration-200">
                  {policy.title}
                </h2>
                <p className="mt-3 text-[#25373F]/80 text-sm md:text-base leading-[1.65] flex-1">
                  {policy.blurb}
                </p>
                <span className="mt-5 text-xs uppercase tracking-widest text-[#042011]/45">
                  Updated {policy.updated}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm text-[#25373F]/70 max-w-[720px] leading-[1.7]">
            Questions about any of this? Reach us at{' '}
            <a
              href="mailto:info@soole.ng"
              className="text-[#058B42] underline underline-offset-2"
            >
              info@soole.ng
            </a>{' '}
            or on 07032220043, seven days a week between 8am and 10pm.
          </p>
        </section>
      </div>

      <Footer hideFooter />
      <FloatingWhatsApp />
    </main>
  )
}

export default PolicyHub
