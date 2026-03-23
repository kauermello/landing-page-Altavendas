"use client";

import Reveal from "@/components/Reveal";
import { Building2, UserPlus, Smartphone, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Configure sua operação",
    description: "Cadastre sua loja, equipe e metas em menos de 10 minutos. Zero código, zero TI necessário.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Cadastre seus vendedores",
    description: "Adicione sua equipe em segundos. Cada vendedor recebe acesso ao app mobile no próprio celular.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Equipe lança atendimentos",
    description: "No piso de loja, sua equipe registra cada atendimento e fechamento pelo app. Simples e rápido.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Você decide com dados",
    description: "Dashboard em tempo real + IA gerando análises e sugestões. Você vê tudo, decide melhor.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Como funciona
          </span>
        </Reveal>

        <Reveal delay={1} className="mb-4">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0F0F0F] text-center max-w-3xl mx-auto leading-tight">
            Do cadastro à decisão inteligente{" "}
            <span className="shine-text">em 4 passos</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="mb-16">
          <p className="font-dm text-lg text-[#444444] text-center max-w-xl mx-auto">
            Sem precisar de TI. Sem complicação.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[#E5E5E5]" />
          {steps.map((step, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-[#FF6B1A] flex flex-col items-center justify-center mb-6 shadow-sm">
                  <span className="font-sora font-bold text-xs text-[#FF6B1A] leading-none mb-1">{step.number}</span>
                  <step.icon size={22} className="text-[#FF6B1A]" />
                </div>
                <h3 className="font-sora font-bold text-lg text-[#0F0F0F] mb-2">{step.title}</h3>
                <p className="font-dm text-sm text-[#444444] leading-relaxed max-w-[220px]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="flex justify-center mt-14">
          <a
            href="#"
            className="btn-orange font-dm font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-200"
          >
            Começar agora — é grátis
          </a>
        </Reveal>
      </div>
    </section>
  );
}
