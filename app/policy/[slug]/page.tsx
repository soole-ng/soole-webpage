import { notFound } from 'next/navigation'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import FloatingWhatsApp from '@/components/shared/floating-whatsapp'
import PolicyNav from '../components/policy-nav'
import { POLICIES, policyBySlug } from '@/components/policy/policy-links'
import SooleTerms from '@/components/policy/terms'
import SoolePrivacyPolicy from '@/components/policy/privacy'
import SooleRefundPolicy from '@/components/policy/refund'
import SooleCancellationPolicy from '@/components/policy/cancellation'
import SooleCommunityGuidelines from '@/components/policy/community'
import type { Metadata } from 'next'

/**
 * One policy, on its own page.
 *
 * Rendered from the same registry the hub and the switcher read, so a policy
 * cannot appear in the list and 404 when clicked - the two are the same
 * array. generateStaticParams prerenders all five at build time; there is no
 * user input in the slug and nothing to fetch.
 */
const COMPONENTS: Record<string, () => React.JSX.Element> = {
  terms: SooleTerms,
  privacy: SoolePrivacyPolicy,
  'payments-refunds': SooleRefundPolicy,
  cancellation: SooleCancellationPolicy,
  community: SooleCommunityGuidelines,
}

export function generateStaticParams() {
  return POLICIES.map((policy) => ({ slug: policy.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const policy = policyBySlug(slug)
  if (!policy) return { title: 'Policies | Soole' }

  return {
    title: `${policy.title} | Soole`,
    description: policy.blurb,
  }
}

const PolicyDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const policy = policyBySlug(slug)
  const Policy = COMPONENTS[slug]

  if (!policy || !Policy) notFound()

  return (
    <main>
      <Navbar whiteBg />
      <PolicyNav current={slug} />
      <Policy />
      <Footer hideFooter />
      <FloatingWhatsApp />
    </main>
  )
}

export default PolicyDetailPage
