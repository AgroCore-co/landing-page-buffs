import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform } from 'framer-motion';
import { ease, dur, viewport, fadeUp, stagger } from '@/lib/motion';

const WHATSAPP_NUMBER = '5513996727279';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FIELD_CLASS =
  'w-full px-5 py-4 md:px-6 bg-white/10 border text-white placeholder:text-white/60 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow focus-visible:ring-offset-0 ' +
  'focus:bg-white/20 transition-colors duration-300 rounded-sm ' +
  'text-sm md:text-base disabled:opacity-50';

export default function Contact() {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  // Honeypot: bots preenchem tudo. Humanos não veem este campo.
  const [trap, setTrap] = useState('');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '0%']);

  const validate = () => {
    const next = {};
    if (formData.name.trim().length < 2) next.name = 'Informe seu nome.';
    if (!EMAIL_RE.test(formData.email.trim())) next.email = 'Informe um e-mail válido.';
    if (formData.message.trim().length < 10)
      next.message = 'Escreva pelo menos 10 caracteres.';
    return next;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro do campo assim que o usuário começa a corrigir.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trap) return;

    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('submitting');

    const text =
      'Olá! Conheci a AgroCore pelo site e gostaria de falar com a equipe.\n\n' +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Mensagem:* ${formData.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // A janela é aberta no mesmo tick do submit; adiar com setTimeout fazia o
    // bloqueador de pop-up do browser barrar o redirecionamento.
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const fieldBorder = (field) =>
    errors[field] ? 'border-error-light' : 'border-white/25 focus:border-primary-glow';

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-24"
    >
      <m.div style={{ y: bgY }} className="absolute inset-0 h-[112%] z-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/70 md:bg-text-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 md:from-primary/40 via-text-primary/80 to-text-primary" />
      </m.div>

      <m.div
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative z-10 w-full max-w-4xl px-4 sm:px-6 flex flex-col items-center text-center"
      >
        <m.div variants={fadeUp} className="mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tighter leading-[1.1] md:leading-none mb-4 md:mb-6">
            Fale com a equipe AgroCore
          </h2>
          <p className="text-primary-on-dark text-xs sm:text-sm md:text-lg font-light tracking-widest uppercase px-2">
            Quer saber mais sobre o grupo ou sobre o projeto? Mande uma mensagem
          </p>
        </m.div>

        <m.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-2xl space-y-3 md:space-y-4 text-left"
        >
          {/* Honeypot — fora da ordem de tabulação e invisível a leitores. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
            className="absolute left-[-9999px] w-px h-px opacity-0"
          />

          <div>
            <label htmlFor="contact-name" className="sr-only">Nome</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Nome"
              autoComplete="name"
              disabled={status === 'submitting'}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={`${FIELD_CLASS} ${fieldBorder('name')}`}
              onChange={handleChange}
            />
            {errors.name && (
              <p id="contact-name-error" className="mt-1.5 text-[13px] text-error-light font-medium">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">E-mail</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Seu melhor e-mail"
              autoComplete="email"
              disabled={status === 'submitting'}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={`${FIELD_CLASS} ${fieldBorder('email')}`}
              onChange={handleChange}
            />
            {errors.email && (
              <p id="contact-email-error" className="mt-1.5 text-[13px] text-error-light font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              placeholder="Mensagem"
              rows={4}
              disabled={status === 'submitting'}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`${FIELD_CLASS} ${fieldBorder('message')} resize-none`}
              onChange={handleChange}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-1.5 text-[13px] text-error-light font-medium">
                {errors.message}
              </p>
            )}
          </div>

          <div className="pt-4 md:pt-6">
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`group relative w-full overflow-hidden border-2 py-4 md:py-5 text-[11px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-300 ${
                status === 'success'
                  ? 'border-[#25D366] text-[#25D366] bg-white/5'
                  : 'border-primary-glow text-primary-on-dark hover:text-primary-900'
              }`}
            >
              <span className="relative z-10">
                {status === 'success' ? 'Redirecionando!' : 'Falar com a equipe no WhatsApp'}
              </span>
              {status !== 'success' && (
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-primary-300 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
              )}
            </button>
          </div>

          {/* Status anunciado a leitores de tela sem roubar o foco. */}
          <p role="status" aria-live="polite" className="sr-only">
            {status === 'success' ? 'Abrindo o WhatsApp em uma nova aba.' : ''}
            {status === 'error' ? 'O formulário contém erros. Revise os campos.' : ''}
          </p>
        </m.form>

        <m.div
          variants={fadeUp}
          className="mt-8 md:mt-12 text-white/75 text-xs md:text-sm tracking-widest uppercase pb-12 md:pb-0 text-center"
        >
          <p>
            Ou entre em contato por telefone:{' '}
            <br className="block sm:hidden" />
            <a
              href="tel:+5513996727279"
              className="text-primary-on-dark font-bold mt-1 sm:mt-0 inline-block hover:underline underline-offset-4"
            >
              (13) 99672-7279
            </a>
          </p>
        </m.div>
      </m.div>

      <m.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: dur.fast, ease: ease.premium }}
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#128C4B] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </m.a>
    </section>
  );
}
