"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <DialogTitle className="text-center text-2xl">
            You're on the list! 🎉
          </DialogTitle>
          <DialogDescription className="text-center">
            Thank you for joining our waitlist! We'll notify you as soon as
            Soole launches. Get ready for safer, more affordable, and social
            travel experiences.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="w-full bg-[#042011] text-white px-6 py-3 rounded-full font-medium hover:bg-[#042011]/90 transition-colors"
          >
            Got it!
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
