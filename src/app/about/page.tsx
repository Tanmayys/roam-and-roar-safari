"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 selection:bg-[#c38b2d]">
      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-6">Our Legacy</h4>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black uppercase italic leading-[0.8] tracking-tighter mb-20">BORN IN <span className="text-[#c38b2d]">RAMNAGAR</span></h1>
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative aspect-square rounded-3xl md:rounded-[4rem] overflow-hidden border-[8px] md:border-[12px] border-[#1a2e1a] shadow-2xl">
              <Image src="/bijrani.png" alt="Ramnagar Origins" fill className="object-cover grayscale-[0.2]" />
            </div>
            <div className="space-y-12">
              <p className="text-3xl font-black italic text-[#fdfaf1]/80 leading-tight">
                "We don't just sell tours. We provide core-zone access through half a century of local expertise."
              </p>
              <p className="text-xl text-white/40 leading-relaxed font-bold">
                Roam & Roar Safari was founded on the principle that the wild should be experienced in its rawest form. Based strategicaly in Ramnagar, the gateway to Jim Corbett, our team consists of generational trackers who know the jungle's language.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-10">
                <div>
                  <div className="text-3xl md:text-4xl font-black text-[#c38b2d]">15+</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/20 mt-2">Years of Tracking</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-[#c38b2d]">98%</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/20 mt-2">Sighting Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#071107] border-y border-white/5 px-6 md:px-20 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-10 text-white">THE MISSION</h2>
            <p className="text-xl text-white/40 font-bold mb-16 italic">Protecting the corridors of the Bengal Tiger while providing elite-tier luxury access to the deep reserve.</p>
         </div>
      </section>
    </main>
  );
}
