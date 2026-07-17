"use client";

import SecondHero from "@/components/shared/second-hero";
import Features from "@/components/landing-page-components/features";
import GetStartStarted from "@/components/landing-page-components/get-started";
import Footer from "@/components/shared/footer";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";
import { orgFeatures } from "@/utils/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import OrgTrustBadges from "@/components/organizations/org-trust-badges";
import OrgFaqs from "@/components/organizations/org-faqs";
import OrgCta from "@/components/organizations/org-cta";

export default function OrganizationsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <SecondHero
        isOrganization={true}
        mainText="Empower Your Transport Business with Soole"
        subText="Manage drivers, register fleet vehicles, schedule intercity trips, track locations in real-time, and process payouts effortlessly on a single secure dashboard."
        backgroundImage="/images/soole-organization.jpg"
      />

      {/* Trust Badges / Social Proof */}
      <OrgTrustBadges />

      {/* Feature Grid */}
      <div className="bg-[#F9FFEB]/30 py-8">
        <Features customFeatures={orgFeatures} className="my-8 md:my-12" />
      </div>

      {/* Main Dashboard Preview Section */}
      <section className="brand-width py-8 md:py-12 flex flex-col gap-8">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-[#042011] font-funnel-display font-semibold text-[24px] md:text-[38px] lg:text-[49px]">
            Operations Home Dashboard
          </h2>
          <p className="text-[#042011]/80 max-w-[650px] mx-auto text-sm md:text-lg">
            Monitor real-time metrics, check wallets, schedule trips, and get upcoming departure summaries instantly.
          </p>
        </div>

        <motion.div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 group max-w-[1000px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/dashboard-mockup.png"
            alt="Soole Organizational Dashboard Home"
            width={1200}
            height={750}
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Drivers Section / Secondary Preview */}
      <section className="bg-[#0C1316] text-white py-16 md:py-24">
        <div className="brand-width flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-wider text-[#C9EC7C] font-semibold">Fleet Operations</span>
            <h2 className="font-funnel-display font-semibold text-[24px] md:text-[36px] lg:text-[48px] leading-tight">
              Manage Drivers &amp; Vehicles Seamlessly
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Invite company drivers via SMS, verify their license details, check vehicle documentation status, and track vehicle speeds and paths on the live operations map.
            </p>
            <div className="flex flex-col gap-4 text-neutral-300">
              <div className="flex gap-2 items-start text-xs md:text-sm">
                <span className="text-[#C9EC7C]">✓</span>
                <span>Track active driver status (Pending vs. Active)</span>
              </div>
              <div className="flex gap-2 items-start text-xs md:text-sm">
                <span className="text-[#C9EC7C]">✓</span>
                <span>Suspend or reinstate drivers with security confirmations</span>
              </div>
              <div className="flex gap-2 items-start text-xs md:text-sm">
                <span className="text-[#C9EC7C]">✓</span>
                <span>Register vehicle registrations, insurance, and road-worthiness docs</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl max-w-full">
              <Image
                src="/images/drivers-screenshot.png"
                alt="Soole Drivers Fleet Management"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <div className="py-12 md:py-20 bg-white">
        <GetStartStarted page="organization" />
      </div>

      {/* Organization FAQs */}
      <OrgFaqs />

      {/* CTA Banner */}
      <OrgCta />

      {/* Footer & Floating widgets */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

