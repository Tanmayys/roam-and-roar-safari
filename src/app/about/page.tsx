"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 selection:bg-[#c38b2d]">
      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-6">About Us</h4>
          <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
            Where the Wild <span className="text-[#c38b2d]">Calls You</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-bold max-w-3xl leading-relaxed mb-20 italic">
            Roam & Roar Safari is your trusted local guide to the magnificent wilderness of Jim Corbett National Park.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-32 bg-[#071107] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">Who We Are</h2>
            <div className="space-y-6 text-white/40 font-bold leading-relaxed text-lg">
              <p>
                Roam & Roar Safari is a privately owned safari booking company based in Ramnagar, Uttarakhand — the gateway town to one of India's most celebrated wildlife destinations, Jim Corbett National Park. Incorporated on 24th May 2026 and registered as a Micro Enterprise under Udyam Registration No. UDYAM-UK-07-0048632, we are a government-recognised travel services operator.
              </p>
              <p>
                Founded with a deep passion for wildlife and a commitment to responsible tourism, we have been helping nature lovers, wildlife enthusiasts, and families experience the magic of Jim Corbett for over a year. From the first inquiry to the moment you spot a tiger in the wild — we are with you every step of the way.
              </p>
              <p>
                Our team is made up of local experts who know Jim Corbett's terrain, zones, and wildlife patterns intimately. This local knowledge is what sets us apart and ensures every safari we plan is memorable.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl md:rounded-[4rem] overflow-hidden border-[8px] md:border-[12px] border-[#1a2e1a] shadow-2xl">
            <Image src="/bijrani.png" alt="Jim Corbett Safari" fill className="object-cover grayscale-[0.2]" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">What We Do</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">How We Help You</h2>
          <div className="max-w-4xl text-white/40 font-bold leading-relaxed text-lg space-y-6">
            <p>
              We assist tourists in planning and booking complete safari experiences in Jim Corbett National Park. This includes helping you navigate government permit availability, selecting the right safari zone, and arranging everything you need for an unforgettable wildlife experience.
            </p>
            <p>
              As a private booking operator, we work closely with licensed local guides, government-approved vehicle operators, and trusted accommodation providers to deliver a seamless experience for every visitor.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">Our Services</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16 text-white">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Jeep Safari", icon: "🚙", desc: "Explore the deep forest zones up close with our licensed jeep safari packages — ideal for serious wildlife spotting." },
              { title: "Canter Safari", icon: "🚌", desc: "A shared, open-top canter experience perfect for families and groups looking to enjoy Jim Corbett affordably." },
              { title: "Dhikala Stay", icon: "🏕️", desc: "We assist with bookings at the iconic Dhikala zone — the heart of Jim Corbett — for an immersive overnight jungle stay." },
              { title: "Elephant Ride", icon: "🐘", desc: "Experience the jungle from atop an elephant — a unique and unforgettable perspective available at select zones." }
            ].map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#c38b2d]/50 transition-colors">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-4 text-white">{service.title}</h3>
                <p className="text-white/40 font-bold text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-32 bg-[#071107] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">Why Choose Us</h4>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16 text-white">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Locally Based", desc: "We are based in Ramnagar — not a distant city. We know Jim Corbett better than anyone." },
              { title: "End-to-End Support", desc: "From permit booking to drop-off after your safari — we handle everything for you." },
              { title: "Licensed Operators", desc: "All our vehicle operators and guides are government-licensed and fully verified." },
              { title: "Transparent Pricing", desc: "No hidden charges. What we quote is what you pay — always." },
              { title: "Personalized Planning", desc: "Every trip is planned around your group size, dates, and preferences." },
              { title: "Responsible Tourism", desc: "We follow all wildlife and forest guidelines to protect Jim Corbett's ecosystem." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[#c38b2d] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/40 font-bold text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-16">
        <div className="max-w-4xl mx-auto bg-black border border-[#c38b2d]/30 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#c38b2d]"></div>
          <h3 className="text-2xl font-black uppercase italic mb-6 text-white">⚠️ Important Disclaimer</h3>
          <div className="space-y-4 text-white/50 text-sm font-bold leading-relaxed">
            <p><strong className="text-white">Roam & Roar Safari is an independent, privately owned safari booking operator.</strong> We are not the official website of Jim Corbett National Park.</p>
            <p>We are not affiliated with, endorsed by, or connected to the Uttarakhand Forest Department, the Government of India, or any government authority in any official capacity.</p>
            <p>Safari permits are issued by the government — we assist customers in the booking process as a private service provider. All government permit fees are paid directly to the relevant authorities.</p>
            <p className="pt-4 border-t border-white/10 text-xs">
              <strong className="text-white">Proprietor:</strong> Ayaz Ahmed &nbsp;|&nbsp; 
              <strong className="text-white"> Udyam Registration No.:</strong> UDYAM-UK-07-0048632 &nbsp;|&nbsp; 
              <strong className="text-white"> Registered Address:</strong> Lutabarh, Berajhal, Ramnagar, Nainital – 244715, Uttarakhand &nbsp;|&nbsp; 
              <strong className="text-white"> Date of Incorporation:</strong> 24/05/2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
