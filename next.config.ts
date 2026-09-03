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
   * The policies used to live on two routes and now share one.
   *
   * /privacy-policy cannot simply stop existing. It is linked from inside
   * the mobile app - onboarding and the account screen - and those builds
   * are already on both stores, so the URL has to keep working for every
   * copy of the app that will never be updated. It is also the privacy URL
   * on the store listings themselves, which Apple and Google check.
   *
   * Permanent, so the redirect is cached and search engines move their
   * index over to /policy rather than keeping both.
   */
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/policy#privacy",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/policy#payments-refunds",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
