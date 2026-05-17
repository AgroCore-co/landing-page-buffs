import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  // A mesma curva de animação premium utilizada no restante do projeto
  const easePremium = [0.76, 0, 0.24, 1];

  const faqs = [
    {
      question: "Quem são os integrantes da AgroCore?",
      answer: "A AgroCore é formada por cinco estudantes da Fatec Registro, cada um responsável por uma frente do projeto: liderança, back-end, front-end, design e análise de dados. Você conhece cada um deles na seção Equipe."
    },
    {
      question: "Onde o projeto foi desenvolvido?",
      answer: "Todo o projeto nasceu e foi desenvolvido na Fatec Registro, como trabalho do grupo, unindo o aprendizado em sala de aula à observação direta dos desafios reais do campo."
    },
    {
      question: "O Buffs é um produto comercial?",
      answer: "O Buffs é, antes de tudo, um projeto acadêmico desenvolvido pela equipe AgroCore. Ele demonstra na prática as competências técnicas e a capacidade de trabalho em equipe de cada integrante."
    },
    {
      question: "Como posso falar com o time?",
      answer: "Use a seção de contato no final da página. O grupo está aberto a dúvidas, trocas de ideia, parcerias e novas oportunidades."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-20 md:py-32 bg-background flex items-center justify-center font-sans px-4 sm:px-6">
      <div className="w-full max-w-4xl relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter">
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
                className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary/15"
              />

              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-text-primary group-hover:text-primary'}`}>
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute w-4 h-[2px] bg-text-primary transition-all duration-300 ${activeIndex === index ? 'bg-primary' : 'group-hover:bg-primary'}`}></span>
                  <span className={`absolute h-4 w-[2px] bg-text-primary transition-all duration-300 ${activeIndex === index ? 'rotate-90 bg-primary opacity-0' : 'group-hover:bg-primary'}`}></span>
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
                    <p className="pb-6 text-text-primary/70 text-sm md:text-base leading-relaxed pr-8">
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