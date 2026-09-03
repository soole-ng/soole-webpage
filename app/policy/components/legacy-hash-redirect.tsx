"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { POLICIES } from '@/components/policy/policy-links'

/**
 * Sends /policy#terms to /policy/terms.
 *
 * The policies were one page with anchors before they were separate pages,
 * and those anchors are already out in the world - the build of the mobile
 * app on the stores links to /policy#terms and /policy#privacy, and that
 * build will never be updated. A fragment is never sent to the server, so a
 * redirect rule cannot catch it; only the browser can.
 *
 * Replaces rather than pushes, so Back returns to wherever they came from
 * instead of bouncing through the hub again.
 */
const LegacyHashRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    const slug = window.location.hash.replace('#', '')
    if (!slug) return
    if (POLICIES.some((policy) => policy.slug === slug)) {
      router.replace(`/policy/${slug}`)
    }
  }, [router])

  return null
}

export default LegacyHashRedirect
