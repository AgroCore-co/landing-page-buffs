import "@/styles/globals.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/sections/WhatsAppButton';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const isHomePage = router.pathname === '/';

  return (
    <>
      <style jsx global>{`
        .container-custom {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 16px;
        }

        @media (min-width: 640px) {
          .container-custom {
            padding: 0 24px;
          }
        }

        @media (min-width: 1024px) {
          .container-custom {
            padding: 0 40px;
          }
        }
      `}</style>

      <Header
        isHeaderScrolled={isHeaderScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <div className={isHomePage ? '' : 'min-h-screen bg-[#FDFBF7] pt-20 md:pt-24'}>
        <Component {...pageProps} />
        <FooterSection />
      </div>

      <WhatsAppButton />
    </>
  );
}
