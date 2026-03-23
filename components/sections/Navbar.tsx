"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Preços", href: "#precos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_0_#E5E5E5]"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — stacked wordmark, Syne, no symbol */}
          <a href="#" className="flex items-center leading-none">
            <div className="flex flex-col leading-none" style={{ gap: "1px" }}>
              <span className="font-syne font-extrabold text-[18px] tracking-tight text-[#0F0F0F]" style={{ letterSpacing: "-0.02em" }}>
                ALTA
              </span>
              <span className="font-syne font-normal text-[18px] text-[#FF6B1A]" style={{ letterSpacing: "0.06em" }}>
                VENDAS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-dm text-sm text-[#444444] hover:text-[#0F0F0F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="font-dm text-sm font-medium text-[#444444] px-4 py-2 border border-[#E5E5E5] rounded-lg hover:border-[#FF6B1A] hover:text-[#FF6B1A] transition-all"
            >
              Login
            </a>
            <a
              href="#"
              className="btn-orange font-dm text-sm font-semibold px-5 py-2 rounded-lg"
            >
              Começar grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#444444]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5] px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-dm text-sm text-[#444444] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#E5E5E5]">
            <a
              href="#"
              className="font-dm text-sm font-medium text-center text-[#444444] px-4 py-2.5 border border-[#E5E5E5] rounded-lg"
            >
              Login
            </a>
            <a
              href="#"
              className="font-dm text-sm font-semibold text-center text-white bg-[#FF6B1A] px-5 py-2.5 rounded-lg"
            >
              Começar grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
