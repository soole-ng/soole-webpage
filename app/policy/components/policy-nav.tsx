"use client"
import React from 'react'
import Link from 'next/link'
import { POLICIES } from '@/components/policy/policy-links'

/**
 * Switches between policies, on every policy page.
 *
 * Real links to real pages rather than tabs holding state: each policy has
 * its own URL, so this is navigation and behaves like it - back works,
 * middle-click works, and a link somebody sends opens where they meant.
 *
 * Sticky, because the policies are long and getting out of one should not
 * mean scrolling back to the top of it first.
 */
const PolicyNav = ({ current }: { current: string }) => {
  return (
    <nav
      aria-label="Policies"
      className="sticky top-0 z-30 bg-[#FAFCF7]/95 backdrop-blur border-b border-[#042011]/10"
    >
      <div className="brand-width flex gap-2 overflow-x-auto py-3">
        <Link
          href="/policy"
          className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-[#25373F]/70 hover:bg-[#042011]/5 hover:text-[#042011] transition-colors"
        >
          All policies
        </Link>
        {POLICIES.map((policy) => {
          const isActive = current === policy.slug
          return (
            <Link
              key={policy.slug}
              href={`/policy/${policy.slug}`}
              aria-current={isActive ? 'page' : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-[#042011] text-white'
                  : 'text-[#25373F]/70 hover:bg-[#042011]/5 hover:text-[#042011]'
              }`}
            >
              {policy.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default PolicyNav
