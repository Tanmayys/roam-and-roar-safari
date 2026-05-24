import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-20 bg-black text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c38b2d]/10 rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0a180a]/20 rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-4 gap-12 mb-8 items-start">
        <div className="lg:col-span-2">
          <Link href="/" className="text-3xl font-black uppercase italic tracking-tighter mb-4 block leading-none">
            ROAM <span className="text-[#c38b2d]">&</span> ROAR
          </Link>
          <p className="text-sm text-white/30 font-bold italic mb-6 max-w-sm leading-relaxed">
            The core-zone specialists of Jim Corbett. High-frequency tiger sightings through professional tracks.
          </p>
          <div className="flex gap-4">
            {[
              { id: "FB", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.21c0-.837.108-1.177.852-1.177h3.148v-4.613l-4.148-.003c-4.996 0-5.852 2.334-5.852 5.393v2.61z" },
              { id: "IG", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              { id: "WA", path: "M12.016 0C5.38 0 .002 5.378.002 12.014c0 2.117.552 4.185 1.604 6.004L0 24l6.17-1.618a12.02 12.02 0 005.846 1.488h.004c6.636 0 12.014-5.378 12.014-12.014C24.034 5.378 18.652 0 12.016 0zm0 21.826h-.004a9.97 9.97 0 01-5.08-1.392l-.364-.216-3.776.99.99-3.68-.238-.378a9.96 9.96 0 01-1.526-5.314c0-5.504 4.476-9.98 9.98-9.98 2.666 0 5.172 1.04 7.056 2.924a9.92 9.92 0 012.92 7.056c0 5.504-4.476 9.98-9.98 9.98zm5.46-7.452c-.3-.15-1.774-.876-2.048-1.026-.274-.15-.474-.224-.674.1-.2.324-.774 1.026-.95 1.226-.174.2-.348.224-.648.074-.3-.15-1.266-.466-2.414-1.49-.892-.794-1.494-1.774-1.668-2.074-.174-.3-.018-.462.132-.612.136-.136.3-.354.45-.53.15-.176.2-.3.3-.5.1-.2.05-.374-.026-.524-.076-.15-.674-1.624-.924-2.224-.244-.59-.49-.51-.674-.52-.174-.01-.374-.01-.574-.01-.2 0-.524.074-.8.374-.276.3-1.05 1.026-1.05 2.502 0 1.476 1.074 2.902 1.224 3.102.15.2 2.118 3.234 5.126 4.534.714.308 1.272.492 1.706.626.72.228 1.376.196 1.894.118.576-.086 1.776-.726 2.026-1.426.25-.7.25-1.3.176-1.426-.076-.126-.276-.2-.576-.35z" },
              { id: "X", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.293 19.494h2.039L6.486 3.24H4.298l13.31 17.407z" }
            ].map((social) => (
              <a key={social.id} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c38b2d] transition-all transform hover:-translate-y-1 p-2.5">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-[#c38b2d] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Atlas</h5>
          <ul className="space-y-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
            <li><Link href="/" className="hover:text-white transition-colors">Home Base</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Territories</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#c38b2d] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Support</h5>
          <ul className="space-y-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
            <li><a href="tel:+918077354975" className="hover:text-white transition-colors">+91 80-77354975</a></li>
            <li><a href="https://wa.me/918077354975" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><span className="hover:text-white transition-colors cursor-default">24/7 Signals</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.8em]">
            © 2026 ROAM & ROAR SAFARI.
          </p>
          <a href="tel:+918077354975" className="text-[9px] font-black text-[#c38b2d] hover:text-white transition-colors tracking-[0.3em] uppercase">
            +91 80-77354975
          </a>
          <div className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">
            Ramnagar, Uttarakhand, India
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-3 text-center border-t border-white/5 pt-6">
          <p className="text-[7px] font-black text-[#c38b2d] uppercase tracking-[0.6em] opacity-60">Development HQ</p>
          <a 
            href="https://orbyza.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-end gap-2 text-white/90 hover:text-[#c38b2d] transition-colors group"
          >
             <div className="text-xl font-black italic tracking-tighter uppercase leading-none">ORBYZA</div>
             <div className="text-[7px] font-bold uppercase tracking-widest pb-0.5">Digital Marketing Agency</div>
          </a>
        </div>
      </div>
    </footer>
  );
}
