import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AltaVendas — Metrificação comercial + IA para varejo",
  description:
    "Dashboard de KPIs + IA para donos e gestores de varejo. Veja o desempenho de cada vendedor em tempo real, descubra onde você perde dinheiro e receba sugestões da IA.",
  keywords: "gestão de vendas, KPIs, dashboard comercial, IA para varejo, metrificação comercial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Sora:wght@300..800&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
