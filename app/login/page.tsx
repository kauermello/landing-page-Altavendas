"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all";

const inputErrorClass =
  "w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-red-400 rounded-xl px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/10 transition-all";

function friendlyError(msg: string): string {
  if (
    msg.includes("Invalid login credentials") ||
    msg.includes("invalid_credentials") ||
    msg.includes("Email not confirmed")
  )
    return "E-mail ou senha incorretos. Verifique e tente novamente.";
  if (msg.includes("rate limit") || msg.includes("too many"))
    return "Muitas tentativas. Aguarde alguns minutos e tente novamente.";
  if (msg.includes("User not found"))
    return "Nenhuma conta encontrada com este e-mail.";
  return "Algo deu errado. Tente novamente em instantes.";
}

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Debug: verifica se as variáveis de ambiente estão sendo lidas
    console.log("[AltaVendas] SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("[AltaVendas] SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ presente" : "❌ ausente");

    const { data: signInData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (authError) {
      // Debug: loga o erro completo para diagnóstico
      console.error("[AltaVendas] Erro no login:", {
        message: authError.message,
        status: authError.status,
        name: authError.name,
      });
      setError(friendlyError(authError.message));
      setLoading(false);
      return;
    }

    console.log("[AltaVendas] Login bem-sucedido:", signInData.user?.email);

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token ?? "";
    const refreshToken = sessionData.session?.refresh_token ?? "";
    window.location.href = `https://upvendas.app.br/auth/callback#access_token=${accessToken}&refresh_token=${refreshToken}&type=recovery`;
  }

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
          <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-xl shadow-black/5 p-8">
            <div className="mb-8">
              <h1 className="font-sora font-extrabold text-2xl text-[#0F0F0F] mb-2">
                Bem-vindo de volta
              </h1>
              <p className="font-dm text-sm text-[#888888]">
                Entre na sua conta para acessar o dashboard
              </p>
            </div>

            {/* Erro global */}
            {error && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="font-dm text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="joao@empresa.com"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className={error ? inputErrorClass : inputClass}
                />
              </div>

              {/* Senha */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block font-dm text-sm font-medium text-[#444444]">
                    Senha
                  </label>
                  <a href="#" className="font-dm text-xs text-[#FF6B1A] hover:underline">
                    Esqueci minha senha
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={senha}
                    onChange={(e) => { setSenha(e.target.value); setError(""); }}
                    className={`${error ? inputErrorClass : inputClass} pr-12`}
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
                disabled={loading}
                className="btn-orange w-full justify-center font-dm font-semibold text-base px-6 py-3.5 rounded-xl mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  <>
                    Entrar
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-[#E5E5E5]" />
              <span className="font-dm text-xs text-[#AAAAAA]">ou</span>
              <div className="flex-1 h-px bg-[#E5E5E5]" />
            </div>

            <p className="font-dm text-sm text-[#888888] text-center">
              Não tem uma conta ainda?{" "}
              <Link href="/cadastro" className="text-[#FF6B1A] font-semibold hover:underline">
                Criar conta grátis
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
