import type { Metadata } from "next";
import { Syne, Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

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
    <html lang="pt-BR" className={`${syne.variable} ${sora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
