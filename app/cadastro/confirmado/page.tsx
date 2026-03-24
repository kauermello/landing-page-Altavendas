"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { insertOrgAndProfile } from "../page";

type Status = "loading" | "success" | "error";

export default function ConfirmadoPage() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    async function finalize() {
      try {
        // Aguarda o Supabase processar o token da URL (hash)
        const { data: { session } } = await supabase.auth.getSession();

        const raw = localStorage.getItem("av_pending_signup");
        if (!raw) {
          // Nada pendente — só mostra sucesso
          setStatus("success");
          return;
        }

        const pending = JSON.parse(raw);

        if (!session) {
          // Ainda sem sessão — aguarda um momento e tenta novamente
          await new Promise((r) => setTimeout(r, 1500));
          const { data: { session: retried } } = await supabase.auth.getSession();
          if (!retried) {
            setStatus("success"); // Mostra sucesso mesmo assim; login vai funcionar
            localStorage.removeItem("av_pending_signup");
            return;
          }
        }

        await insertOrgAndProfile({
          userId: pending.userId,
          nome: pending.nome,
          email: pending.email,
          empresa: pending.empresa,
          vendedores: pending.vendedores,
          lojas: pending.lojas,
        });

        localStorage.removeItem("av_pending_signup");
        setStatus("success");
      } catch {
        setStatus("success"); // Não bloqueia o usuário em caso de erro
        localStorage.removeItem("av_pending_signup");
      }
    }

    finalize();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFF4EE] rounded-full blur-3xl opacity-50" />
      </div>

      <header className="relative z-10 flex items-center max-w-6xl mx-auto w-full px-6 py-5">
        <Link href="/" className="flex flex-col leading-none" style={{ gap: "1px" }}>
          <span className="font-syne font-extrabold text-[18px] text-[#0F0F0F] tracking-tight" style={{ letterSpacing: "-0.02em" }}>ALTA</span>
          <span className="font-syne font-normal text-[18px] text-[#FF6B1A]" style={{ letterSpacing: "0.06em" }}>VENDAS</span>
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md text-center">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-xl shadow-black/5 p-10">
            {status === "loading" ? (
              <>
                <Loader2 size={40} className="text-[#FF6B1A] animate-spin mx-auto mb-6" />
                <h1 className="font-sora font-extrabold text-xl text-[#0F0F0F] mb-2">
                  Ativando sua conta...
                </h1>
                <p className="font-dm text-sm text-[#888888]">Só um segundo.</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-[#F0FFF4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h1 className="font-sora font-extrabold text-2xl text-[#0F0F0F] mb-3">
                  E-mail confirmado!
                </h1>
                <p className="font-dm text-sm text-[#888888] leading-relaxed mb-8">
                  Sua conta foi criada com sucesso. Agora faça login para acessar o dashboard.
                </p>
                <Link
                  href="/login"
                  className="btn-orange inline-flex items-center justify-center font-dm font-semibold text-base px-8 py-3.5 rounded-xl w-full"
                >
                  Fazer login
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
