"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/app/actions/submit-contact-form";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required").max(5000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const TechnicalSupportForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setSubmitMessage({ type: "success", text: result.message || "Message sent." });
        reset();
      } else {
        setSubmitMessage({
          type: "error",
          text: result.message || "Failed to send your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form submit error:", error);
      setSubmitMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#77877E0D] py-20">
      <div
        style={{
          boxShadow: "7px 7px 2px 0px #0000000A",
        }}
        className="max-w-[900px] mx-auto bg-white rounded-lg "
      >
        <div className="flex justify-center items-center py-4  mb-6 border-b border-[#25373F4D]">
          <button className="px-4 md:px-12 py-2 bg-[#F7F8FB] font-medium  border-[#112B1D] border-[1.86px] rounded">
            Technical Support
          </button>
          <button className="px-4 md:px-12 py-2  text-[#0C1316]">
            Question
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col p-8 space-y-4">
            <div className="flex md:flex-row flex-col space-y-3 justify-between space-x-4">
              <div className="flex w-full flex-col mb-2 gap-4">
                <label className="text-[#25373F] geist-mono font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-xs">{errors.firstName.message}</p>
                )}
              </div>
              <div className="flex w-full flex-col mb-2 gap-4">
                <label className="text-[#25373F] font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-xs">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-2 gap-4">
              <label className="text-[#25373F] font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2 gap-4">
              <label className="text-[#25373F] font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-600 text-xs">{errors.subject.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2 gap-4">
              <label className="text-[#25373F] font-medium">Message</label>
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded-[10px] border-[#25373F4D] h-32"
                maxLength={5000}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-600 text-xs">{errors.message.message}</p>
              )}
            </div>
            {submitMessage && (
              <p
                className={`text-sm ${
                  submitMessage.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {submitMessage.text}
              </p>
            )}
           <div className="flex w-full justify-end items-end">
             <button
              type="submit"
              disabled={isSubmitting}
              className=" py-2 bg-[#112B1D] px-6 md:px-12  text-white w-fit rounded disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
           </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TechnicalSupportForm;
