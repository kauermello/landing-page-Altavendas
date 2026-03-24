"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, TrendingUp, Zap, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const avatars = [
  { initials: "MR", color: "#FF6B1A" },
  { initials: "AS", color: "#E55A00" },
  { initials: "PL", color: "#cc4400" },
];

const miniBenefits = [
  { icon: Zap, label: "Fácil de usar" },
  { icon: CheckCircle, label: "Suporte humanizado" },
  { icon: Clock, label: "Setup em minutos" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFF4EE] rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0F0F0F] leading-[1.08] tracking-tight mb-6"
        >
          Seu comercial no escuro?
          <br />
          <span className="shine-text">Hora de assumir o controle da sua empresa.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-dm text-lg md:text-xl text-[#444444] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Metrificação comercial + IA para donos e gestores de varejo. Veja como está o desempenho de cada vendedor agora, descubra onde você perde dinheiro e receba um conselho da IA sobre o que fazer amanhã.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
        >
          <a href="/cadastro" className="btn-orange flex items-center gap-2 font-dm font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-orange-200">
            Começar teste grátis
            <ArrowRight size={18} />
          </a>
          <a
            href="#como-funciona"
            className="flex items-center gap-2 font-dm font-medium text-base text-[#444444] px-7 py-3.5 rounded-xl border border-[#E5E5E5] hover:border-[#FF6B1A] hover:text-[#FF6B1A] transition-all"
          >
            <Play size={16} className="fill-current" />
            Ver como funciona
          </a>
        </motion.div>

        {/* Note */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-dm text-sm text-[#888888] mb-12"
        >
          Sem cartão de crédito. Cancele quando quiser.
        </motion.p>

        {/* Social proof avatars */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <div className="flex -space-x-3">
            {avatars.map((a, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-sora font-bold"
                style={{ backgroundColor: a.color }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <p className="font-dm text-sm text-[#444444]">
            <span className="font-semibold text-[#0F0F0F]">Mais de 500</span>{" "}
            empresas já usam
          </p>
        </motion.div>

        {/* Mini benefit cards */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {miniBenefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-[#E5E5E5] px-4 py-2.5 rounded-full shadow-sm"
            >
              <b.icon size={15} className="text-[#FF6B1A]" />
              <span className="font-dm text-sm text-[#444444]">{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Hero dashboard mockup */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 relative max-w-4xl mx-auto"
        >
          <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">
            <div className="bg-[#F8F8F8] border-b border-[#E5E5E5] px-6 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 bg-white border border-[#E5E5E5] rounded-md px-3 py-1">
                <span className="font-dm text-xs text-[#888888]">app.altavendas.com.br/dashboard</span>
              </div>
            </div>
            <div className="p-6 bg-[#F8F8F8]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Receita do mês", value: "R$ 284.500", trend: "+23%" },
                  { label: "Taxa de conversão", value: "34,7%", trend: "+8%" },
                  { label: "Ticket médio", value: "R$ 3.420", trend: "+12%" },
                  { label: "Atendimentos hoje", value: "83", trend: "+5" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-[#E5E5E5] text-left">
                    <p className="font-dm text-xs text-[#888888] mb-1">{stat.label}</p>
                    <p className="font-sora font-bold text-lg text-[#0F0F0F]">{stat.value}</p>
                    <span className="font-dm text-xs text-[#22C55E] font-medium">{stat.trend}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sora font-semibold text-sm text-[#0F0F0F]">Conversão da equipe</span>
                  <span className="font-dm text-xs text-[#888888]">Últimos 30 dias</span>
                </div>
                <div className="flex items-end gap-2 h-20">
                  {[65, 80, 55, 90, 70, 85, 92, 78, 88, 95, 82, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{ height: `${h}%`, backgroundColor: i === 10 ? "#FF6B1A" : "#FFD4B8" }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 bg-[#FFF4EE] border border-[#FFD4B8] rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B1A] flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="font-sora font-semibold text-sm text-[#0F0F0F]">IA AltaVendas</p>
                  <p className="font-dm text-xs text-[#444444]">
                    Taxa de conversão da Loja Centro caiu 18% esta semana. Recomendo revisar abordagem da equipe no atendimento presencial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
