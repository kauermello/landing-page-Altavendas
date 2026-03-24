"use client";

import { useState } from "react";
import { Eye, EyeOff, AlertCircle, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { insertOrgAndProfile } from "@/lib/signup-helpers";

const selectClass =
  "w-full font-dm text-sm text-[#0F0F0F] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all appearance-none cursor-pointer";

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 16px center",
};

const inputClass =
  "w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10 transition-all";

const inputErrorClass =
  "w-full font-dm text-sm text-[#0F0F0F] placeholder:text-[#BBBBBB] bg-white border border-red-400 rounded-xl px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/10 transition-all";

function friendlyError(msg: string): string {
  if (msg.includes("User already registered") || msg.includes("already been registered"))
    return "Este e-mail já está cadastrado. Tente fazer login.";
  if (msg.includes("Password should be at least"))
    return "A senha precisa ter pelo menos 6 caracteres.";
  if (msg.includes("Unable to validate email"))
    return "E-mail inválido. Verifique e tente novamente.";
  if (msg.includes("rate limit") || msg.includes("too many"))
    return "Muitas tentativas. Aguarde alguns minutos e tente novamente.";
  return "Algo deu errado. Tente novamente em instantes.";
}

function vendedoresParaInt(v: string): number {
  const map: Record<string, number> = {
    "1-5": 5, "6-10": 10, "11-20": 20, "21-50": 50, "50+": 99,
  };
  return map[v] ?? 5;
}

function lojasParaInt(v: string): number {
  const map: Record<string, number> = {
    "1": 1, "2-3": 3, "4-10": 10, "10+": 99,
  };
  return map[v] ?? 1;
}

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");

  const [form, setForm] = useState({
    nome: "", email: "", senha: "", telefone: "",
    empresa: "", vendedores: "", lojas: "", segmento: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1. Criar usuário no Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.senha,
        options: {
          data: { display_name: form.nome },
          emailRedirectTo: "https://landing-altavendas.vercel.app/cadastro/confirmado",
        },
      });

      if (authError) {
        setError(friendlyError(authError.message));
        setLoading(false);
        return;
      }

      const userId = authData.user?.id;
      if (!userId) {
        setError("Não foi possível criar a conta. Tente novamente.");
        setLoading(false);
        return;
      }

      // 2. Salvar dados extras no localStorage para o fluxo de confirmação
      localStorage.setItem(
        "av_pending_signup",
        JSON.stringify({
          userId,
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          empresa: form.empresa,
          vendedores: vendedoresParaInt(form.vendedores),
          lojas: lojasParaInt(form.lojas),
          segmento: form.segmento,
        })
      );

      // 3. Se já tem sessão (confirmação de e-mail desativada), insere direto
      if (authData.session) {
        await insertOrgAndProfile({
          userId,
          nome: form.nome,
          email: form.email,
          empresa: form.empresa,
          vendedores: vendedoresParaInt(form.vendedores),
          lojas: lojasParaInt(form.lojas),
        });
        localStorage.removeItem("av_pending_signup");
        window.location.href = "https://upvendas.app.br";
        return;
      }

      // 4. Sem sessão → mostra tela de verificação
      setVerifyEmail(form.email);
      setLoading(false);
    } catch {
      setError("Algo deu errado. Tente novamente em instantes.");
      setLoading(false);
    }
  }

  // Tela de "verifique seu e-mail"
  if (verifyEmail) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFF4EE] rounded-full blur-3xl opacity-50" />
        </div>
        <header className="relative z-10 flex items-center justify-between max-w-6xl mx-auto w-full px-6 py-5">
          <Link href="/" className="flex flex-col leading-none" style={{ gap: "1px" }}>
            <span className="font-syne font-extrabold text-[18px] text-[#0F0F0F] tracking-tight" style={{ letterSpacing: "-0.02em" }}>ALTA</span>
            <span className="font-syne font-normal text-[18px] text-[#FF6B1A]" style={{ letterSpacing: "0.06em" }}>VENDAS</span>
          </Link>
        </header>
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md text-center">
            <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-xl shadow-black/5 p-10">
              <div className="w-16 h-16 bg-[#FFF4EE] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} className="text-[#FF6B1A]" />
              </div>
              <h1 className="font-sora font-extrabold text-2xl text-[#0F0F0F] mb-3">
                Verifique seu e-mail!
              </h1>
              <p className="font-dm text-sm text-[#888888] leading-relaxed mb-2">
                Enviamos um link de confirmação para
              </p>
              <p className="font-dm font-semibold text-[#0F0F0F] text-sm mb-6">
                {verifyEmail}
              </p>
              <p className="font-dm text-sm text-[#888888] leading-relaxed">
                Clique no link no seu e-mail para ativar sua conta e começar o teste grátis.
              </p>
              <div className="mt-8 pt-6 border-t border-[#F0F0F0]">
                <p className="font-dm text-xs text-[#AAAAAA]">
                  Não recebeu?{" "}
                  <button
                    onClick={() => setVerifyEmail("")}
                    className="text-[#FF6B1A] font-semibold hover:underline"
                  >
                    Voltar e tentar novamente
                  </button>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFF4EE] rounded-full blur-3xl opacity-50" />
      </div>

      <header className="relative z-10 flex items-center justify-between max-w-6xl mx-auto w-full px-6 py-5">
        <Link href="/" className="flex flex-col leading-none" style={{ gap: "1px" }}>
          <span className="font-syne font-extrabold text-[18px] text-[#0F0F0F] tracking-tight" style={{ letterSpacing: "-0.02em" }}>ALTA</span>
          <span className="font-syne font-normal text-[18px] text-[#FF6B1A]" style={{ letterSpacing: "0.06em" }}>VENDAS</span>
        </Link>
        <p className="font-dm text-sm text-[#888888]">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#FF6B1A] font-semibold hover:underline">
            Entrar
          </Link>
        </p>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-xl shadow-black/5 p-8">
            <div className="mb-8">
              <h1 className="font-sora font-extrabold text-2xl text-[#0F0F0F] mb-2">
                Crie sua conta grátis
              </h1>
              <p className="font-dm text-sm text-[#888888]">
                7 dias grátis · Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>

            {error && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="font-dm text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">Nome completo</label>
                <input type="text" placeholder="João Silva" required value={form.nome} onChange={(e) => set("nome", e.target.value)} className={inputClass} />
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">E-mail</label>
                <input type="email" placeholder="joao@empresa.com" required value={form.email} onChange={(e) => set("email", e.target.value)} className={error && error.includes("e-mail") ? inputErrorClass : inputClass} />
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">Senha</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="Mínimo 6 caracteres" required value={form.senha} onChange={(e) => set("senha", e.target.value)} className={`${error && error.includes("senha") ? inputErrorClass : inputClass} pr-12`} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#AAAAAA] hover:text-[#444444] transition-colors">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">WhatsApp / Telefone</label>
                <input type="tel" placeholder="(11) 99999-9999" required value={form.telefone} onChange={(e) => set("telefone", e.target.value)} className={inputClass} />
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">Nome da empresa</label>
                <input type="text" placeholder="Minha Loja Ltda." required value={form.empresa} onChange={(e) => set("empresa", e.target.value)} className={inputClass} />
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">Número de vendedores</label>
                <select required value={form.vendedores} onChange={(e) => set("vendedores", e.target.value)} className={selectClass} style={selectStyle}>
                  <option value="" disabled>Selecione</option>
                  <option value="1-5">1 – 5 vendedores</option>
                  <option value="6-10">6 – 10 vendedores</option>
                  <option value="11-20">11 – 20 vendedores</option>
                  <option value="21-50">21 – 50 vendedores</option>
                  <option value="50+">50+ vendedores</option>
                </select>
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">Número de lojas</label>
                <select required value={form.lojas} onChange={(e) => set("lojas", e.target.value)} className={selectClass} style={selectStyle}>
                  <option value="" disabled>Selecione</option>
                  <option value="1">1 loja</option>
                  <option value="2-3">2 – 3 lojas</option>
                  <option value="4-10">4 – 10 lojas</option>
                  <option value="10+">10+ lojas</option>
                </select>
              </div>

              <div>
                <label className="block font-dm text-sm font-medium text-[#444444] mb-1.5">Segmento</label>
                <select required value={form.segmento} onChange={(e) => set("segmento", e.target.value)} className={selectClass} style={selectStyle}>
                  <option value="" disabled>Selecione</option>
                  <option value="moda">Moda</option>
                  <option value="veiculos">Veículos</option>
                  <option value="eletronicos">Eletrônicos</option>
                  <option value="calcados">Calçados</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <button type="submit" disabled={loading} className="btn-orange w-full justify-center font-dm font-semibold text-base px-6 py-3.5 rounded-xl mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? (
                  <><Loader2 size={18} className="ml-0 mr-2 animate-spin" />Criando conta...</>
                ) : (
                  <>Criar conta grátis — 7 dias grátis</>
                )}
              </button>

              <p className="font-dm text-xs text-[#888888] text-center">
                Sem cartão de crédito. Cancele quando quiser.
              </p>
            </form>

            <p className="font-dm text-xs text-[#AAAAAA] text-center mt-5 leading-relaxed">
              Ao criar sua conta você concorda com os{" "}
              <a href="#" className="underline hover:text-[#FF6B1A]">Termos de Uso</a>{" "}e a{" "}
              <a href="#" className="underline hover:text-[#FF6B1A]">Política de Privacidade</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

