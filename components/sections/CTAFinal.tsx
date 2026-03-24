"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CTAFinal() {
  return (
    <section className="bg-[#FF6B1A] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Se você chegou até aqui, quer dizer que{" "}
            <span className="text-white/90">podemos te ajudar.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="font-dm text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
            Então vai lá. Faz logo o teste grátis e o cadastro.
          </p>
        </Reveal>

        <Reveal delay={2} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/cadastro"
            className="flex items-center gap-2 font-dm font-bold text-base bg-white px-8 py-4 rounded-xl shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5"
            style={{ color: "#FF6B1A" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FFF4EE"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FFFFFF"; }}
          >
            Começar teste grátis agora
            <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal delay={3}>
          <p className="font-dm text-sm text-white/70 mt-6">
            Sem cartão de crédito · 7 dias grátis · Cancele quando quiser
          </p>
        </Reveal>
      </div>
    </section>
  );
}
