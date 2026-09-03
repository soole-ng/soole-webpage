"use client"
import React, { useEffect, useState } from 'react'

type PolicySection = {
  id: string
  label: string
}

const SECTIONS: PolicySection[] = [
  { id: 'terms', label: 'Terms of Service' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'payments-refunds', label: 'Payments & Refunds' },
  { id: 'cancellation', label: 'Cancellation' },
  { id: 'community', label: 'Community & Safety' },
]

/**
 * Sticky switcher between the policies on this page.
 *
 * Plain anchors rather than tabs holding state: the policies are long,
 * and a tab that hides one of them means a reader who lands on #payments-
 * refunds from the app cannot scroll up into privacy, or use the browser's
 * find-in-page across both. Anchors also survive JavaScript failing to load,
 * which matters for a page people are sent to for legal reasons.
 */
const PolicyNav = () => {
  const [active, setActive] = useState<string>(SECTIONS[0].id)

  useEffect(() => {
    const targets = SECTIONS.map((section) =>
      document.getElementById(section.id)
    ).filter((el): el is HTMLElement => el !== null)

    if (targets.length === 0) return

    // Highlights whichever policy is nearest the top of the viewport. The
    // bottom margin keeps the last section from winning as soon as it is
    // merely visible at the foot of a tall screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Policies"
      className="sticky top-0 z-30 bg-[#FAFCF7]/95 backdrop-blur border-b border-[#042011]/10"
    >
      <div className="brand-width flex gap-2 overflow-x-auto py-3">
        {SECTIONS.map((section) => {
          const isActive = active === section.id
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-[#042011] text-white'
                  : 'text-[#25373F]/70 hover:bg-[#042011]/5 hover:text-[#042011]'
              }`}
            >
              {section.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default PolicyNav
