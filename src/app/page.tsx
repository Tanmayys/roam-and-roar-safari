"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/**
 * Roam & Roar Safari - "Midnight Forest" Experience
 * Optimized for high-performance sequential video playback with auto-play compatibility.
 */
export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const hasInteracted = useRef(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const videos = [
    "/hero_video.mp4",           // Bengal Tiger Roar
    "/elephant_encounter.mp4",   // Majestic Elephant Encounter
    "/hero_video_cinematic.mp4"  // Safari Adventure
  ];

  // Video rotation handler
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // Sync playback on mount and video change
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      
      // Muted is MANDATORY for instant auto-play on all browsers
      video.muted = isMuted;

      if (idx === currentVideo) {
        // High-performance play call
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
             console.log("Autoplay blocked/lagged:", err);
             // Aggressive retry for muted playback
             video.muted = true;
             video.play().catch(() => {});
          });
        }
      } else {
        video.pause();
        video.currentTime = 0; // Prepare next video for instant start
      }
    });
  }, [currentVideo, isMuted]);

  const handleInteraction = () => {
    if (hasInteracted.current) return;
    hasInteracted.current = true;
    setIsMuted(false);
  };

  const safariZones = [
    { id: "bijrani", name: "Bijrani", price: 7500, img: "/bijrani.png", description: "Vibrant forests and open fields, the top choice for sightings in core tracks." },
    { id: "jhirna", name: "Jhirna", price: 7500, img: "/jhirna.png", description: "Accessible year-round, ideal for birdwatchers and sloth bears." },
    { id: "dhela", name: "Dhela", price: 7500, img: "/dhela.png", description: "Lush biodiversity with frequent big cat encounters in the young forest." },
    { id: "garjia", name: "Garjia", price: 7500, img: "/garjia.png", description: "Riverine beauty near Kosi, perfect for morning riverbed safari views." },
    { id: "durga-devi", name: "Durga Devi", price: 7500, img: "/durga_devi.png", description: "Birding paradise with breathtaking hilly terrain and riverine forests." },
    { id: "phato", name: "Phato", price: 6000, img: "/phato.png", description: "Quiet, off-the-beaten-path territory for peaceful and secluded nature." },
    { id: "sitabani", name: "Sitabani", price: 6000, img: "/sitabani.png", description: "Mythical landscapes and wide-open jungle paths near ancient temples." },
    { id: "heritage", name: "Heritage", price: 6000, img: "/heritage.png", description: "A cultural journey through the foundations and historical park tracks." },
    { id: "haathidagar", name: "Haathidagar", price: 6000, img: "/haathidagar.png", description: "Rugged and ready for adventure seekers in raw safari terrain." },
  ];

  return (
    <main 
      onClick={handleInteraction}
      className="min-h-screen relative cursor-default selection:bg-[#c38b2d] bg-[#0a180a]"
    >
      {/* Hero Cinema Trio */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 bg-black">
          {isMobile === false && videos.map((src, idx) => (
            <video
              key={idx}
              ref={(el) => { videoRefs.current[idx] = el; }}
              src={src}
              autoPlay
              muted
              loop={false}
              playsInline
              preload={idx === 0 ? "auto" : "metadata"}
              poster="/bijrani.png"
              onEnded={handleVideoEnd}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
                ${idx === currentVideo ? "opacity-100 z-10 scale-100" : "opacity-0 z-0"}
                ${idx === 0 ? "-scale-x-100" : ""}
              `}
            />
          ))}
          {(isMobile === true || isMobile === null) && (
            <Image 
              src="/bijrani.png" 
              alt="Jim Corbett Safari Background" 
              fill 
              priority 
              className="object-cover -scale-x-100"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a180a] via-transparent to-black/30 z-20" />
        </div>

        
        <div className="relative z-30 max-w-5xl text-white mt-10 w-full px-4">
          <h2 className="text-[#c38b2d] text-[10px] md:text-xs uppercase font-black tracking-[0.6em] md:tracking-[0.8em] mb-4 md:mb-6 opacity-60">Jim Corbett National Park</h2>
          <h1 className="text-4xl md:text-[8rem] lg:text-[11rem] font-black mb-6 md:mb-10 uppercase leading-[1] md:leading-[0.8] tracking-tighter italic">
            {currentVideo === 0 && <>CORBETT <span className="text-[#c38b2d] block uppercase non-italic tracking-normal">UNLEASHED</span></>}
            {currentVideo === 1 && <>GENTLE <span className="text-[#c38b2d] block uppercase non-italic tracking-normal">GIANTS</span></>}
            {currentVideo === 2 && <>SAVAGE <span className="text-[#c38b2d] block uppercase non-italic tracking-normal">ADVENTURE</span></>}
          </h1>
          <p className="text-sm md:text-2xl text-white/80 font-bold mb-10 md:mb-16 max-w-xl mx-auto italic tracking-wide px-2 md:px-0">Explore the raw wilderness of Jim Corbett through the lens of luxury and expertise.</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center w-full max-w-[280px] md:max-w-none mx-auto">
            <Link href="/services" className="bg-[#fdfaf1] text-[#0a180a] px-6 md:px-14 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-xs md:text-sm uppercase tracking-widest md:tracking-[0.2em] hover:bg-[#c38b2d] hover:text-white transition-all shadow-2xl text-center">
              Explore All Zones
            </Link>
            <a href="https://wa.me/918077354975" className="bg-[#c38b2d] text-white px-6 md:px-14 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-xs md:text-sm uppercase tracking-widest md:tracking-[0.2em] shadow-xl hover:bg-white hover:text-[#0a180a] transition-all text-center">
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Cinematic Progress Bars */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex gap-4">
            {videos.map((_, i) => (
                <div key={i} className={`h-1.5 transition-all duration-700 rounded-full ${i === currentVideo ? "w-24 bg-[#c38b2d]" : "w-8 bg-white/20"}`} />
            ))}
        </div>
      </section>

      {/* Origin Section - DEEP FOREST */}
      <section id="about" className="py-32 px-6 md:px-20 bg-[#0a180a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h4 className="text-[#c38b2d] text-[10px] font-black uppercase tracking-[0.6em] mb-6">Our Operations</h4>
            <h2 className="text-6xl md:text-8xl font-black leading-none mb-10 text-white italic uppercase tracking-tighter">THE WILD HQ</h2>
            <p className="text-2xl text-white/50 leading-relaxed font-bold italic mb-12">
              Strategically based in Ramnagar, we offer an expert-guided safari experience with core zone access for the best possible chance of wildlife sightings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div>
                  <h6 className="text-[10px] font-black uppercase tracking-widest text-[#c38b2d] mb-2">Morning Shift</h6>
                  <p className="text-3xl font-black italic">06:00 AM</p>
               </div>
               <div>
                  <h6 className="text-[10px] font-black uppercase tracking-widest text-[#c38b2d] mb-2">Evening Shift</h6>
                  <p className="text-3xl font-black italic">14:00 PM</p>
               </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl md:rounded-[4rem] overflow-hidden border-[12px] border-[#1a2e1a] shadow-2xl">
            <Image 
              src="/bijrani.png" 
              alt="Bijrani Zone" 
              fill 
              className="object-cover transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Premier Packages Section */}
      <section id="services" className="py-32 px-6 md:px-20 bg-[#071107] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-10">CORE <span className="text-[#c38b2d]">UNITS</span></h2>
            <p className="text-xl text-white/40 max-w-xl mx-auto font-bold lowercase tracking-widest italic">Experience the restricted core territories of the reserve.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            { [
              { title: "Canter Safari", price: 2500, img: "/canter_safari.png", tag: "Group Exp", link: "/services/canter-safari" },
              { title: "DHIKALA STAY", price: 46000, img: "/dhikala_lodge.png", tag: "Luxe Core", link: "/services/dhikala-stay", featured: true },
              { title: "Elephant Ride", price: 4000, img: "/elephant_safari.png", tag: "Silent Hunt", link: "/services/elephant-safari" }
            ].map((pkg, i) => (
              <div key={i} className={`group relative rounded-3xl overflow-hidden transition-all duration-700 flex flex-col ${pkg.featured ? "bg-[#c38b2d] scale-105 z-20 shadow-2xl" : "bg-[#1a2e1a] border border-white/5 shadow-2xl"}`}>
                <div className={`h-48 relative overflow-hidden ${pkg.featured ? "brightness-110" : ""}`}>
                   <Image 
                     src={pkg.img} 
                     alt={pkg.title} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                     sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-widest">{pkg.tag}</div>
                </div>
                <div className="p-8 text-center flex-1">
                   <h5 className={`text-xl font-black mb-3 uppercase tracking-tighter ${pkg.featured ? "text-white" : "text-[#fdfaf1]"}`}>{pkg.title}</h5>
                   <div className="mb-6">
                      <span className={`text-3xl font-black italic ${pkg.featured ? "text-white" : "text-[#c38b2d]"}`}>₹{pkg.price.toLocaleString()}*</span>
                      <span className={`block text-[8px] font-bold mt-1 uppercase tracking-[0.4em] ${pkg.featured ? "text-white/50" : "text-white/20"}`}>Estimated Rate</span>
                   </div>
                   <Link href={pkg.link} className={`block w-full py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${pkg.featured ? "bg-white text-[#c38b2d] hover:bg-black hover:text-white" : "bg-[#c38b2d] text-white hover:bg-white hover:text-black"}`}>Dossier Terminal</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Atlas Grid */}
      <section id="pricing" className="py-32 px-6 md:px-20 bg-[#0a180a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12 pb-20 border-b border-white/5">
             <div className="max-w-2xl">
                <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-6">Zone Dossier</h4>
                <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] italic uppercase tracking-tighter">THE WILD <span className="text-[#c38b2d]">ATLAS</span></h2>
                <p className="mt-10 text-xl font-bold text-white/40 italic lowercase tracking-tight">Access 9 distinct ecological zones in the national reserve.</p>
             </div>
             <div className="bg-[#1a2e1a] px-8 md:px-16 py-10 rounded-3xl md:rounded-[3rem] border border-white/5 text-center">
                <p className="text-[10px] font-black text-[#c38b2d] uppercase tracking-widest mb-2">Permit Starts From</p>
                <p className="text-4xl md:text-5xl font-black italic tracking-tighter">₹6,000</p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {safariZones.map((zone, i) => (
              <div key={i} className="bg-[#1a2e1a] rounded-3xl border border-white/5 overflow-hidden group hover:border-[#c38b2d]/50 transition-all flex flex-col shadow-2xl">
                <div className="h-44 relative overflow-hidden transition-all duration-700">
                   <Image 
                     src={zone.img} 
                     alt={zone.name} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                     sizes="(max-width: 768px) 100vw, 25vw"
                   />
                   <div className="absolute bottom-4 right-4 bg-[#c38b2d] text-white px-5 py-2 rounded-full text-lg font-black italic">₹{zone.price}*</div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                   <h5 className="text-xl font-black uppercase italic tracking-tighter text-white mb-3 group-hover:text-[#c38b2d] transition-colors">{zone.name}</h5>
                   <p className="text-white/40 text-[11px] font-bold italic mb-6 leading-relaxed">"{zone.description}"</p>
                   <div className="mt-auto grid grid-cols-2 gap-3">
                      <Link href={`/services/${zone.id}`} className="bg-white/5 border border-white/10 text-white py-3 rounded-2xl text-[9px] font-black uppercase text-center hover:bg-white hover:text-black transition-all">Details</Link>
                      <a href="https://wa.me/918077354975" className="bg-[#c38b2d] text-white py-3 rounded-2xl text-[9px] font-black uppercase text-center hover:bg-white hover:text-black transition-all" aria-label={`Book ${zone.name} Safari`}>Book</a>
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/services" className="inline-block bg-[#1a2e1a] border border-[#c38b2d]/30 text-[#fdfaf1] px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#c38b2d] hover:text-white transition-all shadow-2xl animate-pulse">
              View All 12 Territories →
            </Link>
          </div>

          <p className="mt-20 text-center text-white/10 text-[9px] font-black uppercase tracking-[0.5em]">
            * Rates are strictly based on government permit slabs and vehicle union tariffs.
          </p>
        </div>
      </section>


      <a 
        href="https://wa.me/918077354975" 
        className="fixed bottom-12 right-12 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl scale-100 hover:scale-110 hover:rotate-12 transition-all active:scale-95"
      >
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <path d="M12.016 0C5.38 0 .002 5.378.002 12.014c0 2.117.552 4.185 1.604 6.004L0 24l6.17-1.618a12.02 12.02 0 005.846 1.488h.004c6.636 0 12.014-5.378 12.014-12.014C24.034 5.378 18.652 0 12.016 0zm0 21.826h-.004a9.97 9.97 0 01-5.08-1.392l-.364-.216-3.776.99.99-3.68-.238-.378a9.96 9.96 0 01-1.526-5.314c0-5.504 4.476-9.98 9.98-9.98 2.666 0 5.172 1.04 7.056 2.924a9.92 9.92 0 012.92 7.056c0 5.504-4.476 9.98-9.98 9.98zm5.46-7.452c-.3-.15-1.774-.876-2.048-1.026-.274-.15-.474-.224-.674.1-.2.324-.774 1.026-.95 1.226-.174.2-.348.224-.648.074-.3-.15-1.266-.466-2.414-1.49-.892-.794-1.494-1.774-1.668-2.074-.174-.3-.018-.462.132-.612.136-.136.3-.354.45-.53.15-.176.2-.3.3-.5.1-.2.05-.374-.026-.524-.076-.15-.674-1.624-.924-2.224-.244-.59-.49-.51-.674-.52-.174-.01-.374-.01-.574-.01-.2 0-.524.074-.8.374-.276.3-1.05 1.026-1.05 2.502 0 1.476 1.074 2.902 1.224 3.102.15.2 2.118 3.234 5.126 4.534.714.308 1.272.492 1.706.626.72.228 1.376.196 1.894.118.576-.086 1.776-.726 2.026-1.426.25-.7.25-1.3.176-1.426-.076-.126-.276-.2-.576-.35z" />
        </svg>
      </a>
    </main>
  );
}
