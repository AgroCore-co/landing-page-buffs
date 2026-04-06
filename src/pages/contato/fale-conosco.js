import React from 'react';
import Link from 'next/link';

const canaisContato = [
  {
    titulo: 'WhatsApp Comercial',
    valor: '+55 (13) 99725-4676',
    descricao: 'Fale com a equipe para tirar duvidas rapidas.',
    href: 'https://wa.me/5513997254676',
  },
  {
    titulo: 'E-mail',
    valor: 'contato@buffs.com.br',
    descricao: 'Envie sua mensagem e retornamos em breve.',
    href: 'mailto:contato@buffs.com.br',
  },
  {
    titulo: 'Endereco',
    valor: 'Av. Clara Gianotti de Souza, 257',
    descricao: 'Registro - SP, 11900-000',
    href: 'https://maps.google.com/?q=Av.+Clara+Gianotti+de+Souza,+257,+Registro+-+SP',
  },
];

const redesSociais = [
  {
    nome: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    nome: 'Facebook',
    href: 'https://www.facebook.com/',
  },
  {
    nome: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    nome: 'YouTube',
    href: 'https://www.youtube.com/',
  },
];



export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#43310B] selection:bg-[#FFCF78] selection:text-[#43310B]">
      <section className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="absolute -top-16 right-1/4 w-96 h-96 bg-[#FFCF78]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9D9B4]/25 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCA90F]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">Fale Conosco</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Nossos canais de <span className="relative inline-block"><span className="relative z-10">atendimento</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFCF78] opacity-60 -z-10"></span></span>
          </h1>

          <p className="text-base md:text-lg text-[#404040]/75 font-medium max-w-3xl mx-auto">
            Escolha o canal que preferir para falar com o time Buffs. 
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="space-y-4">
            {canaisContato.map((canal) => (
              <a
                key={canal.titulo}
                href={canal.href}
                target="_blank"
                rel="noreferrer"
                className="block bg-white border border-black/5 rounded-[1.6rem] p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#404040]/70 mb-2">{canal.titulo}</p>
                <p className="text-xl md:text-2xl font-bold text-[#43310B] mb-2 break-words">{canal.valor}</p>
                <p className="text-sm text-[#404040]/75 font-medium">{canal.descricao}</p>
              </a>
            ))}
          </div>

          <aside className="bg-white border border-black/5 rounded-[2rem] p-7 md:p-8 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Horario de atendimento</h2>
              <ul className="space-y-3 text-sm md:text-base text-[#404040]/80 font-medium">
                <li className="flex items-center justify-between gap-4 border-b border-black/5 pb-2">
                  <span>Segunda a Sexta</span>
                  <span className="font-bold text-[#43310B]">08:00 as 18:00</span>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-black/5 pb-2">
                  <span>Sabado</span>
                  <span className="font-bold text-[#43310B]">08:00 as 12:00</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Domingo</span>
                  <span className="font-bold text-[#43310B]">Plantao via WhatsApp</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Redes sociais</h3>
              <div className="grid grid-cols-2 gap-3">
                {redesSociais.map((rede) => (
                  <a
                    key={rede.nome}
                    href={rede.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-[#FDFBF7] px-4 py-3 text-sm font-bold text-[#43310B] text-center hover:bg-[#FFF8ED] hover:border-[#FFCF78]/40 transition-colors"
                  >
                    {rede.nome}
                  </a>
                ))}
              </div>
            </div>


            <div className="rounded-2xl border border-[#FFCF78]/35 bg-[#FFF8ED] px-5 py-4">
              <p className="text-sm md:text-base font-bold text-[#43310B] leading-relaxed">
                Prefere que a gente te ligue? Preencha seus dados e explicamos o funcionamento tecnico da plataforma para o seu cenario.
              </p>
              <Link
                href="/contato/ligamos-para-voce"
                className="inline-flex mt-4 bg-[#43310B] hover:bg-black text-white px-5 py-3 rounded-full text-sm font-bold transition-colors"
              >
                Quero receber uma ligacao
              </Link>
            </div>
          </aside>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 mt-8">
          <div className="rounded-[1.6rem] border border-black/10 bg-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm md:text-base text-[#404040]/80 font-medium">
              Se quiser respostas objetivas sobre fluxo operacional, IA e arquitetura da solucao, acesse nossa central de FAQ.
            </p>
            <Link href="/institucional/duvidas-frequentes" className="inline-flex justify-center bg-[#FFCF78] hover:bg-[#FCA90F] text-[#43310B] px-5 py-3 rounded-full text-sm font-bold transition-colors">
              Ir para Duvidas Frequentes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
