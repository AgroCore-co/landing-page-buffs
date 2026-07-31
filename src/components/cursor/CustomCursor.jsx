import React, { useEffect, useState } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/motion';

const INTERACTIVE = 'a, button, [role="button"], summary';
const TEXT_FIELD = 'input, textarea, select, [contenteditable="true"]';

export default function CustomCursor() {
  // Antes o componente montava sempre e registrava listeners de mousemove
  // mesmo em telas de toque. Agora só existe onde faz sentido.
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('default'); // 'default' | 'interactive' | 'text'

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 26, stiffness: 220, mass: 0.35 });
  const ringY = useSpring(mouseY, { damping: 26, stiffness: 220, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(fine.matches && !prefersReducedMotion());
    update();
    fine.addEventListener('change', update);
    return () => fine.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onOver = (event) => {
      const target = event.target;
      if (!target?.closest) return;
      if (target.closest(TEXT_FIELD)) setMode('text');
      else if (target.closest(INTERACTIVE)) setMode('interactive');
      else setMode('default');
    };

    // O cursor some quando o ponteiro sai da janela, senão ele fica congelado
    // na borda enquanto o usuário está em outra aba.
    const onLeave = () => mouseX.set(-100);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* `cursor: none` só onde há um substituto visual. Campos de texto
          mantêm o caret nativo — sem ele não dá para posicionar a digitação. */}
      <style jsx global>{`
        @media (pointer: fine) {
          body,
          a,
          button,
          [role='button'] {
            cursor: none;
          }
          input,
          textarea,
          select,
          [contenteditable='true'] {
            cursor: auto;
          }
        }
      `}</style>

      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        aria-hidden="true"
      >
        {/* Ponto central — segue o mouse sem spring, para não "atrasar". */}
        <m.div
          style={{ x: mouseX, y: mouseY }}
          animate={{ opacity: mode === 'text' ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="fixed top-[-4px] left-[-4px] w-2 h-2 bg-white rounded-full"
        />

        {/* Anel externo — com spring, cria o rastro. */}
        <m.div
          style={{ x: ringX, y: ringY }}
          animate={{
            scale: mode === 'interactive' ? 2.4 : mode === 'text' ? 0.4 : 1,
            opacity: mode === 'text' ? 0 : 1,
            backgroundColor:
              mode === 'interactive' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          className="fixed top-[-20px] left-[-20px] w-10 h-10 border border-white/80 rounded-full"
        />
      </div>
    </>
  );
}
