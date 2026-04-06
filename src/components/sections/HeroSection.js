import Link from 'next/link';

export default function HeroSection() {
  return (
    <header className="relative h-[100dvh] min-h-[680px] sm:min-h-[760px] overflow-hidden">
      {/* Elementos Decorativos Suaves (Flutuantes) */}
      <div className="absolute -top-24 -right-16 w-[600px] h-[600px] rounded-full bg-[#FFCF78]/20 blur-[120px] pointer-events-none animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#E9D9B4]/30 blur-[100px] pointer-events-none animate-float-delayed"></div>

      <div className="container-custom relative z-10 h-full pt-24 sm:pt-28 md:pt-36 pb-8 md:pb-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        {/* Conteudo Esquerdo (Com animacao em cascata) */}
        <div className="space-y-6 md:space-y-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-black/10 rounded-full shadow-sm hero-animate delay-100">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">SaaS de Gestao Bubalina</span>
          </div>

          <h1 className="text-[3.2rem] sm:text-6xl md:text-[6.2rem] font-bold tracking-tighter text-[#43310B] leading-[0.95] hero-animate delay-200">
            Gestao inteligente<br />
            para gerar lucro<br />
            na <span className="font-cursive text-[#FFCF78] highlight-stroke">Bubalinocultura</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#404040]/80 font-normal max-w-3xl leading-relaxed hero-animate delay-300">
            Buffs e a plataforma de controle completa da producao leiteira e do manejo de bufalas. Oferecemos controle preciso de dados zootecnicos, sanitarios e reprodutivos para decisoes estrategicas reais.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 hero-animate delay-400">
            <Link href="/contato/fale-conosco" className="btn-mirror bg-[#FFCF78] hover:bg-[#FCA90F] text-[#43310B] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-3 group active:scale-95">
              Quero mais controle do meu rebanho
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/solucoes" className="text-sm font-bold text-[#43310B]/80 hover:text-[#43310B] transition-colors inline-flex items-center gap-2 group px-5 sm:px-7 py-3 sm:py-4 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-1 shadow-sm hover:shadow-md">
              Ver como evitar prejuizos no manejo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
