/**
 * Tokens de movimento compartilhados.
 *
 * Antes cada componente redeclarava `easePremium` e escolhia a propria
 * distancia/duracao, o que deixava o site com 8 ritmos diferentes. Aqui a
 * escala e unica: deslocamentos curtos (16-24px) e duracoes na casa de 0.6-0.9s
 * leem como "caro"; deslocamentos de 40-50px leem como template.
 */

export const ease = {
  /** Curva assinatura do projeto: entra devagar, sai devagar. */
  premium: [0.76, 0, 0.24, 1],
  /** Desaceleracao suave, boa para entradas de conteudo. */
  out: [0.22, 1, 0.36, 1],
  /** Para saidas rapidas. */
  in: [0.64, 0, 0.78, 0],
};

/** Mesmas curvas em string, para uso em CSS / GSAP. */
export const easeCss = {
  premium: "cubic-bezier(0.76, 0, 0.24, 1)",
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
};

export const dur = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
};

/** Viewport padrao: dispara um pouco antes do elemento entrar, uma vez so. */
export const viewport = { once: true, margin: "-12% 0px -12% 0px" };

/* --- Variants reutilizaveis ------------------------------------------- */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: ease.out },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: dur.base, ease: ease.out } },
};

/** Entrada lateral. `dir` em pixels: negativo = vem da esquerda. */
export const fadeSide = (dir = -24) => ({
  hidden: { opacity: 0, x: dir },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: dur.slow, ease: ease.premium },
  },
});

/** Revela por mascara: o filho sobe de dentro de um pai com overflow hidden. */
export const maskUp = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: ease.premium },
  },
};

/** Revela por clip-path, de baixo para cima. Bom para imagens. */
export const clipUp = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.9, ease: ease.premium },
  },
};

/** Linha/regua que cresce a partir da esquerda. Requer `originX: 0`. */
export const growX = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: dur.base, ease: ease.premium },
  },
};

/** Container de stagger. Stagger curto (0.08) evita a sensacao de fila lenta. */
export const stagger = (each = 0.08, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: each, delayChildren: delay } },
});

/* --- Helpers ----------------------------------------------------------- */

/** true quando o usuario pediu movimento reduzido (seguro em SSR). */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Quebra um texto em palavras para revelacao por mascara palavra a palavra. */
export function splitWords(text) {
  return text.split(" ").filter(Boolean);
}
