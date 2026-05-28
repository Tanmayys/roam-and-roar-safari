"use client";

import Image from "next/image";
import Link from "next/link";

interface Service {
  name: string;
  price: number;
  img: string;
  description: string;
  bestTime: string;
  timing: string;
}

export default function BookingTerminal({ service }: { service: Service }) {
  const isCanter = service.name.toLowerCase().includes("canter");
  const isDhikala = service.name.toLowerCase().includes("dhikala");

  return (
    <main className="min-h-screen selection:bg-[#c38b2d] bg-[#0a180a] text-[#fdfaf1] font-sans">
      <section className="pt-32 pb-24 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Segment */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40 text-center lg:text-left">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[12px] border-[#1a2e1a] shadow-2xl bg-[#1a2e1a]">
              <Image 
                src={service.img} 
                alt={service.name} 
                fill 
                className="object-cover transition-all duration-1000" 
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-6">Zone Dossier</h4>
              <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase leading-[0.8] tracking-tighter italic text-white">{service.name}</h1>
              <p className="text-xl md:text-3xl text-white/60 leading-relaxed font-bold italic">"{service.description}"</p>
              
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
                 <div className="bg-[#1a2e1a] px-6 py-4 rounded-2xl border border-white/10">
                    <p className="text-[#c38b2d] text-[10px] font-black uppercase tracking-widest mb-1">Permit Starts</p>
                    <p className="text-2xl font-black italic">₹{service.price.toLocaleString()}*</p>
                 </div>
                 <div className="bg-[#1a2e1a] px-6 py-4 rounded-2xl border border-white/10">
                    <p className="text-[#c38b2d] text-[10px] font-black uppercase tracking-widest mb-1">Vehicle Type</p>
                    <p className="text-2xl font-black italic">{isCanter ? "Canter" : "Jeep"}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="max-w-3xl mx-auto border border-[#c38b2d]/30 rounded-[2.5rem] p-6 md:p-12 bg-[#121c12] backdrop-blur-3xl shadow-3xl">
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-none mb-4">Book Your Safari</h2>
               <p className="text-white/60 text-sm md:text-base font-medium">Fill in the details below and we'll confirm your Jim Corbett experience.</p>
            </div>

            {/* Summary Cards */}
            <div className="space-y-4 mb-12">
               {/* Zone Card */}
               <div className="bg-[#1a2e1a] border border-white/10 p-6 md:p-8 rounded-[2rem] flex items-center gap-5 shadow-inner">
                  <div className="text-[#c38b2d]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-0.5">Selected Zone</p>
                    <h5 className="text-xl md:text-2xl font-black text-white">{service.name}</h5>
                  </div>
               </div>

               {/* Pricing Card */}
               <div className="bg-[#1a2e1a] border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-inner space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <div className="text-[#c38b2d]">
                        {isCanter ? (
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18 11V7H6v4H4v8c0 1.1.9 2 2 2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c1.1 0 2-.9 2-2v-8h-2zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 11H7V7h10v4z"/></svg>
                        ) : (
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                        )}
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold mb-0.5">{isCanter ? "Canter Safari" : "Jeep Safari"}</p>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Max {isCanter ? "16" : "6"} guests</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl md:text-4xl font-black text-[#c38b2d]">₹{service.price.toLocaleString()}<span className="text-[10px] font-bold text-white/30 non-italic ml-1">/{isCanter ? "person" : "jeep"}</span></p>
                      <p className="text-[10px] font-bold text-white/60 mt-1 uppercase tracking-widest italic">Advance: {isCanter ? "Full Payment" : "₹4,000"}</p>
                    </div>
                  </div>

                  {/* Special Alerts */}
                  {(isCanter || isDhikala) && (
                    <div className="bg-green-900/40 border border-green-800/50 p-6 rounded-2xl md:rounded-3xl space-y-3">
                       <p className="flex items-start gap-3 text-green-300 text-xs md:text-sm font-bold leading-relaxed italic">
                          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">!</span>
                          {isCanter ? "Max 16 people per canter. For larger groups, please contact us directly." : "For Jeep Safari in Dhikala, please call us for special arrangements."}
                       </p>
                       <p className="flex items-start gap-3 text-green-300 text-xs md:text-sm font-bold leading-relaxed italic">
                          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">!</span>
                          {isCanter ? "Canter safari permits are subject to availability in Dhikala heart zone." : "Advance permit processing takes minimum 45 days for Dhikala stays."}
                       </p>
                    </div>
                  )}
               </div>
            </div>

            {/* Main Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const msg = `SIGNAL TO HQ: 
---------------------------
REQUEST: ${service.name}
EXPEDITION DATE: ${formData.get("date")}
PERSONS: ${formData.get("guests")}
---------------------------
EXPLORER: ${formData.get("name")}
CONTACT: ${formData.get("phone")}
EMAIL: ${formData.get("email")}
---------------------------
Please process permit verification.`;
                window.open(`https://wa.me/918077354975?text=${encodeURIComponent(msg)}`);
              }}
              className="space-y-12"
            >
               <div className="space-y-6">
                  <h6 className="text-[#c38b2d] text-xs font-black uppercase tracking-widest ml-1">Personal Details</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { n: "name", l: "Full Name *", p: "Enter your full name" },
                      { n: "phone", l: "Phone Number *", p: "+91 XXXXX XXXXX" },
                      { n: "email", l: "Email Address *", p: "your@email.com" }
                    ].map(f => (
                      <div key={f.n} className="space-y-2.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#c38b2d]">{f.l}</label>
                        <input 
                          name={f.n} 
                          required 
                          type="text" 
                          placeholder={f.p} 
                          className="w-full bg-[#1a2e1a] border border-white/20 p-5 rounded-xl text-sm md:text-base font-bold focus:outline-none focus:border-[#c38b2d] transition-all text-white placeholder:text-white/30" 
                        />
                      </div>
                    ))}
                  </div>
               </div>

               <div className="space-y-6">
                  <h6 className="text-[#c38b2d] text-xs font-black uppercase tracking-widest ml-1">Booking Details</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#c38b2d]">Safari Date *</label>
                      <input 
                        name="date" 
                        required 
                        type="date" 
                        className="w-full bg-[#1a2e1a] border border-white/20 p-5 rounded-xl text-sm md:text-base font-bold focus:outline-none focus:border-[#c38b2d] transition-all text-white" 
                        style={{ colorScheme: 'dark' }} 
                      />
                      <p className="text-[10px] text-white/40 font-black uppercase tracking-widest ml-1 italic">Min 3 days advance</p>
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#c38b2d]">Number of Guests *</label>
                      <div className="relative">
                        <select 
                          name="guests" 
                          className="w-full bg-[#1a2e1a] border border-white/20 p-5 rounded-xl text-sm md:text-base font-bold focus:outline-none focus:border-[#c38b2d] transition-all text-white appearance-none cursor-pointer"
                        >
                          <option value="2">2 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="6">6 Guests</option>
                          {isCanter && <option value="16">16 Guests (Full Canter)</option>}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#c38b2d]">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

               <button type="submit" className="w-full bg-[#c38b2d] text-[#0a180a] py-6 rounded-2xl font-black text-lg md:text-xl uppercase shadow-2xl hover:bg-white transition-all tracking-widest">
                  Confirm Booking
               </button>
            </form>

            {/* Important Info Card */}
            <div className="mt-16 bg-[#1a2e1a] border border-white/10 p-8 md:p-12 rounded-[2.5rem] space-y-8">
               <h6 className="text-xl md:text-2xl font-black uppercase text-[#c38b2d] tracking-tight text-center md:text-left underline decoration-[#c38b2d]/20 underline-offset-8">Important Information</h6>
               <ul className="space-y-6">
                  {[
                    "Online booking requires minimum 3 days advance. For earlier slots, please call us directly at +91 80-77354975",
                    "Advance amount is non-refundable as it is paid to the government in advance for permit bookings.",
                    "Prices are subject to change based on government regulations."
                  ].map((txt, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm md:text-base font-bold text-white/70 leading-relaxed italic">
                      <div className="w-6 h-6 rounded-full border-2 border-[#c38b2d] flex items-center justify-center text-[#c38b2d] shrink-0 mt-0.5 text-xs font-black shadow-lg">!</div>
                      {txt}
                    </li>
                  ))}
               </ul>
            </div>

            {/* Need Help Footer */}
            <div className="text-center space-y-10 pt-16">
               <p className="text-white/60 text-sm md:text-base font-bold uppercase tracking-widest italic">Questions? Contact HQ directly</p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="tel:+918077354975" className="px-10 py-5 rounded-2xl border-2 border-[#c38b2d] text-[#c38b2d] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-[#c38b2d] hover:text-black transition-all shadow-xl">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    Call Now
                  </a>
                  <a href="https://wa.me/918077354975" className="px-10 py-5 rounded-2xl bg-[#c38b2d] text-black font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all shadow-xl">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.487l-.729 2.661 2.72-.714a5.727 5.727 0 002.665.66h.001c3.182 0 5.766-2.586 5.767-5.766 0-3.18-2.585-5.694-5.768-5.694zm3.383 8.164c-.147.414-.714.757-1.161.81-.397.047-.912.072-1.467-.107-2.146-.693-3.535-2.868-3.642-3.01-.107-.143-.872-1.161-.872-2.213 0-1.052.55-1.57.747-1.782.197-.213.43-.266.574-.266.143 0 .287.001.414.007.135.005.318-.051.498.384.185.45.632 1.543.687 1.655.056.113.093.244.019.395-.074.15-.11.244-.221.372-.11.129-.232.287-.331.385-.11.107-.225.224-.097.444.128.22.569.938 1.22 1.519.839.748 1.545 1.01 1.765 1.128.221.118.35.099.48-.051.129-.15.556-.649.704-.871.148-.222.296-.188.497-.113.201.075 1.272.6 1.494.712.221.113.37.169.424.264.054.094.054.545-.093.959z"/></svg>
                    WhatsApp
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-10 md:px-20 bg-[#071107] border-t border-white/20 text-center">
         <div className="max-w-4xl mx-auto">
            <h4 className="text-4xl md:text-6xl font-black tracking-tighter italic mb-12 text-white/10 uppercase">Secure Entry</h4>
            <p className="text-lg md:text-xl text-white/50 font-bold mb-20 italic leading-relaxed">Permits for Jim Corbett are limited and highly sought after. We recommend booking at least 45 days in advance for core zones like Dhikala and Bijrani.</p>
            <Link href="/services" className="text-[#c38b2d] font-black uppercase tracking-[0.5em] text-xs border-b-2 border-[#c38b2d] pb-2">Return to Zone Atlas</Link>
         </div>
      </section>
      
      <p className="py-12 text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic text-center">
        * Rates are indicative and depend on government permit slabs, vehicle union tariffs, and group size.
      </p>
    </main>
  );
}
