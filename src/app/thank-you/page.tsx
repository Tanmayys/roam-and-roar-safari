"use client";

import Link from "next/link";
import { useState } from "react";

export default function ThankYouPage() {
  const [chatMessage, setChatMessage] = useState("");

  const handleWhatsAppChat = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = chatMessage.trim() 
      ? `Hi Ayaz! I just submitted my safari request on the website. Here is my question: ${chatMessage}`
      : "Hi Ayaz! I just submitted my safari request. Please verify my permit slot availability.";
    window.open(`https://wa.me/918077354975?text=${encodeURIComponent(formattedMsg)}`, "_blank");
  };

  return (
    <main className="min-h-screen selection:bg-[#c38b2d] bg-[#0a180a] text-[#fdfaf1] font-sans flex flex-col justify-center items-center px-6 pt-40 pb-20 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c38b2d]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-2xl w-full text-center space-y-10 bg-[#121c12]/60 backdrop-blur-3xl border border-[#c38b2d]/30 rounded-[3rem] p-8 md:p-14 shadow-3xl relative z-10">
        
        {/* Success Header */}
        <div className="space-y-6">
          <div className="mx-auto w-20 h-20 bg-gradient-to-tr from-[#c38b2d] to-[#e5b358] rounded-full flex items-center justify-center text-[#0a180a] text-3xl shadow-2xl animate-pulse">
            ✓
          </div>
          <div className="space-y-3">
            <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em]">Transmission Received</h4>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Thank You, <br />
              <span className="text-[#c38b2d]">Explorer!</span>
            </h1>
          </div>
          <p className="text-white/60 font-medium leading-relaxed italic text-xs md:text-sm max-w-lg mx-auto">
            Your request has been securely logged in our system. A wildlife coordinator has been assigned to verify permit slots.
          </p>
        </div>

        {/* Premium Interactive WhatsApp Chatbox */}
        <div className="bg-[#071107] border border-green-800/40 rounded-2xl overflow-hidden shadow-inner text-left max-w-md mx-auto">
          {/* Chatbox Header */}
          <div className="bg-[#0b240b] p-4 flex items-center gap-3 border-b border-green-800/20">
            <div className="relative w-10 h-10 rounded-full bg-[#c38b2d] flex items-center justify-center font-black text-black text-sm">
              AR
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0b240b]"></span>
            </div>
            <div>
              <h6 className="text-white text-xs font-black uppercase tracking-wider">Ayaz Ahmad</h6>
              <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">Online • Lead Safari Ranger</p>
            </div>
          </div>

          {/* Chatbox Body */}
          <div className="p-4 space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-opacity-5 min-h-[120px]">
            <div className="bg-[#142614] border border-green-900/30 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-white/90 leading-relaxed shadow-md font-bold italic">
              "Namaste! 🙏 I've received your request. I'm checking Jim Corbett core zone permits right now. Send me a quick text to expedite approval!"
            </div>
          </div>

          {/* Chatbox Input Form */}
          <form onSubmit={handleWhatsAppChat} className="p-3 bg-[#0d1f0d] flex gap-2 border-t border-green-800/20">
            <input 
              type="text" 
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Ask Ayaz a question (e.g. Is Dhikala open?)..." 
              className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#c38b2d] transition-colors"
            />
            <button 
              type="submit" 
              className="bg-green-600 text-white p-2.5 rounded-xl hover:bg-green-500 transition-colors flex items-center justify-center"
              aria-label="Send WhatsApp message"
            >
              <svg className="w-4 h-4 fill-current rotate-90" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Big WhatsApp CTA Button */}
        <div className="space-y-6">
          <a 
            href="https://wa.me/918077354975?text=Hi%20Ayaz!%20I%20just%20submitted%20my%20safari%20booking%20enquiry.%20Please%20help%20me%20confirm%20permit%20slots."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full max-w-md bg-green-600 text-white py-5 px-8 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-green-500 hover:-translate-y-1 transition-all transform"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.967a9.757 9.757 0 00-6.977-2.87c-5.433 0-9.859 4.417-9.863 9.852-.001 1.702.461 3.366 1.39 4.816L1.87 21.086l4.777-1.932zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Chat with Ranger on WhatsApp
          </a>
        </div>

        {/* Standard Utility Links */}
        <div className="border-t border-white/10 pt-8 flex gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3.5 rounded-xl border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all"
          >
            Go Home
          </Link>
          <Link 
            href="/services" 
            className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all"
          >
            Explore Zone Atlas
          </Link>
        </div>
      </div>
    </main>
  );
}
