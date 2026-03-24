"use client";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function CadastroPage() {
  const [vendedores, setVendedores] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Background blob */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFF4EE] rounded-full blur-3xl opacity-50" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between max-w-6xl mx-auto w-full px-6 py-5">
        <Link href="/" className="flex flex-col leading-none" style={{ gap: "1px" }}>
          <span
            className="font-syne font-extrabold text-[18px] text-[#0F0F0F] tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            ALTA
          </span>
          <span
            className="font-syne font-normal text-[18px] text-[#FF6B1A]"
            style={{ letterSpacing: "0.06em" }}
          >
            VENDAS
          </span>
        </Link>
        <p className="font-dm text-sm text-[#888888]">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#FF6B1A] font-semibold hover:underline">
            Entrar
          </Link>
        </p>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-xl shadow-black/5 p-8">
            {/* Title */}
            <div className="mb-8">
              <h1 className="font-sora font-extrabold text-2xl text-[#0F0F0F] mb-2">
                Crie sua conta grátis
              </h1>
              <p className="font-dm text-sm text-[#888888]">
                7 dias grátis · Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="João Silva"
                  className="w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="joao@empresa.com"
                  className="w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all"
                />
              </div>

              {/* Nome da empresa */}
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">
                  Nome da empresa
                </label>
                <input
                  type="text"
                  placeholder="Minha Loja Ltda."
                  className="w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all"
                />
              </div>

              {/* Número de vendedores */}
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">
                  Número de vendedores
                </label>
                <select
                  value={vendedores}
                  onChange={(e) => setVendedores(e.target.value)}
                  className="w-full font-dm text-sm text-[#0F0F0F] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "vendedor" : "vendedores"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-orange w-full justify-center font-dm font-semibold text-base px-6 py-3.5 rounded-xl mt-2"
              >
                Criar conta grátis
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>

            {/* Terms */}
            <p className="font-dm text-xs text-[#AAAAAA] text-center mt-5 leading-relaxed">
              Ao criar sua conta você concorda com os{" "}
              <a href="#" className="underline hover:text-[#FF6B1A]">
                Termos de Uso
              </a>{" "}
              e a{" "}
              <a href="#" className="underline hover:text-[#FF6B1A]">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
