import React, { useState } from 'react';

const temasDaLigacao = [
  'Fluxo operacional completo: coleta mobile, API central em Nest.js e painel web para gestao.',
  'Uso de IA para alertas sanitarios e previsao produtiva com Random Forest Regressor.',
  'Estruturacao de dados zootecnicos, sanitarios, reprodutivos e produtivos para decisao baseada em evidencia.',
];

export default function LigamosParaVocePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      event.target.reset();
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-10 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCA90F]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Contato Comercial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Nós <span className="relative inline-block"><span className="relative z-10">ligamos para você</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-2xl mx-auto">
            Preencha seus dados e nossa equipe entra em contato para mostrar, com base tecnica, como aplicar a plataforma no seu manejo de campo e na gestao da fazenda.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <aside className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">Como funciona</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#FFCF78]/25 text-[#43310B] text-xs font-black">1</span>
                <p className="text-[#404040]/80 text-sm md:text-base font-medium leading-relaxed">Voce envia seus dados e objetivo produtivo no formulario ao lado.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#FFCF78]/25 text-[#43310B] text-xs font-black">2</span>
                <p className="text-[#404040]/80 text-sm md:text-base font-medium leading-relaxed">Nossa equipe apresenta o fluxo real de operacao: app mobile, API, base de dados e painel web.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#FFCF78]/25 text-[#43310B] text-xs font-black">3</span>
                <p className="text-[#404040]/80 text-sm md:text-base font-medium leading-relaxed">Definimos um plano de implantacao com indicadores, alertas e previsao para reduzir risco operacional.</p>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-black/10 bg-[#FDFBF7] px-5 py-4">
              <p className="text-xs font-black uppercase tracking-widest text-[#FCA90F] mb-3">Temas da ligacao</p>
              <ul className="space-y-3">
                {temasDaLigacao.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex w-2 h-2 rounded-full bg-[#FFCF78]/80"></span>
                    <span className="text-sm text-[#404040]/80 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-[#FFCF78]/35 bg-[#FFF8ED] px-5 py-4">
              <p className="text-sm md:text-base font-bold text-[#43310B] leading-relaxed">
                Atendimento humano especializado em bubalinocultura e tomada de decisao baseada em dados.
              </p>
            </div>
          </aside>

          <div className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-9 shadow-sm">
            {!isSubmitted && (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nome" className="block mb-2 text-sm font-bold text-[#43310B]">Nome completo</label>
                  <input id="nome" name="nome" type="text" required className="w-full rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#43310B] outline-none focus:ring-2 focus:ring-[#FFCF78] focus:border-[#FCA90F]" placeholder="Seu nome" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefone" className="block mb-2 text-sm font-bold text-[#43310B]">WhatsApp</label>
                    <input id="telefone" name="telefone" type="tel" required className="w-full rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#43310B] outline-none focus:ring-2 focus:ring-[#FFCF78] focus:border-[#FCA90F]" placeholder="(00) 00000-0000" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-[#43310B]">E-mail</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#43310B] outline-none focus:ring-2 focus:ring-[#FFCF78] focus:border-[#FCA90F]" placeholder="voce@fazenda.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cidade" className="block mb-2 text-sm font-bold text-[#43310B]">Cidade/Estado</label>
                    <input id="cidade" name="cidade" type="text" required className="w-full rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#43310B] outline-none focus:ring-2 focus:ring-[#FFCF78] focus:border-[#FCA90F]" placeholder="Ex.: Registro/SP" />
                  </div>

                  <div>
                    <label htmlFor="horario" className="block mb-2 text-sm font-bold text-[#43310B]">Melhor horário para ligar</label>
                    <select id="horario" name="horario" required className="w-full rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#43310B] outline-none focus:ring-2 focus:ring-[#FFCF78] focus:border-[#FCA90F]">
                      <option value="">Selecione</option>
                      <option value="manha">Manhã</option>
                      <option value="tarde">Tarde</option>
                      <option value="noite">Noite</option>
                      <option value="qualquer">Qualquer horário</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="observacoes" className="block mb-2 text-sm font-bold text-[#43310B]">Observações (opcional)</label>
                  <textarea id="observacoes" name="observacoes" rows={4} className="w-full rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm text-[#43310B] outline-none focus:ring-2 focus:ring-[#FFCF78] focus:border-[#FCA90F] resize-none" placeholder="Conte seu desafio em lactacao, reproducao, sanidade ou controle de dados."></textarea>
                </div>

                <label className="flex items-start gap-3 text-sm text-[#404040]/80 font-medium leading-relaxed">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-black/20 text-[#FCA90F] focus:ring-[#FFCF78]" />
                  Concordo em receber contato da equipe Buffs para atendimento comercial.
                </label>

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#43310B] hover:bg-black disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-[0.99]">
                  {isSubmitting ? 'Enviando...' : 'Quero receber uma ligação'}
                </button>
              </form>
            )}

            {isSubmitted && (
              <div className="text-center space-y-5 py-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#FFCF78]/30 text-[#43310B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#43310B]">Recebemos seus dados</h3>
                <p className="text-[#404040]/75 font-medium max-w-md mx-auto">
                  Obrigado! Em breve nossa equipe vai entrar em contato no horário informado.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="inline-flex bg-white border border-black/10 text-[#43310B] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FDFBF7] transition-colors">
                  Enviar outro contato
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
