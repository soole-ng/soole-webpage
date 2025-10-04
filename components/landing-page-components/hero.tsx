"use client";
import { motion } from "framer-motion";
import Navbar from "../shared/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitEmail } from "@/app/actions/submit-email";
import { useState } from "react";
import { SuccessModal } from "../ui/success-modal";

// Define the schema for email validation
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitEmail(data.email);
      console.log("Submit result:", result);

      if (result.success) {
        console.log("Setting showSuccessModal to true");
        setShowSuccessModal(true);
        reset(); // Clear the form
      } else {
        setSubmitMessage({
          type: "error",
          text: result.message || "Failed to join waitlist. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
      <div className="bg-[#0C1316] h-[80vh] md:h-screen relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10">
        <Navbar />
        <section className="brand-width h-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 lg:mt-0 lg:justify-end">
          {/* Contents */}
          <div className="flex justify-center  lg:justify-end mt-4 md:mt-10 lg:mt-64    w-full flex-col space-y-20">
            <div className="flex flex-col gap-12">
              <motion.h1
                className="text-[#F9FFEB] font-source-serif text-start md:text-start max-w-[666px] text-[32px]  md:text-[51.75px] leading-[28px] md:leading-[59.39px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
              >
                Travel together, comfortably and safely with Soole
              </motion.h1>
              <motion.p
                className="text-[#F9FFEB] md:text-start text-start text-[16px]  md:text-[20px] leading-[17px] md:leading-[28px] max-w-[625px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.3 }}
              >
                Soole connects travelers heading in the same direction, making
                trips safer, more affordable, and more social.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-[24px] md:gap-[32px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
            >
              <h4 className="text-white text-center md:text-start text-base">
                Join 200+ early users already on the waitlist to get first
                access.
              </h4>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[458px]">
                <div className="bg-[#1F2528] w-full rounded-[32px] #B3B5B4 flex items-center p-2 text-sm  md:p-2">
                  <input
                    {...register("email")}
                    className="px-2 md:px-3 py-2 flex-1 h-full text-xs md:text-[14px] outline-none text-[#B3B5B4] bg-transparent"
                    placeholder="Enter your email"
                    type="email"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white w-fit md:px-3 px-2 py-1 md:py-2 font-medium text-[#042011] text-xs md:text-[14px] rounded-[32px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </button>
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 px-2">
                    {errors.email.message}
                  </p>
                )}
                {submitMessage && (
                  <p
                    className={`text-sm mt-2 px-2 ${
                      submitMessage.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {submitMessage.text}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Hero;
