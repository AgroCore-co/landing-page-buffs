import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  // A mesma curva de animação premium utilizada no restante do projeto
  const easePremium = [0.76, 0, 0.24, 1];

  const faqs = [
    {
      question: "O aplicativo funciona no momento da coleta no curral?",
      answer: "Sim. O Buffs possui um aplicativo mobile desenhado especificamente para funcionários e veterinários. Ele possui uma interface enxuta que garante agilidade no lançamento de dados de manejo e sanidade diretamente do campo."
    },
    {
      question: "Como a Inteligência Artificial melhora a minha produção?",
      answer: "O nosso sistema possui dois motores de IA. Utilizamos um modelo preditivo avançado (Random Forest Regressor) para prever a produção individual de leite de cada fêmea com base no histórico zootécnico e genético. Além disso, utilizamos IA generativa para analisar sintomas e classificar automaticamente a urgência de alertas, como suspeitas de mastite."
    },
    {
      question: "Posso utilizar o Buffs para gerenciar gado bovino?",
      answer: "Não. A biologia é diferente. Softwares genéricos consideram uma gestação de 9 meses, o que gera falsos alertas de atraso na bubalinocultura. O Buffs é o único sistema calibrado com IA exclusiva para o ciclo reprodutivo de 10 meses das búfalas."
    },
    {
      question: "Quais informações consigo centralizar na plataforma?",
      answer: "Através do painel Web para gestores, você centraliza a árvore genealógica, o prontuário sanitário individual (vacinas e tratamentos), o desempenho da lactação, o controle reprodutivo e a distribuição de animais por piquetes."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-20 md:py-32 bg-[#fafafa] flex items-center justify-center font-sans px-4 sm:px-6">
      <div className="w-full max-w-4xl relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#ffcf78] text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#43310b] uppercase tracking-tighter">
            Tudo o que precisa saber.
          </h2>
        </div>

        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: easePremium }}
              viewport={{ once: true, margin: "-50px" }}
              // Removido o border-b estático para dar lugar à linha animada
              className="relative overflow-hidden"
            >
              {/* Linha Animada na Base */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: easePremium }}
                style={{ originX: 0 }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-[#43310b]/15"
              />

              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-[#ffcf78]' : 'text-[#43310b] group-hover:text-[#ffcf78]'}`}>
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute w-4 h-[2px] bg-[#43310b] transition-all duration-300 ${activeIndex === index ? 'bg-[#ffcf78]' : 'group-hover:bg-[#ffcf78]'}`}></span>
                  <span className={`absolute h-4 w-[2px] bg-[#43310b] transition-all duration-300 ${activeIndex === index ? 'rotate-90 bg-[#ffcf78] opacity-0' : 'group-hover:bg-[#ffcf78]'}`}></span>
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: easePremium }}
                  >
                    <p className="pb-6 text-[#43310b]/70 text-sm md:text-base leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}