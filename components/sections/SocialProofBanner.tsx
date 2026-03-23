"use client";

const companies = [
  "Rede Nexus Varejo",
  "Moda Center",
  "VF Veículos",
  "Rede Máxima",
  "Grupo Vêneto",
  "Prime Moda",
  "Top Varejo",
  "Comercial Ativa",
];

export default function SocialProofBanner() {
  const doubled = [...companies, ...companies];

  return (
    <section className="bg-[#F8F8F8] border-y border-[#E5E5E5] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="font-dm text-xs font-semibold tracking-widest text-[#888888] uppercase">
          Confiado por líderes de empresas como
        </p>
      </div>
      <div className="relative marquee-wrapper overflow-hidden">
        <div
          className="flex gap-12 items-center whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {doubled.map((company, i) => (
            <span
              key={i}
              className="font-sora font-semibold text-base text-[#888888] hover:text-[#FF6B1A] transition-colors cursor-default flex-shrink-0"
            >
              {company}
              <span className="mx-6 text-[#E5E5E5]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
