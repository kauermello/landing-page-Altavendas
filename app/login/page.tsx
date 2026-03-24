"use client";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
          Não tem conta?{" "}
          <Link href="/cadastro" className="text-[#FF6B1A] font-semibold hover:underline">
            Criar conta grátis
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
                Bem-vindo de volta
              </h1>
              <p className="font-dm text-sm text-[#888888]">
                Entre na sua conta para acessar o dashboard
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
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

              {/* Senha */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block font-dm text-sm font-medium text-[#444444]">
                    Senha
                  </label>
                  <a
                    href="#"
                    className="font-dm text-xs text-[#FF6B1A] hover:underline"
                  >
                    Esqueci minha senha
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 pr-12 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#AAAAAA] hover:text-[#444444] transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-orange w-full justify-center font-dm font-semibold text-base px-6 py-3.5 rounded-xl mt-2"
              >
                Entrar
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-[#E5E5E5]" />
              <span className="font-dm text-xs text-[#AAAAAA]">ou</span>
              <div className="flex-1 h-px bg-[#E5E5E5]" />
            </div>

            {/* Sign up link */}
            <p className="font-dm text-sm text-[#888888] text-center">
              Não tem uma conta ainda?{" "}
              <Link
                href="/cadastro"
                className="text-[#FF6B1A] font-semibold hover:underline"
              >
                Criar conta grátis
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
