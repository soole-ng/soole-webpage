import React from 'react'
import type { PolicyIconName } from './policy-links'

/**
 * One mark per policy, so the cards are told apart before they are read.
 *
 * Drawn inline rather than pulled from an icon library: five shapes do not
 * justify a dependency, and these are stroked to the same weight as each
 * other, which a mixed set never quite is. currentColor throughout, so the
 * card's hover state carries the icon with it.
 */
const PATHS: Record<PolicyIconName, React.JSX.Element> = {
  // An agreement between two parties.
  handshake: (
    <>
      <path d="M11 17.5 9.5 19a2.1 2.1 0 0 1-3-3l4-4a2.1 2.1 0 0 1 3 0l1 1" />
      <path d="m13 6.5 1.5-1.5a2.1 2.1 0 0 1 3 3l-4 4a2.1 2.1 0 0 1-3 0l-1-1" />
      <path d="M3 12H1.5M22.5 12H21M12 3V1.5M12 22.5V21" />
    </>
  ),
  // Data, kept shut.
  lock: (
    <>
      <rect x="4" y="10.5" width="16" height="10.5" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      <circle cx="12" cy="15.5" r="1.2" />
    </>
  ),
  // Money held and returned.
  wallet: (
    <>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a2 2 0 0 1 2 2v1" />
      <rect x="3" y="7.5" width="18" height="11.5" rx="2" />
      <path d="M20 12.5h-3.5a1.75 1.75 0 0 0 0 3.5H20" />
    </>
  ),
  // A date that did not happen.
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="m10 14.5 4 4M14 14.5l-4 4" />
    </>
  ),
  // Safety.
  shield: (
    <>
      <path d="M12 2.75 4.5 6v6c0 4.5 3.1 8.1 7.5 9.25 4.4-1.15 7.5-4.75 7.5-9.25V6Z" />
      <path d="m9 12 2.25 2.25L15.5 10" />
    </>
  ),
}

const PolicyIcon = ({
  name,
  className = '',
}: {
  name: PolicyIconName
  className?: string
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    {PATHS[name]}
  </svg>
)

export default PolicyIcon
