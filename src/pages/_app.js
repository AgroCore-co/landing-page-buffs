import { useEffect } from "react";
import { LazyMotion, MotionConfig, domMax } from "framer-motion";
import { initSmoothScroll } from "@/lib/smoothScroll";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => initSmoothScroll(), []);

  return (
    // `domMax` em vez do bundle completo: carrega as features sob demanda e
    // inclui drag (carrossel de vivencias) e layout animations (underline da
    // navbar). Por isso os componentes usam `m.*` no lugar de `motion.*`.
    <LazyMotion features={domMax}>
      {/* Respeita prefers-reduced-motion em todo o Framer Motion de uma vez. */}
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </LazyMotion>
  );
}
