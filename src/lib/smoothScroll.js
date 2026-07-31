import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { prefersReducedMotion } from "./motion";

let lenis = null;

/** Instancia ativa do Lenis, ou null (SSR / movimento reduzido). */
export function getLenis() {
  return lenis;
}

/** Altura da navbar fixa, usada como offset das ancoras. */
const NAV_OFFSET = -80;

/**
 * Liga scroll suave (Lenis) e GSAP ScrollTrigger no mesmo loop de RAF.
 *
 * Duas animacoes de scroll concorrentes causam jitter, entao:
 *  - `scroll-behavior: smooth` do CSS fica desligado (ver globals.css)
 *  - o ticker do GSAP dirige o `raf` do Lenis (um loop so, nao dois)
 *  - cada evento de scroll do Lenis chama `ScrollTrigger.update`
 *
 * Com `prefers-reduced-motion` nada disso e instanciado: o CSS reativa o
 * scroll suave nativo e as ancoras voltam ao comportamento padrao do browser.
 *
 * @returns {() => void} funcao de limpeza
 */
export function initSmoothScroll() {
  if (typeof window === "undefined") return () => {};

  gsap.registerPlugin(ScrollTrigger);

  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // No mobile o scroll nativo e melhor e nao briga com o `drag` do
    // carrossel de vivencias.
    syncTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  // Ancoras (#sobre, #equipe, ...). Sem isto o clique daria um salto seco,
  // ja que o smooth nativo esta desligado.
  const onClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const anchor = event.target.closest?.('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    if (href === "#") {
      event.preventDefault();
      lenis.scrollTo(0);
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, { offset: NAV_OFFSET });
    // Mantem o foco de teclado alinhado com o destino visual.
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };

  document.addEventListener("click", onClick);

  // Videos e imagens que carregam depois mudam a altura da pagina.
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);

  return () => {
    document.removeEventListener("click", onClick);
    window.removeEventListener("load", onLoad);
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}
