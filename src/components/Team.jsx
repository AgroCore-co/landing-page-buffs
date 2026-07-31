import React, { useRef } from 'react';
import Image from 'next/image';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ease, dur, viewport, stagger, clipUp } from '@/lib/motion';

const MEMBERS = [
  {
    id: '01',
    name: 'Vinicius Souza Ramos',
    role: 'Mobile Developer',
    bio: 'Responsável pelo desenvolvimento do aplicativo mobile, garantindo uma experiência fluida e offline no campo.',
    image: '/vini4.png',
  },
  {
    id: '02',
    name: 'Paulo Cesar Pedro Candiani',
    role: 'Frontend Developer & UX/UI',
    bio: 'Desenvolve as interfaces web e cuida da experiência do usuário, unindo design e código para um produto intuitivo.',
    image: '/pc1.png',
  },
  {
    id: '03',
    name: 'João Pedro Kuzinor de Lima',
    role: 'Frontend Developer',
    bio: 'Constrói as interfaces e componentes visuais do projeto, transformando design em código funcional.',
    image: '/joaolima5.png',
  },
  {
    id: '04',
    name: 'João Pedro Dias Barreto',
    role: 'Backend Developer',
    bio: 'Responsável pela API, banco de dados e infraestrutura que conectam o app ao servidor com segurança e performance.',
    image: '/barreto3.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: dur.base, ease: ease.out } },
};

function MemberCard({ member }) {
  const ref = useRef(null);

  // Tilt seguindo o mouse. Os motion values vivem fora do estado do React,
  // então mover o mouse não dispara nenhum re-render.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 220, damping: 22, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], ['7deg', '-7deg']), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], ['-7deg', '7deg']), spring);

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  // O tilt escreve `transform` inline, então uma classe utilitária de translate
  // no hover seria sobrescrita — todo o movimento do card fica no motion style.
  return (
    <m.article
      ref={ref}
      variants={cardVariants}
      onPointerMove={(e) => e.pointerType === 'mouse' && handleMove(e)}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative w-full"
    >
      {/* Foto — revelação por clip-path em vez de fade+y */}
      <m.div
        variants={clipUp}
        className="relative overflow-hidden aspect-[3/4] bg-primary/10"
      >
        <Image
          src={member.image}
          alt={`Retrato de ${member.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 260px"
          className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-25 transition-opacity duration-500" />

        <span
          className="absolute top-4 right-4 text-text-light/50 text-2xl md:text-3xl font-black leading-none"
          aria-hidden="true"
        >
          {member.id}
        </span>

        <p className="absolute bottom-4 left-4 bg-primary-300 text-primary-900 text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1.5 shadow-lg">
          {member.role}
        </p>

        <div className="absolute inset-0 border-2 border-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </m.div>

      {/* Texto */}
      <div className="pt-5">
        <h3 className="text-text-light font-bold text-lg md:text-xl uppercase tracking-tight leading-tight">
          {member.name}
        </h3>
        <div className="w-8 h-[2px] bg-primary-glow my-3 group-hover:w-16 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        <p className="text-text-light/65 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </m.article>
  );
}

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative w-full py-24 md:py-32 bg-text-primary overflow-hidden font-sans flex flex-col items-center justify-center"
    >
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/10 blur-[100px] md:blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/[0.06] blur-[100px] md:blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-6 md:-bottom-12 left-1/2 -translate-x-1/2 opacity-[0.04] text-text-light select-none pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[22vw] md:text-[16vw] font-black tracking-tighter leading-none">
          TIME
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Cabeçalho */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: dur.base, ease: ease.out }}
          className="text-center mb-14 md:mb-20 flex flex-col items-center"
        >
          <span className="text-primary-on-dark text-[11px] md:text-xs font-black tracking-[0.3em] uppercase block mb-4">
            Quem faz acontecer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-light uppercase tracking-tighter leading-[0.95] max-w-4xl">
            Conheça a <span className="text-primary-glow">AgroCore</span>
          </h2>
          <div className="w-12 md:w-14 h-[3px] bg-primary-glow mt-6 md:mt-8" />
          <p className="mt-6 text-text-light/70 text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Somos quatro estudantes da Fatec Registro que transformaram uma ideia
            em um projeto real de tecnologia para o campo.
          </p>
        </m.div>

        {/* Cards.
            `flex-wrap justify-center` deixava cards órfãos numa última fila
            centralizada. Com quatro integrantes o grid fecha exato: 2 colunas
            no tablet, 4 numa única fila no desktop. */}
        <m.div
          variants={stagger(0.09, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {MEMBERS.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </m.div>

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: dur.base, delay: 0.2 }}
          className="text-center mt-14 md:mt-20 text-text-light/55 text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase"
        >
          Fatec Registro &nbsp;•&nbsp; Projeto Buffs
        </m.p>
      </div>
    </section>
  );
}
