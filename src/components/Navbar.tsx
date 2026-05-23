import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cinematicEase } from "../lib/easings";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? "bg-brand-black/85 backdrop-blur-xl py-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 flex justify-between items-center">
          <a href="#" aria-label="Voltar ao início" className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] text-white uppercase relative group font-light outline-none">
            Oziel Melo
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-700 ease-out group-hover:w-full"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[9px] font-medium tracking-[0.4em] uppercase text-white/50 hover:text-brand-champagne transition-colors duration-500 outline-none group"
              >
                {link.name}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-gold/50 transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contato"
              className="px-6 py-3 ml-4 border border-brand-gray/30 text-white/70 hover:bg-[#141414] hover:text-brand-champagne hover:border-brand-gold/60 transition-all duration-700 tracking-[0.4em] text-[9px] uppercase font-medium outline-none rounded-sm"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-brand-champagne transition-colors duration-500 p-3 -mr-3"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: cinematicEase }}
            className="fixed inset-0 z-[60] bg-brand-black/95 flex flex-col justify-center items-center"
          >
            {/* Cinematic background glow on menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-[100%] bg-brand-gold/10 blur-[120px] pointer-events-none"></div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

            <button
              className="absolute top-8 right-6 text-white/50 hover:text-brand-gold transition p-4 z-20"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col items-center gap-12 relative z-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.8, ease: cinematicEase }}
                  className="font-serif text-4xl text-white hover:text-brand-champagne transition-colors duration-500 font-light relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-gold/50 transition-all duration-500 ease-out group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: cinematicEase }}
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="mt-12 w-full max-w-[280px] text-center px-10 py-6 border border-brand-gold/40 text-brand-champagne hover:bg-brand-gold hover:text-brand-black transition-all duration-700 tracking-[0.4em] uppercase text-[10px] font-medium backdrop-blur-md shadow-[0_0_30px_rgba(201,185,119,0.1)]"
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
