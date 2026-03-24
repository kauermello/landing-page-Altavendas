"use client";

import { useState } from "react";
import { Check, Star, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const commonFeatures = [
  "Dashboard de KPIs",
  "IA para análise",
  "Relatórios automáticos",
  "App para vendedores",
  "Suporte por chat",
];

const plans = [
  {
    name: "Começo",
    monthlyPrice: 297,
    annualPrice: 2476,
    vendors: "Até 5",
    stores: "1",
    popular: false,
    cta: "Começar grátis",
    features: commonFeatures,
    extras: [],
  },
  {
    name: "Crescimento",
    monthlyPrice: 497,
    annualPrice: 4142,
    vendors: "Até 10",
    stores: "1",
    popular: true,
    cta: "Começar grátis",
    features: commonFeatures,
    extras: ["Onboarding dedicado"],
  },
  {
    name: "Dominação",
    monthlyPrice: 797,
    annualPrice: 6642,
    vendors: "Até 10",
    stores: "Até 3",
    popular: false,
    cta: "Começar grátis",
    features: commonFeatures,
    extras: ["Multi-loja", "Onboarding dedicado"],
  },
  {
    name: "Rede",
    monthlyPrice: null,
    annualPrice: null,
    vendors: "Ilimitados",
    stores: "Ilimitadas",
    popular: false,
    cta: "Falar com vendas",
    features: commonFeatures,
    extras: ["Multi-loja", "Onboarding dedicado", "SLA garantido", "Gerente de conta"],
    enterprise: true,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Preços
          </span>
        </Reveal>

        <Reveal delay={1} className="mb-3">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0F0F0F] text-center max-w-3xl mx-auto leading-tight">
            Quanto vale ter a sua operação comercial{" "}
            <span className="shine-text">na palma da sua mão?</span>
          </h2>
        </Reveal>

        <Reveal delay={2} className="mb-8">
          <p className="font-dm text-lg text-[#444444] text-center max-w-xl mx-auto">
            Planos para qualquer tamanho de operação. Comece grátis, cancele quando quiser.
          </p>
        </Reveal>

        <Reveal delay={3} className="mb-12">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl p-1 gap-1">
              <button
                onClick={() => setAnnual(false)}
                className={`font-dm text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200 ${
                  !annual
                    ? "bg-white text-[#0F0F0F] shadow-sm font-semibold"
                    : "text-[#888888] hover:text-[#444444]"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`font-dm text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  annual
                    ? "bg-white text-[#0F0F0F] shadow-sm font-semibold"
                    : "text-[#888888] hover:text-[#444444]"
                }`}
              >
                Anual
                <span className="bg-[#22C55E]/15 text-[#22C55E] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#22C55E]/25">
                  2 meses grátis
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div
                className={`relative rounded-2xl border p-6 flex flex-col h-full transition-all duration-200 ${
                  plan.popular ? "border-[#FF6B1A] shadow-lg shadow-orange-100 bg-white" : "border-[#E5E5E5] bg-white hover:border-[#FF6B1A] hover:bg-[#FFF4EE]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-[#FF6B1A] text-white text-xs font-dm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      <Star size={10} className="fill-white" /> Mais popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="font-sora font-bold text-lg text-[#0F0F0F] mb-1">{plan.name}</p>
                  <p className="font-dm text-xs text-[#888888] mb-4">
                    {plan.vendors} vendedores · {plan.stores}{" "}
                    {plan.stores === "1" ? "loja" : "lojas"}
                  </p>

                  {plan.enterprise ? (
                    <div>
                      <p className="font-sora font-extrabold text-2xl text-[#0F0F0F]">Sob consulta</p>
                      <p className="font-dm text-xs text-[#888888] mt-1">Personalizado para sua operação</p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-dm text-sm text-[#888888]">R$</span>
                        <span className="font-sora font-extrabold text-4xl text-[#0F0F0F]">
                          {annual ? Math.round(plan.annualPrice! / 12) : plan.monthlyPrice}
                        </span>
                        <span className="font-dm text-sm text-[#888888]">/mês</span>
                      </div>
                      {annual && (
                        <p className="font-dm text-xs text-[#888888] mt-1">
                          R$ {plan.annualPrice!.toLocaleString("pt-BR")}/ano
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <a
                  href={plan.enterprise ? "#" : "/cadastro"}
                  className={`flex items-center justify-center gap-2 font-dm font-semibold text-sm py-3 px-4 rounded-xl mb-6 ${
                    plan.enterprise
                      ? "bg-[#F8F8F8] text-[#444444] border border-[#E5E5E5] hover:border-[#FF6B1A] hover:text-[#FF6B1A] transition-all"
                      : plan.popular
                      ? "btn-orange"
                      : "bg-[#0F0F0F] text-white hover:bg-[#333] transition-colors"
                  }`}
                >
                  {plan.enterprise && <MessageCircle size={15} />}
                  {plan.cta}
                </a>

                <div className="space-y-2.5 flex-1">
                  {[...plan.features, ...plan.extras].map((f, fi) => (
                    <div key={fi} className="flex items-start gap-2">
                      <Check size={15} className={`flex-shrink-0 mt-0.5 ${plan.popular ? "text-[#FF6B1A]" : "text-[#22C55E]"}`} />
                      <span className="font-dm text-sm text-[#444444]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-dm text-sm text-[#888888] text-center">
            Sem taxa de setup. Sem contratos. Cancele quando quiser.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
