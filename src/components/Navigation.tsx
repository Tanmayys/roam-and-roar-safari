"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen ? "bg-[#0a180a]/90 backdrop-blur-2xl py-5 border-b border-white/5" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3">
            <div className="text-2xl font-black uppercase tracking-tighter text-[#fdfaf1] transition-transform group-hover:scale-105">
              ROAM <span className="text-[#c38b2d]">&</span> ROAR <span className="hidden md:inline text-[#c38b2d] font-serif lowercase italic tracking-tight opacity-60">safari</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
            <Link href="/" className="hover:text-[#c38b2d] transition-colors">Base</Link>
            <Link href="/about" className="hover:text-[#c38b2d] transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-[#c38b2d] transition-colors">Territories</Link>
            <Link href="/contact" className="hover:text-[#c38b2d] transition-colors">Contact Us</Link>
            <a href="tel:+918077354975" className="text-[#c38b2d] hover:text-white transition-colors tracking-widest">+91 80-77354975</a>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="/#inquiry" 
              className="hidden sm:flex bg-[#c38b2d] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-[#0a180a] transition-all transform hover:-translate-y-1"
            >
              Inquiry
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white w-8 h-8 flex flex-col justify-center items-end gap-1.5 focus:outline-none z-50"
            >
              <div className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`}></div>
              <div className={`h-0.5 bg-[#c38b2d] rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`}></div>
              <div className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "w-8 -rotate-45 -translate-y-2" : "w-8"}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#0a180a] transition-transform duration-700 ease-in-out lg:hidden pt-40 px-10 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-10 text-center">
          {[
            { name: "Base", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Territories", href: "/services" },
            { name: "Contact Us", href: "/contact" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-[#c38b2d] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:+918077354975" className="text-2xl font-black text-[#c38b2d] tracking-widest hover:text-white transition-colors">
            +91 80-77354975
          </a>
          <div className="pt-10">
            <Link 
              href="/#inquiry" 
              onClick={() => setIsOpen(false)}
              className="inline-block bg-[#c38b2d] text-white px-14 py-6 rounded-3xl font-black text-sm uppercase tracking-widest"
            >
              Digital Inquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
