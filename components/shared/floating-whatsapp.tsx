"use client"
import React from 'react';
import { Icons } from './icons';

const FloatingWhatsApp = () => {
  const phoneNumber = "07032220043";
  const message = "Hello! I'm interested in learning more about Soole.";
  
  const handleWhatsAppClick = () => {
    // Convert the Nigerian phone number to international format
    const internationalNumber = phoneNumber.replace(/^0/, "+234");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat with us on WhatsApp"
      >
        <Icons.whatsapp className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;