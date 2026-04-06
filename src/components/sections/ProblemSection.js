export default function ProblemSection() {
  return (
    <section id="solucoes" className="pt-20 pb-12 md:pt-24 md:pb-16 bg-white/40 backdrop-blur-sm border-t border-black/5">
      <div className="container-custom reveal-on-scroll">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43310B] leading-[1.1]">
              Planilhas de Excel nao<br />
              comunicam <span className="italic text-[#FCA90F]">cio</span> ou <span className="italic text-[#FCA90F]">doencas</span>.
            </h2>
            <p className="text-lg text-[#404040]/70 font-normal leading-relaxed">
              Anotar dados que se perdem gera prejuizo. Nossa plataforma foi desenhada para oferecer um controle rigoroso das medias semanais, mensais e anuais, auxiliando o proprietario na gestao de producao e rentabilidade.
            </p>
            <div className="bg-[#FFF8ED] border border-[#FFCF78]/30 rounded-2xl px-5 py-4">
              <p className="text-sm md:text-base font-bold text-[#43310B] leading-relaxed">
                Mais controle reprodutivo = mais prenhez = mais producao.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-[#FFCF78]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">Decisoes Estrategicas</p>
                  <p className="text-[#404040]/60 text-sm">Transforme numeros isolados em insights poderosos para sua propriedade.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-[#FFCF78]/20 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FCA90F]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="font-bold text-[#43310B] text-lg group-hover:text-[#FCA90F] transition-colors">Medias em Tempo Real</p>
                  <p className="text-[#404040]/60 text-sm">Acompanhe a evolucao da producao de leite com dashboards intuitivos.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#5E4B28] to-[#7A6640] rounded-[2.5rem] p-8 md:p-12 text-[#FFF8ED] space-y-8 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCF78]/10 rounded-full blur-3xl animate-float"></div>
            <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-[10px] uppercase font-bold tracking-widest text-[#FFCF78]">Tecnologia Especializada</div>
            <h3 className="text-3xl font-bold tracking-tight leading-tight italic font-cursive">&quot;Onde os dados encontram o curral&quot;</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <span className="text-4xl font-extrabold text-[#FFCF78]">01</span>
                <p className="text-lg text-[#FFF8ED] leading-snug font-medium">Calculo automatico de taxa de concepcao e peso ao desmame.</p>
              </li>
              <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <span className="text-4xl font-extrabold text-[#FFCF78]">02</span>
                <p className="text-lg text-[#FFF8ED] leading-snug font-medium">Monitoramento reprodutivo completo das bufalas.</p>
              </li>
              <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                <span className="text-4xl font-extrabold text-[#FFCF78]">03</span>
                <p className="text-lg text-[#FFF8ED] leading-snug font-medium">Controle sanitario agil para medidas preventivas rapidas.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
