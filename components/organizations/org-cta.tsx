"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OrgCta() {
  return (
    <section className="bg-[#042011] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[#C9EC7C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[250px] h-[250px] rounded-full bg-[#058B42]/20 blur-3xl pointer-events-none" />

      <div className="brand-width relative z-10 flex flex-col items-center text-center gap-8">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#C9EC7C] text-xs uppercase tracking-widest font-bold">
            Get Started Free
          </span>
          <h2 className="text-white font-funnel-display font-semibold text-[26px] md:text-[40px] lg:text-[52px] leading-tight max-w-[720px]">
            Ready to modernize your transport business?
          </h2>
          <p className="text-white/70 max-w-[560px] mx-auto text-sm md:text-lg leading-relaxed">
            Register your organization today — no setup fees, no developers needed. 
            Just a smarter way to run your fleet and earn more from every trip.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="https://dashboard.soole.ng/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9EC7C] text-[#042011] font-bold px-8 py-4 rounded-full text-sm md:text-base hover:bg-[#b5d66c] transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Register Your Organization →
          </Link>
          <Link
            href="https://dashboard.soole.ng/login"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full text-sm md:text-base hover:bg-white/10 transition-all duration-300 active:scale-95"
          >
            Already have an account? Sign in
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
