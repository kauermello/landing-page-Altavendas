"use client";

import Reveal from "@/components/Reveal";
import { Eye, Target, Users } from "lucide-react";

const painCards = [
  {
    icon: Eye,
    title: "Sem visão da operação",
    description: "Você lidera no escuro. Não sabe quem está vendendo, onde trava e quanto está perdendo todo mês.",
  },
  {
    icon: Target,
    title: "Decisão no achismo",
    description: "Sem dados você chuta. E chutar custa caro quando o erro é na estratégia da sua loja.",
  },
  {
    icon: Users,
    title: "Sozinho nas decisões",
    description: "Não tem ninguém analisando por você. Você vê o resultado ruim mas não sabe o que mudar.",
  },
];

export default function PainSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            O problema
          </span>
        </Reveal>

        <Reveal delay={1} className="mb-4">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0F0F0F] text-center max-w-3xl mx-auto leading-tight">
            Seu comercial perde dinheiro todo mês.{" "}
            <span className="shine-text">E você nem sabe onde.</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="mb-14">
          <p className="font-dm text-lg text-[#444444] text-center max-w-xl mx-auto">
            Sem metrificação. Sem visão do comercial. Sem ninguém analisando por você.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {painCards.map((card, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="bg-white border border-[#FFD4B8] rounded-2xl p-6 card-hover h-full group transition-all duration-300 hover:border-[#FF6B1A] hover:bg-[#FFF4EE]"
                style={{ boxShadow: "0 2px 12px rgba(255,107,26,0.06)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF4EE] flex items-center justify-center mb-4 group-hover:bg-[#FF6B1A] transition-colors duration-300">
                  <card.icon size={20} className="text-[#FF6B1A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sora font-bold text-lg text-[#0F0F0F] mb-2">{card.title}</h3>
                <p className="font-dm text-[#444444] leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-dm text-lg md:text-xl text-[#444444] italic text-center max-w-2xl mx-auto leading-relaxed">
            &ldquo;Nenhum sonho deveria morrer por falta de visão.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
