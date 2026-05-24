"use client";

import Link from "next/link";
import Image from "next/image";

const allServices = [
  { id: "bijrani", name: "Bijrani Zone", price: 7500, img: "/bijrani.png", desc: "Open plains and vibrant tiger populations in the core territory." },
  { id: "jhirna", name: "Jhirna Zone", price: 7500, img: "/jhirna.png", desc: "Accessible all year, exceptional birdwatching and bear sightings." },
  { id: "dhela", name: "Dhela Zone", price: 7500, img: "/dhela.png", desc: "Diverse wildlife and tranquil nature trails in the youngest zone." },
  { id: "garjia", name: "Garjia Zone", price: 7500, img: "/garjia.png", desc: "The Kosi River territory with scenic riverbeds and morning tracks." },
  { id: "durga-devi", name: "Durga Devi Zone", price: 7500, img: "/durga_devi.png", desc: "Hilly terrain and high elevation birding near the river." },
  { id: "phato", name: "Phato Zone", price: 6000, img: "/phato.png", desc: "A hidden gem for secluded and peaceful safari tracks." },
  { id: "sitabani", name: "Sitabani Zone", price: 6000, img: "/sitabani.png", desc: "Scenic landscapes and mythical jungle paths outside the core." },
  { id: "heritage", name: "Heritage Zone", price: 6000, img: "/heritage.png", desc: "Explore the cultural roots and foundation tracks of the park." },
  { id: "haathidagar", name: "Haathidagar Zone", price: 6000, img: "/haathidagar.png", desc: "Rugged and raw safari adventure in mountainous terrain." },
  { id: "canter-safari", name: "Canter Safari", price: 2500, img: "/canter_safari.png", desc: "16-seater high-clearance bus for Dhikala core heart zone exploration." },
  { id: "dhikala-stay", name: "Dhikala Stay & Jeep", price: 46000, img: "/dhikala_lodge.png", desc: "Overnight stay + Private Jeep safari in the restricted heart zone." },
  { id: "elephant-safari", name: "Elephant Safari", price: 4000, img: "/elephant_safari.png", desc: "Silent hunt (Max 4 people). Exclusively in Dhikala and Bijrani zones." }
];

export default function ServicesListing() {
  return (
    <main className="min-h-screen selection:bg-[#c38b2d]">

      <section className="pt-40 pb-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
             <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[1em] mb-6">Service Atlas</h4>
             <h1 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.8] tracking-tighter">EVERY <span className="text-[#c38b2d]">TERRITORY</span></h1>
             <p className="mt-12 text-lg md:text-2xl text-white/40 font-bold max-w-2xl italic">From the riverbeds of Garjia to the restricted core of Dhikala. Choose your gateway to the wild.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, i) => (
              <Link key={i} href={`/services/${service.id}`} className="group bg-[#1a2e1a] rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-[#c38b2d]/40 shadow-2xl flex flex-col">
                 <div className="h-44 relative transition-all duration-700 overflow-hidden">
                    <Image 
                      src={service.img} 
                      alt={service.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                 </div>
                 <div className="p-7 flex-1 flex flex-col">
                    <h5 className="text-xl font-black uppercase italic text-white mb-2 group-hover:text-[#c38b2d] transition-colors line-clamp-1">{service.name}</h5>
                    <p className="text-white/40 text-xs font-bold italic mb-6 leading-relaxed line-clamp-2">{service.desc}</p>
                    <div className="mt-auto flex justify-between items-center bg-[#0a180a] p-4 rounded-2xl">
                       <div>
                          <span className="block text-[7px] font-black uppercase text-[#c38b2d] tracking-widest opacity-50">Estimates From</span>
                          <span className="text-lg font-black italic">₹{service.price.toLocaleString()}</span>
                       </div>
                       <div className="text-[8px] font-black uppercase tracking-widest text-[#c38b2d]">View →</div>
                    </div>
                 </div>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
            * Pricing shown is indicative based on standard permits. Final costing depends on availability, season, and group size.
          </p>
        </div>
      </section>

    </main>
  );
}
