import React, { useId, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ease, dur, viewport } from '@/lib/motion';

const FAQS = [
  {
    question: 'Quem são os integrantes da AgroCore?',
    answer:
      'A AgroCore é formada por quatro estudantes da Fatec Registro, cada um responsável por uma frente do projeto: mobile, front-end, design e back-end. Você conhece cada um deles na seção Equipe.',
  },
  {
    question: 'Onde o projeto foi desenvolvido?',
    answer:
      'Todo o projeto nasceu e foi desenvolvido na Fatec Registro, como trabalho do grupo, unindo o aprendizado em sala de aula à observação direta dos desafios reais do campo.',
  },
  {
    question: 'O Buffs é um produto comercial?',
    answer:
      'O Buffs é, antes de tudo, um projeto acadêmico desenvolvido pela equipe AgroCore. Ele demonstra na prática as competências técnicas e a capacidade de trabalho em equipe de cada integrante.',
  },
  {
    question: 'Como posso falar com o time?',
    answer:
      'Use a seção de contato no final da página. O grupo está aberto a dúvidas, trocas de ideia, parcerias e novas oportunidades.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const uid = useId();

  const toggle = (index) => setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section
      id="faq"
      className="relative w-full py-20 md:py-28 bg-background flex items-center justify-center font-sans px-4 sm:px-6"
    >
      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-strong text-[11px] md:text-xs font-black tracking-[0.3em] uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter">
            Tudo o que precisa saber.
          </h2>
        </div>

        <div className="space-y-2 md:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            const panelId = `${uid}-panel-${index}`;
            const buttonId = `${uid}-button-${index}`;

            return (
              <m.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: dur.base, ease: ease.out }}
                viewport={viewport}
                className="relative"
              >
                {/* Linha animada na base */}
                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.06, ease: ease.premium }}
                  style={{ originX: 0 }}
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary/20"
                  aria-hidden="true"
                />

                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span
                      className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                        isOpen
                          ? 'text-primary-strong'
                          : 'text-text-primary group-hover:text-primary-strong'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Ícone +/− : a barra vertical some ao abrir, virando um
                        traço. Antes ela girava e sumia ao mesmo tempo, o que
                        lia como glitch. */}
                    <span
                      className="ml-6 shrink-0 relative w-6 h-6 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span
                        className={`absolute w-4 h-[2px] transition-colors duration-300 ${
                          isOpen ? 'bg-primary-strong' : 'bg-text-primary group-hover:bg-primary-strong'
                        }`}
                      />
                      <span
                        className={`absolute h-4 w-[2px] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                          isOpen
                            ? 'scale-y-0 bg-primary-strong'
                            : 'scale-y-100 bg-text-primary group-hover:bg-primary-strong'
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      // Opacidade sai rápido e entra devagar: animar os dois no
                      // mesmo tempo fazia o texto piscar durante o colapso.
                      transition={{
                        height: { duration: 0.4, ease: ease.premium },
                        opacity: { duration: isOpen ? 0.35 : 0.12, delay: isOpen ? 0.08 : 0 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-text-primary/75 text-sm md:text-base leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
