import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="py-12 md:py-20 relative px-4 border-t border-black/5">
      <div className="container-custom">
        <div className="bg-[#FFF8ED] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-[#FFCF78]/20 max-w-6xl mx-auto hover:shadow-xl transition-shadow duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCF78]/20 rounded-full blur-3xl pointer-events-none animate-float"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFCF78]/20 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#43310B] leading-[1.1]">
              Quem controla os <span className="highlight-stroke">dados</span>,<br /> controla o resultado.
            </h2>
            <p className="text-2xl md:text-3xl text-[#43310B]/80 font-bold font-cursive max-w-2xl mx-auto">
              Quem controla o resultado, aumenta o lucro.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href="/contato/fale-conosco" className="w-full sm:w-auto bg-[#43310B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors active:scale-95 text-center">
                Quero melhorar minha producao
              </Link>
              <Link href="/solucoes" className="w-full sm:w-auto bg-white text-[#43310B] border border-black/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-black/5 transition-colors active:scale-95 text-center">
                Ver como evitar prejuizos no manejo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
