import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  /**
   * The policies moved: two routes, then one page with anchors, now a page
   * each under /policy.
   *
   * /privacy-policy cannot simply stop existing. It is linked from inside
   * the mobile app - onboarding and the account screen - and those builds
   * are already on both stores, so the URL has to keep working for every
   * copy of the app that will never be updated. It is also the privacy URL
   * on the store listings themselves, which Apple and Google check.
   *
   * Permanent, so the redirect is cached and search engines move their
   * index over to the new URLs rather than keeping both.
   */
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/policy/privacy",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/policy/payments-refunds",
        permanent: true,
      },
      // Older still: the app store listings and the shipped app used
      // /privacy-policy, and a build in between used /policy#privacy. A
      // fragment never reaches the server, so that second form is handled
      // in the browser instead - see legacy-hash-redirect.tsx.
      {
        source: "/terms",
        destination: "/policy/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
