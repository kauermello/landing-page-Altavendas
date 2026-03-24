"use client";

import Reveal from "@/components/Reveal";
import { useState, useRef } from "react";
import { BarChart3, Smartphone, Bell, FileText } from "lucide-react";

const gridFeatures = [
  {
    icon: BarChart3,
    title: "KPIs em tempo real",
    description: "Veja conversão, ticket médio e performance de cada vendedor ao vivo — sem esperar relatório.",
    stat: "+34%",
    statLabel: "conversão",
    color: "#FF6B1A",
    story: "Seu dashboard já mostra onde cada atendimento trava.",
  },
  {
    icon: Smartphone,
    title: "App para vendedores",
    description: "Sua equipe lança atendimentos e fechamentos pelo celular em segundos, de qualquer lugar.",
    stat: "100%",
    statLabel: "mobile",
    color: "#E55A00",
    story: "No piso de loja ou na rua, o time lança em segundos.",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Saiba na hora quando um vendedor está abaixo da meta ou um cliente precisa de atenção.",
    stat: "0",
    statLabel: "clientes perdidos",
    color: "#FF8C42",
    story: "Nenhum cliente quente some do radar sem você saber.",
  },
  {
    icon: FileText,
    title: "Relatórios automáticos",
    description: "A IA gera relatórios completos da operação sem você montar nenhuma planilha.",
    stat: "-8h",
    statLabel: "por semana",
    color: "#cc4400",
    story: "Relatório pronto antes da reunião de segunda-feira.",
  },
];

interface FeatureCardProps {
  feature: (typeof gridFeatures)[0];
}

function FeatureCard({ feature }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [iconPos, setIconPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * 6, y: -dx * 6 });
    setIconPos({ x: dx * 8, y: dy * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIconPos({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-xl border border-[#E5E5E5] p-5 cursor-default select-none overflow-hidden relative"
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "box-shadow 0.2s ease" : "transform 0.5s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? `0 16px 40px rgba(255,107,26,0.15), 0 4px 12px rgba(0,0,0,0.08)`
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Glow bg on hover */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(255,107,26,0.06) 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        {/* Icon — follows cursor */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
          style={{
            backgroundColor: hovered ? feature.color : "#FFF4EE",
            transform: `translate(${iconPos.x}px, ${iconPos.y}px)`,
            transition: hovered ? "background-color 0.3s ease" : "background-color 0.3s ease, transform 0.5s ease",
          }}
        >
          <feature.icon
            size={20}
            style={{ color: hovered ? "#fff" : feature.color, transition: "color 0.3s" }}
          />
        </div>

        <h4 className="font-sora font-semibold text-base text-[#0F0F0F] mb-2">{feature.title}</h4>
        <p className="font-dm text-sm text-[#444444] leading-relaxed mb-4">{feature.description}</p>

        {/* Story reveal on hover */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: hovered ? "80px" : "0px", opacity: hovered ? 1 : 0 }}
        >
          <div className="pt-3 border-t border-[#F0F0F0] flex items-center justify-between">
            <p className="font-dm text-xs text-[#888888] italic">{feature.story}</p>
            <div className="ml-3 flex-shrink-0 text-right">
              <p className="font-sora font-bold text-lg leading-none" style={{ color: feature.color }}>
                {feature.stat}
              </p>
              <p className="font-dm text-xs text-[#888888]">{feature.statLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Funcionalidades
          </span>
        </Reveal>

        <Reveal delay={1} className="mb-4">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0F0F0F] text-center max-w-3xl mx-auto leading-tight">
            Visão total + inteligência.{" "}
            <span className="shine-text">O que você nunca teve.</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="mb-14">
          <p className="font-dm text-lg text-[#444444] text-center max-w-xl mx-auto">
            Dashboard de metrificação comercial + IA. Duas ferramentas que juntas dão visão e controle total sobre seu varejo.
          </p>
        </Reveal>

        {/* Two big feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Reveal>
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-8 card-hover relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFF4EE] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
              <div className="relative">
                <h3 className="font-sora font-bold text-2xl text-[#0F0F0F] mb-3">Dashboard de KPIs</h3>
                <p className="font-dm text-[#444444] leading-relaxed mb-6">
                  Metrificação comercial em tempo real. Conversão, ticket médio, performance por vendedor,
                  atendimentos do dia — tudo visível em uma tela só.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Conversão", value: "34%" },
                    { label: "Ticket médio", value: "R$1.8k" },
                    { label: "Atendimentos hoje", value: "83" },
                    { label: "Meta do mês", value: "91%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#F8F8F8] rounded-xl px-4 py-3">
                      <p className="font-dm text-xs text-[#888888]">{stat.label}</p>
                      <p className="font-sora font-bold text-base text-[#0F0F0F]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="bg-[#0F0F0F] rounded-2xl border border-[#222] p-8 card-hover relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B1A] rounded-full -translate-y-1/2 translate-x-1/2 opacity-10" />
              <div className="relative">
                <h3 className="font-sora font-bold text-2xl text-white mb-3">Inteligência Artificial</h3>
                <p className="font-dm text-gray-400 leading-relaxed mb-6">
                  A IA lê todos os dados do seu comercial, identifica gargalos, gera relatórios e sugere
                  ações concretas. Como ter um analista dedicado que nunca dorme.
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-xl px-4 py-3">
                    <p className="font-dm text-xs text-gray-300">
                      💡 <span className="font-semibold text-white">IA detectou:</span> Taxa de conversão da sua loja caiu 12% nesta semana vs. semana anterior.
                    </p>
                  </div>
                  <div className="bg-[#FF6B1A]/20 border border-[#FF6B1A]/30 rounded-xl px-4 py-3">
                    <p className="font-dm text-xs text-[#FF6B1A]">
                      ✦ <span className="font-semibold">Sugestão:</span> Reforce o treinamento de abordagem inicial. 3 vendedores estão abaixo da meta de conversão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4-col interactive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gridFeatures.map((feature, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
