"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen selection:bg-[#c38b2d] bg-[#0a180a] text-[#fdfaf1] font-sans flex flex-col justify-center items-center px-6 pt-40 pb-20 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c38b2d]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-xl w-full text-center space-y-12 bg-[#121c12]/60 backdrop-blur-3xl border border-[#c38b2d]/30 rounded-[3rem] p-10 md:p-16 shadow-3xl relative z-10">
        {/* Animated Badge */}
        <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-[#c38b2d] to-[#e5b358] rounded-full flex items-center justify-center text-[#0a180a] text-4xl shadow-2xl animate-bounce">
          ✓
        </div>

        <div className="space-y-4">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em]">Transmission Received</h4>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            Thank You, <br />
            <span className="text-[#c38b2d]">Explorer!</span>
          </h1>
        </div>

        <p className="text-white/60 font-medium leading-relaxed italic text-sm md:text-base">
          Your request has been securely dispatched directly to our HQ and logged in our safari database. 
          A wildlife consultant is preparing your permit clearance details and will contact you within a few hours.
        </p>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
          >
            Go Home
          </Link>
          <Link 
            href="/services" 
            className="px-8 py-4 rounded-xl bg-[#c38b2d] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg"
          >
            Explore Zone Atlas
          </Link>
        </div>
      </div>
    </main>
  );
}
