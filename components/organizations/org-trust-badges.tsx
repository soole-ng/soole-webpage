"use client";
import { motion } from "framer-motion";
import { Building2, Bus, MapPin, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Building2,
    label: "Transport companies",
    value: "Growing Network",
  },
  {
    icon: Bus,
    label: "Vehicles managed",
    value: "Fleet Ready",
  },
  {
    icon: MapPin,
    label: "Routes across Nigeria",
    value: "Nationwide",
  },
  {
    icon: ShieldCheck,
    label: "KYC-verified & secure",
    value: "Trusted Platform",
  },
];

export default function OrgTrustBadges() {
  return (
    <section className="bg-[#F9FFEB] border-y border-[#C9EC7C]/40 py-6 md:py-8">
      <div className="brand-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center gap-2 bg-white border border-[#C9EC7C]/50 rounded-2xl py-5 px-3 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F9FFEB] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#058B42]" strokeWidth={1.8} />
                </div>
                <p className="text-[#042011] font-funnel-display font-bold text-base md:text-lg leading-tight">
                  {point.value}
                </p>
                <p className="text-[#042011]/60 text-sm">{point.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
