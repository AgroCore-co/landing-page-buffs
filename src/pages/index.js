import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { m, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Barra de progresso do scroll. O `useSpring` tira o degrau de 1px por
  // frame que o valor cru produz e deixa o traço fluido.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans selection:bg-primary-300 selection:text-primary-900`}>
      <Head>
        <title>AgroCore | Tecnologia Inteligente para o Agro</title>
        <meta name="description" content="AgroCore é uma plataforma mobile desenvolvida para otimizar o manejo pecuário, prever produção leiteira e identificar gargalos operacionais diretamente do curral." />
        <meta name="keywords" content="agrocore, tecnologia agro, manejo pecuário, produção leiteira, app agrícola, gestão rural, pecuária de precisão" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/agrocore-logo.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://landing-page-buffs.vercel.app/" />
        <meta name="google-site-verification" content="MneZowdnImCcQWaKCeSW78IWl_tNx6JfxKAOdgcEQyQ" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://landing-page-buffs.vercel.app/" />
        <meta property="og:title" content="AgroCore | Tecnologia Inteligente para o Agro" />
        <meta property="og:description" content="Plataforma mobile para otimização do manejo pecuário e previsão de produção leiteira." />
        <meta property="og:image" content="https://landing-page-buffs.vercel.app/image1-slide.png" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AgroCore | Tecnologia Inteligente para o Agro" />
        <meta name="twitter:description" content="Plataforma mobile para otimização do manejo pecuário e previsão de produção leiteira." />
        <meta name="twitter:image" content="https://landing-page-buffs.vercel.app/image1-slide.png" />

        {/* JSON-LD - Dados estruturados para o Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "#organization",
                  name: "AgroCore",
                  description: "Plataforma mobile para otimização do manejo pecuário e previsão de produção leiteira.",
                  url: "https://landing-page-buffs.vercel.app/",
                  logo: "https://landing-page-buffs.vercel.app/agrocore-logo.svg",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": "#website",
                  name: "AgroCore",
                  url: "https://landing-page-buffs.vercel.app/",
                  inLanguage: "pt-BR",
                  publisher: { "@id": "#organization" },
                },
                {
                  "@type": "WebPage",
                  "@id": "#webpage",
                  url: "https://landing-page-buffs.vercel.app/",
                  name: "AgroCore | Tecnologia Inteligente para o Agro",
                  description: "AgroCore é uma plataforma mobile desenvolvida para otimizar o manejo pecuário, prever produção leiteira e identificar gargalos operacionais diretamente do curral.",
                  inLanguage: "pt-BR",
                  isPartOf: { "@id": "#website" },
                },
              ],
            }),
          }}
        />
      </Head>
      
      {/* Atalho de teclado: primeiro Tab da página pula a navegação. */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-background focus:text-text-primary focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* --- NAVBAR FIXA (Controla o fundo dinâmico e âncoras) --- */}
      <Navbar />

      {/* --- CURSOR PREMIUM (Inverte cor em fundos escuros) --- */}
      <CustomCursor />

      {/* --- BARRA DE PROGRESSO (Topo do ecrã) --- */}
      <m.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[100] shadow-[0_0_12px_rgba(76,175,80,0.6)]"
        style={{ scaleX: progress }}
      />

      <main id="conteudo" className="min-h-screen bg-background">
        <Hero />
        
        {/* História do grupo */}
        <About />

        {/* O Projeto: única seção sobre o que o grupo desenvolveu */}
        <Features />

        {/* Vivência Real: Galeria com Swipe Mobile */}
        <Testimonials />

        {/* Equipe: Os 5 estudantes da AgroCore */}
        <Team />

        {/* Dúvidas Técnicas: FAQ Baseado no Artigo */}
        <FAQ />
        
        {/* Conversão: Solicitar Acesso Beta */}
        <Contact />
        
        {/* Rodapé e Links Institucionais */}
        <Footer />
      </main>
    </div>
  );
}