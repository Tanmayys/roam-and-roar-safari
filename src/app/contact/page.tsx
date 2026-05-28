"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 selection:bg-[#c38b2d]">
      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-6">Contact</h4>
          <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
            Let's Plan <span className="text-[#c38b2d]">Your Safari</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-bold max-w-3xl mx-auto leading-relaxed mb-20 italic">
            Get in touch with our team — available 7 days a week to help you book your Jim Corbett experience.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-16">
            <div>
              <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">Reach Us</h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-white">Contact Information</h2>
              <p className="text-white/40 font-bold text-lg leading-relaxed mb-8">
                Have questions about safari zones, permit availability, or trip planning? Our local team in Ramnagar is ready to assist you.
              </p>
              
              <ul className="space-y-6 text-white/80 font-bold">
                <li className="flex items-start gap-4">
                  <span className="text-[#c38b2d] text-xl">📍</span>
                  <span>Lutabarh, Berajhal, Ramnagar, Nainital – 244715, Uttarakhand</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#c38b2d] text-xl">📞</span>
                  <a href="tel:+918077354975" className="hover:text-[#c38b2d] transition-colors">+91 80773 54975</a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#c38b2d] text-xl">✉️</span>
                  <a href="mailto:ayazofficial786@gmail.com" className="hover:text-[#c38b2d] transition-colors">ayazofficial786@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">Working Hours</h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-white">Office Hours</h2>
              <p className="text-white/80 font-bold text-lg leading-relaxed">
                Monday - Sunday <br/>
                <span className="text-[#c38b2d]">Available 24/7 for Enquiries</span>
              </p>
            </div>
          </div>

          <div className="bg-[#071107] border border-white/10 p-8 md:p-12 rounded-3xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#c38b2d]/10 rounded-bl-full blur-2xl"></div>
             
             <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-4">Enquiry Form</h4>
             <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-white">Send Us a Message</h2>
             <p className="text-white/40 font-bold text-sm leading-relaxed mb-8">
               Fill in your details and we’ll get back to you within a few hours. Required fields are marked *.
             </p>

             <form 
               className="space-y-6" 
               onSubmit={(e) => {
                 e.preventDefault();
                 const formData = new FormData(e.currentTarget);
                 const msg = `GENERAL ENQUIRY: 
---------------------------
NAME: ${formData.get("name")}
PHONE: ${formData.get("phone")}
EMAIL: ${formData.get("email")}
---------------------------
MESSAGE:
${formData.get("message")}`;
                 window.open(`https://wa.me/918077354975?text=${encodeURIComponent(msg)}`);
               }}
             >
                <div>
                  <input name="name" type="text" placeholder="Full Name *" required className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#c38b2d] transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="email" type="email" placeholder="Email Address *" required className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#c38b2d] transition-colors" />
                  <input name="phone" type="tel" placeholder="Phone Number *" required className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#c38b2d] transition-colors" />
                </div>
                <div>
                  <textarea name="message" placeholder="Your Message / Enquiry Details *" required rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#c38b2d] transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#c38b2d] text-black font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1">
                  Send Dispatch
                </button>
             </form>
             
             <div className="mt-8 flex gap-3 text-white/30 text-xs font-bold leading-relaxed bg-black/50 p-4 rounded-xl">
               <span className="text-[#c38b2d]">ℹ️</span>
               <p>We only collect basic contact and trip details. We do not ask for Aadhaar, PAN, or any government ID through this form.</p>
             </div>
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
              <strong className="text-white"> Registered Address:</strong> Lutabarh, Berajhal, Ramnagar, Nainital – 244715, Uttarakhand
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
