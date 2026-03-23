"use client";

import { Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Produto: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Preços", href: "#precos" },
    { label: "Roadmap", href: "#" },
  ],
  Empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
  Suporte: [
    { label: "Central de ajuda", href: "#" },
    { label: "Documentação", href: "#" },
    { label: "Status", href: "#" },
    { label: "Contato", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center mb-4 leading-none">
              <div className="flex flex-col leading-none" style={{ gap: "1px" }}>
                <span className="font-syne font-extrabold text-[17px] text-white" style={{ letterSpacing: "-0.02em" }}>
                  ALTA
                </span>
                <span className="font-syne font-normal text-[17px] text-[#FF6B1A]" style={{ letterSpacing: "0.06em" }}>
                  VENDAS
                </span>
              </div>
            </a>
            <p className="font-dm text-sm text-[#888888] leading-relaxed max-w-xs mb-6">
              Visão total do seu comercial. Dashboard + IA para líderes que
              decidem com dados.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#888888] hover:text-white hover:bg-[#FF6B1A] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-sora font-semibold text-sm text-white mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-dm text-sm text-[#888888] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-[#555555]">
            © 2026 AltaVenda. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos de uso", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-dm text-xs text-[#555555] hover:text-[#888888] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
