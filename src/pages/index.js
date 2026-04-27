import { Geist, Geist_Mono } from "next/font/google";
import { motion, useScroll } from "framer-motion"; 
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Product1 from "@/components/Product1";
import Product2 from "@/components/Product2";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
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
  // Configuração da barra de progresso baseada no scroll vertical
  const { scrollYProgress } = useScroll();

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans selection:bg-[#ffcf78] selection:text-[#43310b]`}>
      
      {/* --- NAVBAR FIXA (Controla o fundo dinâmico e âncoras) --- */}
      <Navbar />

      {/* --- CURSOR PREMIUM (Inverte cor em fundos escuros) --- */}
      <CustomCursor />

      {/* --- BARRA DE PROGRESSO (Topo do ecrã) --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#ffcf78] origin-left z-[100] shadow-[0_0_12px_rgba(255,207,120,0.6)]"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="min-h-screen bg-[#fafafa]">
        {/* Lembre-se de remover a <nav> interna do Hero.jsx para não duplicar */}
        <Hero />
        
        {/* História Real: "Botas na Terra" */}
        <About />
        
        {/* Pilares: Tecnologia Preditiva */}
        <Features />
        
        {/* Soluções: Fomento e Genealogia */}
        <Product1 />
        <Product2 />
        
        {/* Diferencial: O Ciclo de 300 dias */}
        <Mission />
        
        {/* Vivência Real: Galeria com Swipe Mobile */}
        <Testimonials />
        
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