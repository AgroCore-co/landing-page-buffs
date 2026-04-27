import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const isClickable = e.target.closest('button, a, input, textarea, [role="button"]');
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}</style>

      {/* O container usa mix-blend-difference para inverter as cores automaticamente */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference">
        
        {/* Ponto Central (Dot) 
            Usamos branco puro aqui; o mix-blend-difference fará com que:
            - Sobre fundo branco (#FFFFFF) -> Ele fique preto/marrom escuro
            - Sobre fundo marrom (#43310B) -> Ele fique claro/branco
        */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="fixed top-[-4px] left-[-4px] w-2 h-2 bg-white rounded-full"
        />

        {/* Círculo Externo (Ring) */}
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          animate={{
            scale: isHovered ? 2.5 : 1,
            // Mantemos borda branca para a inversão ser perfeita
            borderColor: "rgba(255, 255, 255, 0.8)",
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent",
          }}
          className="fixed top-[-20px] left-[-20px] w-10 h-10 border rounded-full"
        />
      </div>
    </>
  );
}