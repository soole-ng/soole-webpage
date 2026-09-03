/**
 * The policies, in the order somebody should meet them.
 *
 * One list, used by the hub cards, the switcher on each policy page, and the
 * redirects from the old URLs. Adding a policy means adding a row here and a
 * component - nothing else needs to know.
 *
 * Terms first because it is the agreement the others sit inside. Privacy
 * second because it is the one most people arrive looking for, and the one
 * the app stores link to.
 */
export type PolicyLink = {
  slug: string
  label: string
  title: string
  blurb: string
  updated: string
}

export const POLICIES: PolicyLink[] = [
  {
    slug: 'terms',
    label: 'Terms of Service',
    title: 'Terms of Service',
    blurb:
      'The agreement between you and Soole. Who can use the platform, what a booking is, and who is responsible for what.',
    updated: 'September 2026',
  },
  {
    slug: 'privacy',
    label: 'Privacy Policy',
    title: 'Privacy Policy',
    blurb:
      'What we collect, why we collect it, how long we keep it, and who else ever sees it.',
    updated: 'August 2026',
  },
  {
    slug: 'payments-refunds',
    label: 'Payments & Refunds',
    title: 'Payments and Refunds Policy',
    blurb:
      'What you pay, when the driver receives it, and how to get your money back when a trip does not run.',
    updated: 'September 2026',
  },
  {
    slug: 'cancellation',
    label: 'Cancellation',
    title: 'Cancellation Policy',
    blurb:
      'When a seat can be cancelled, what to do before then, and what happens to the fare.',
    updated: 'September 2026',
  },
  {
    slug: 'community',
    label: 'Community & Safety',
    title: 'Community and Safety Guidelines',
    blurb:
      'The rules everyone travels by, and the tools you have when something goes wrong.',
    updated: 'September 2026',
  },
]

export const policyBySlug = (slug: string): PolicyLink | undefined =>
  POLICIES.find((policy) => policy.slug === slug)
