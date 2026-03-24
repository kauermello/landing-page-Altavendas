"use client";

import { useState, useMemo } from "react";
import Reveal from "@/components/Reveal";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

function formatBRL(value: number): string {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1).replace(".", ",")}M`;
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}k`;
  return `R$ ${value.toLocaleString("pt-BR")}`;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-dm text-sm text-[#444444]">{label}</span>
        <span className="font-sora font-bold text-base text-[#FF6B1A]">{format(value)}</span>
      </div>
      <div className="relative h-2">
        <div className="absolute inset-0 bg-[#E5E5E5] rounded-full" />
        <div
          className="absolute left-0 top-0 h-full bg-[#FF6B1A] rounded-full transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#FF6B1A] rounded-full shadow-md transition-all duration-150 pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between">
        <span className="font-dm text-xs text-[#888888]">{format(min)}</span>
        <span className="font-dm text-xs text-[#888888]">{format(max)}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [vendors, setVendors] = useState(5);
  const [ticket, setTicket] = useState(1500);
  const [dealsPerMonth, setDealsPerMonth] = useState(20);
  const [uplift, setUplift] = useState(25);

  const results = useMemo(() => {
    const currentMonthly = vendors * dealsPerMonth * ticket;
    const upliftFactor = uplift / 100;
    const newMonthly = currentMonthly * (1 + upliftFactor);
    const additionalMonthly = newMonthly - currentMonthly;
    const additionalAnnual = additionalMonthly * 12;
    return { currentMonthly, newMonthly, additionalMonthly, additionalAnnual };
  }, [vendors, ticket, dealsPerMonth, uplift]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Simulador de resultado
          </span>
        </Reveal>

        <Reveal delay={1} className="mb-3">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0F0F0F] text-center max-w-3xl mx-auto leading-tight">
            Quanto mais sua equipe pode vender{" "}
            <span className="shine-text">com o AltaVendas?</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="mb-12">
          <p className="font-dm text-base text-[#888888] text-center max-w-xl mx-auto">
            Clientes AltaVendas aumentam a conversão média da equipe em até{" "}
            <span className="font-semibold text-[#FF6B1A]">25%</span> e crescem{" "}
            <span className="font-semibold text-[#FF6B1A]">37% em receita</span> no primeiro ano.
            Simule o impacto no seu negócio.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#F8F8F8] rounded-3xl border border-[#E5E5E5] p-6 md:p-10">
            {/* Sliders */}
            <div className="space-y-8">
              <h3 className="font-sora font-bold text-lg text-[#0F0F0F]">Sua operação hoje</h3>

              <Slider
                label="Número de vendedores"
                value={vendors}
                min={1}
                max={50}
                step={1}
                format={(v) => `${v} vendedor${v !== 1 ? "es" : ""}`}
                onChange={setVendors}
              />

              <Slider
                label="Ticket médio por venda"
                value={ticket}
                min={100}
                max={20000}
                step={100}
                format={(v) => formatBRL(v)}
                onChange={setTicket}
              />

              <Slider
                label="Vendas por vendedor / mês"
                value={dealsPerMonth}
                min={1}
                max={500}
                step={1}
                format={(v) => `${v} vendas`}
                onChange={setDealsPerMonth}
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-dm text-sm text-[#444444]">Melhora de conversão estimada</span>
                  <span className="font-sora font-bold text-base text-[#FF6B1A]">{uplift}%</span>
                </div>
                <div className="relative h-2">
                  <div className="absolute inset-0 bg-[#E5E5E5] rounded-full" />
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF6B1A] to-[#FFB07A] rounded-full transition-all duration-150"
                    style={{ width: `${((uplift - 20) / 30) * 100}%` }}
                  />
                  <input
                    type="range"
                    min={20}
                    max={50}
                    step={1}
                    value={uplift}
                    onChange={(e) => setUplift(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#FF6B1A] rounded-full shadow-md pointer-events-none transition-all duration-150"
                    style={{ left: `calc(${((uplift - 20) / 30) * 100}% - 10px)` }}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="font-dm text-xs text-[#888888]">20% (conservador)</span>
                  <span className="font-dm text-xs text-[#888888]">50% (agressivo)</span>
                </div>
                <p className="font-dm text-xs text-[#888888] mt-1">
                  Clientes AltaVendas crescem em média <strong className="text-[#FF6B1A]">25-37%</strong> no primeiro ano.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-5">
              <h3 className="font-sora font-bold text-lg text-[#0F0F0F]">Seu potencial com AltaVendas</h3>

              {/* Main result */}
              <div className="bg-[#FF6B1A] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-white/80" />
                    <span className="font-dm text-sm text-white/80">Ganho adicional por ano</span>
                  </div>
                  <p className="font-sora font-extrabold text-5xl text-white leading-none mb-1">
                    {formatBRL(results.additionalAnnual)}
                  </p>
                  <p className="font-dm text-sm text-white/70">
                    {formatBRL(results.additionalMonthly)}/mês a mais com {uplift}% de melhora
                  </p>
                </div>
              </div>

              {/* Comparison cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#E5E5E5] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <DollarSign size={14} className="text-[#888888]" />
                    <span className="font-dm text-xs text-[#888888]">Receita atual/mês</span>
                  </div>
                  <p className="font-sora font-bold text-xl text-[#0F0F0F]">
                    {formatBRL(results.currentMonthly)}
                  </p>
                </div>
                <div className="bg-[#FFF4EE] border border-[#FFD4B8] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <TrendingUp size={14} className="text-[#FF6B1A]" />
                    <span className="font-dm text-xs text-[#FF6B1A]">Com AltaVendas/mês</span>
                  </div>
                  <p className="font-sora font-bold text-xl text-[#FF6B1A]">
                    {formatBRL(results.newMonthly)}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E5E5E5] rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF4EE] flex items-center justify-center flex-shrink-0">
                  <Users size={15} className="text-[#FF6B1A]" />
                </div>
                <p className="font-dm text-sm text-[#444444]">
                  Com <strong className="text-[#0F0F0F]">{vendors} vendedor{vendors !== 1 ? "es" : ""}</strong> a um ticket de{" "}
                  <strong className="text-[#0F0F0F]">{formatBRL(ticket)}</strong>, uma melhora de{" "}
                  <strong className="text-[#FF6B1A]">{uplift}%</strong> vale{" "}
                  <strong className="text-[#0F0F0F]">{formatBRL(results.additionalAnnual)}</strong> por ano.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="btn-orange flex items-center justify-center gap-2 font-dm font-semibold text-base px-6 py-3.5 rounded-xl w-full"
              >
                Começar agora e capturar esse resultado
                <ArrowRight size={18} />
              </a>
              <p className="font-dm text-xs text-[#888888] text-center">
                7 dias grátis · Sem cartão de crédito
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
