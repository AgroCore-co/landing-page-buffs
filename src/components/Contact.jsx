import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const easePremium = [0.76, 0, 0.24, 1];

  const [formData, setFormData] = useState({
    name: '',
    email: '', // Alterado de phone para email
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // 1. Formatação da mensagem para o WhatsApp incluindo o E-mail
    const whatsappNumber = "5513996727279";
    const text = `Olá! Conheci a AgroCore pelo site e gostaria de falar com a equipe.\n\n` +
                 `*Nome:* ${formData.name}\n` +
                 `*E-mail:* ${formData.email}\n` + // Alterado aqui
                 `*Mensagem:* ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // 2. Simulação de processamento e redirecionamento
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpar formulário
      
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easePremium }
    }
  };

  return (
    <section id="contato" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop" 
          alt="Campo ao pôr do sol" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/70 md:bg-text-primary/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 md:from-primary/40 via-text-primary/80 to-text-primary"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl px-4 sm:px-6 flex flex-col items-center text-center"
      >
        
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tighter leading-[1.1] md:leading-none mb-4 md:mb-6">
            Fale com a equipe AgroCore
          </h2>
          <p className="text-primary text-xs sm:text-sm md:text-lg font-light tracking-widest uppercase opacity-90 px-2">
            Quer saber mais sobre o grupo ou sobre o projeto? Mande uma mensagem
          </p>
        </motion.div>

        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-3 md:space-y-4"
        >
          <div className="space-y-3 md:space-y-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              placeholder="Nome"
              required
              disabled={status === 'submitting'}
              className="w-full px-5 py-4 md:px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300 rounded-sm text-sm md:text-base disabled:opacity-50"
              onChange={handleChange}
            />
            
            {/* Campo de E-mail no lugar do Telefone */}
            <input 
              type="email" 
              name="email"
              value={formData.email}
              placeholder="Seu melhor e-mail"
              required
              disabled={status === 'submitting'}
              className="w-full px-5 py-4 md:px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300 rounded-sm text-sm md:text-base disabled:opacity-50"
              onChange={handleChange}
            />

            <textarea 
              name="message"
              value={formData.message}
              placeholder="Mensagem"
              rows="4"
              disabled={status === 'submitting'}
              className="w-full px-5 py-4 md:px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300 rounded-sm resize-none text-sm md:text-base disabled:opacity-50"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="pt-4 md:pt-6">
            <button 
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`group relative w-full overflow-hidden border-2 py-4 md:py-5 text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-300 ${
                status === 'success' 
                  ? 'border-[#25D366] text-[#25D366] bg-white/5' 
                  : 'border-primary text-primary hover:text-text-primary'
              }`}
            >
              <span className="relative z-10">
                {status === 'idle' && 'Falar com a equipe no WhatsApp'}
                {status === 'submitting' && 'Iniciando Conversa...'}
                {status === 'success' && 'Redirecionando!'}
              </span>
              
              {status === 'idle' && (
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"></div>
              )}
            </button>
          </div>
        </motion.form>

        <motion.div variants={itemVariants} className="mt-8 md:mt-12 text-white/60 text-[10px] sm:text-xs md:text-sm tracking-widest uppercase pb-12 md:pb-0">
          <p>Ou entre em contacto por telefone: <br className="block sm:hidden" /><span className="text-primary font-bold mt-1 sm:mt-0 inline-block">(13) 9967-27279</span></p>
        </motion.div>

      </motion.div>

      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        href="https://wa.me/5513996727279" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

    </section>
  );
}