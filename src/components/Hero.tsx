import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cinematicEase } from "../lib/easings";

export default function Hero() {
  return (
    <section className="relative isolate h-screen min-h-[600px] overflow-hidden bg-black pt-24 md:pt-28">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          className="h-full w-full object-cover object-[center_38%] md:object-center"
        >
          <source src="/Video-oziel2~2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center justify-end h-full pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: cinematicEase }}
          className="text-brand-gold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 md:mb-6 flex items-center gap-6 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
        >
          <span className="w-10 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-gold/70" />
          Saxofone ao vivo
          <span className="w-10 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-gold/70" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3, ease: cinematicEase }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.8rem] text-white leading-[1.05] sm:leading-[1.05] mb-8 sm:mb-10 font-light max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
        >
          A trilha sonora perfeita para{" "}
          <span className="italic text-brand-champagne">
            momentos únicos
          </span>
          .
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.65, ease: cinematicEase }}
          className="flex items-center justify-center w-full mt-8 sm:mt-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-9 w-full max-w-2xl mx-auto">
            <a
              href="#contato"
              aria-label="Solicitar Orçamento"
              className="group relative flex items-center justify-center gap-4 px-9 py-5 bg-black/30 border border-brand-gold/50 text-brand-champagne hover:border-brand-gold hover:bg-[#141414] hover:shadow-[0_0_30px_rgba(201,185,119,0.18)] transition-all duration-700 uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium overflow-hidden backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 flex items-center gap-3 group-hover:text-brand-black transition-colors duration-500 drop-shadow-sm">
                Solicitar Orçamento
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-700 ease-out" />
              </span>
            </a>

            <a
              href="https://wa.me/5582999481223"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Oziel Melo pelo WhatsApp"
              className="group flex items-center justify-center gap-3 text-white/85 hover:text-brand-champagne transition-all duration-700 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              <MessageCircle size={14} className="group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
              <span className="border-b border-transparent group-hover:border-brand-gold/50 pb-1 transition-all duration-500">
                Chamar no WhatsApp
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
      >
        <div className="w-[1px] h-10 md:h-14 bg-brand-gray/25 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-gold/70 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}