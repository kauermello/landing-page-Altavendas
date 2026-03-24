"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "O que é o AltaVendas exatamente?",
    a: "É um sistema de metrificação comercial para varejo. Dashboard de KPIs + IA para donos, diretores e gestores que querem visualizar e controlar o comercial da empresa com dados reais — não no achismo.",
  },
  {
    q: "Preciso de TI para configurar?",
    a: "Não. Em menos de 10 minutos sua loja está configurada e seus vendedores já podem lançar atendimentos pelo celular. Zero código, zero integração complicada.",
  },
  {
    q: "Como os vendedores registram os atendimentos?",
    a: "Pelo app no celular, de forma simples. Eles registram cada atendimento no piso de loja — você vê tudo no dashboard em tempo real, com os KPIs já calculados automaticamente.",
  },
  {
    q: "A IA substitui meu gerente comercial?",
    a: "Não substitui, potencializa. Ela analisa e sugere, você decide. É como ter um analista dedicado que nunca dorme — lê todos os dados e chega na reunião com as respostas.",
  },
  {
    q: "Funciona para quantas lojas e vendedores?",
    a: "De 1 loja a redes inteiras, dependendo do plano. Começa pequeno e cresce com você. O plano Rede atende operações com múltiplas lojas e centenas de vendedores.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem multa, sem burocracia, sem ligação chata de retenção. Se decidir sair, é só cancelar pelo painel. Seus dados ficam disponíveis por 30 dias após o cancelamento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  return (
    <section className="py-20 md:py-28 bg-[#F8F8F8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#FFD4B8] text-[#FF6B1A] text-xs font-dm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
            Dúvidas
          </span>
        </Reveal>

        <Reveal delay={1} className="mb-12">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-[#0F0F0F] text-center leading-tight">
            Tem dúvidas? Que bom,{" "}
            <span className="shine-text">você tem um futuro promissor.</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden">
                <button
                  onClick={() => {
                    setOpen((prev) => {
                      const next = new Set(prev);
                      next.has(i) ? next.delete(i) : next.add(i);
                      return next;
                    });
                  }}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-sora font-semibold text-base text-[#0F0F0F]">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF4EE] flex items-center justify-center">
                    {open.has(i) ? (
                      <Minus size={14} className="text-[#FF6B1A]" />
                    ) : (
                      <Plus size={14} className="text-[#FF6B1A]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open.has(i) && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-[#F0F0F0]">
                        <p className="font-dm text-[#444444] leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
