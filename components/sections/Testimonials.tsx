"use client";

import Reveal from "@/components/Reveal";

const testimonials = [
  {
    initials: "MR",
    color: "#FF6B1A",
    name: "Marcos Ribeiro",
    role: "Dono",
    company: "Rede Nexus Varejo",
    text: "Em 3 meses, minha taxa de conversão subiu 47%. Agora sei exatamente qual vendedor está travando e onde. A IA me diz o que fazer.",
  },
  {
    initials: "AS",
    color: "#E55A00",
    name: "Ana Santos",
    role: "Proprietária",
    company: "Moda Center",
    text: "Saímos de R$80k para R$230k/mês. A IA identificou que estávamos perdendo no atendimento ao cliente. Mudamos o treinamento e virou.",
  },
  {
    initials: "PL",
    color: "#cc4400",
    name: "Pedro Lima",
    role: "Gestor Comercial",
    company: "VF Veículos",
    text: "Antes eu adivinhava. Agora eu decido. O dashboard + IA é como ter um sócio que só fala quando tem algo importante a dizer.",
  },
  {
    initials: "CM",
    color: "#FF8C42",
    name: "Carla Mendes",
    role: "Diretora",
    company: "Rede Prime Moda",
    text: "Setup em menos de 10 minutos. No mesmo dia já estávamos com o dashboard funcionando. Minha equipe adorou a facilidade.",
  },
  {
    initials: "RA",
    color: "#D4511A",
    name: "Ricardo Alves",
    role: "Dono",
    company: "Rede Máxima Varejo",
    text: "Reduzi reuniões de alinhamento em 60%. Agora todo mundo vê os números em tempo real e sabe o que precisa fazer.",
  },
  {
    initials: "FC",
    color: "#FF5500",
    name: "Fernanda Costa",
    role: "Sócia",
    company: "Grupo Vêneto",
    text: "A IA identificou um padrão que eu nunca veria sozinha. Recuperamos R$40k em atendimentos parados que a gente nem sabia que existiam.",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-[#E5E5E5] rounded-2xl p-6 shadow-sm mx-3">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-sora font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-sora font-semibold text-sm text-[#0F0F0F]">{t.name}</p>
          <p className="font-dm text-xs text-[#888888]">{t.role} · {t.company}</p>
        </div>
      </div>
      <p className="font-dm text-sm text-[#444444] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#FF6B1A] text-xs">★</span>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Depoimentos
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0F0F0F] text-center leading-tight">
            Quem saiu do escuro,{" "}
            <span className="shine-text">não volta.</span>
          </h2>
        </Reveal>
      </div>

      {/* Marquee row 1 */}
      <div className="relative marquee-wrapper overflow-hidden mb-4">
        <div className="flex items-stretch" style={{ animation: "marquee 40s linear infinite" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="relative marquee-wrapper overflow-hidden">
        <div className="flex items-stretch" style={{ animation: "marquee-reverse 40s linear infinite" }}>
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
