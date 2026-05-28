"use client";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 selection:bg-[#c38b2d]">
      <section className="px-6 md:px-20 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-[#c38b2d] text-xs font-black uppercase tracking-[0.8em] mb-6">Legal</h4>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
            Disclaimer
          </h1>
          <p className="text-white/40 text-sm font-bold tracking-widest uppercase">
            Last Updated: May 2026 &nbsp;|&nbsp; Roam & Roar Safari
          </p>
          <div className="w-16 h-0.5 bg-[#c38b2d] mx-auto mt-8"></div>
        </div>
      </section>

      <section className="px-6 md:px-20 mb-32">
        <div className="max-w-4xl mx-auto space-y-12 text-white/70 font-bold leading-relaxed text-sm md:text-base">
          
          <div className="bg-red-950/20 border-l-4 border-red-500/50 p-6 rounded-r-xl">
            <h2 className="text-xl font-black uppercase italic text-red-400 mb-3">Not the Official Government Website</h2>
            <p><strong>Roam & Roar Safari is a privately owned and operated business.</strong> We are an independent safari booking agency and travel facilitator. We are <strong>NOT</strong> affiliated with, endorsed by, or connected to the Jim Corbett National Park, the Uttarakhand Forest Department, the Government of Uttarakhand, or the Government of India in any official capacity.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase italic text-white mb-4 border-b border-white/10 pb-2">Our Services</h2>
            <p className="mb-4">We assist tourists in planning and booking their safari experiences at Jim Corbett National Park. Our services include facilitating the booking of permits, arranging licensed gypsy/canter vehicles, and providing local guides.</p>
            <p>All official permits are issued exclusively by the Uttarakhand Forest Department. Our role is strictly that of a travel agent and facilitator.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase italic text-white mb-4 border-b border-white/10 pb-2">Wildlife Sightings</h2>
            <p className="mb-4">Jim Corbett National Park is a natural wildlife sanctuary. While we use experienced drivers and guides to maximize your chances of spotting wildlife, <strong className="text-white">sightings of tigers or any other specific animals depend on their natural movement.</strong></p>
            <p>Wildlife sightings are subject to natural behavior, weather conditions, and pure chance. No refunds will be provided based on the lack of wildlife sightings.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase italic text-white mb-4 border-b border-white/10 pb-2">Pricing and Fees</h2>
            <p className="mb-4">The prices listed on our website include the official government permit fees along with our professional service charges, vehicle rental, guide fees, and applicable taxes.</p>
            <p>Permit availability is strictly subject to the quotas released by the Forest Department. We do not hold reserved inventory of permits.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase italic text-white mb-4 border-b border-white/10 pb-2">Accuracy of Information</h2>
            <p>While we strive to keep the information on this website updated and accurate, details regarding safari timings, zones, rules, and government fees may change without prior notice. We shall not be held liable for any inaccuracies or sudden changes mandated by the Forest Department.</p>
          </div>

          <div className="bg-[#071107] border border-[#c38b2d]/30 p-8 rounded-2xl mt-12">
            <h3 className="text-xl font-black uppercase italic text-white mb-6">Questions?</h3>
            <p className="mb-4 text-white/50">If you require any further clarification regarding our independent status, please contact us:</p>
            <ul className="space-y-3">
              <li>📞 <strong className="text-white">Phone:</strong> +91 80773 54975</li>
              <li>✉️ <strong className="text-white">Email:</strong> ayazofficial786@gmail.com</li>
              <li>🏛️ <strong className="text-white">MSME Reg:</strong> UDYAM-UK-07-0048632</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
