import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AltaVenda — Dashboard + IA para líderes comerciais",
  description:
    "AltaVenda dá visão total dos seus KPIs e uma IA que analisa os dados, gera relatórios e te diz exatamente o que fazer — tudo em um só lugar.",
  keywords: "gestão de vendas, KPIs, dashboard comercial, IA para vendas, B2B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
