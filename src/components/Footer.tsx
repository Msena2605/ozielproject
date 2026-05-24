import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { cinematicEase } from "../lib/easings";

export default function Footer() {

  return (
    <footer className="bg-brand-black pt-24 sm:pt-32 pb-10 sm:pb-12 relative z-20 overflow-hidden">
      {/* Cinematic ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen -translate-y-1/2"></div>
      
      {/* Cinematic Grain Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Emotional Phrase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: cinematicEase }}
          className="flex flex-col items-center justify-center text-center mb-24 sm:mb-32 md:mb-40"
        >
          <motion.span 
             initial={{ height: 0 }}
             whileInView={{ height: 64 }}
             viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: cinematicEase }}
             className="w-[1px] bg-gradient-to-b from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 mb-10 sm:mb-14"
          ></motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-white font-light leading-[1.3] max-w-4xl tracking-wide">
            "A música é a linguagem invisível<br/>
            <span className="italic text-brand-champagne/80">dos sentimentos."</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
           transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
          className="flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-12 mb-12 sm:mb-16 text-center md:text-left border-b border-brand-gray/20 pb-12 sm:pb-16"
        >
          <a href="#" aria-label="Voltar ao início" className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-white uppercase font-light cursor-pointer group">
            Oziel Melo
            <div className="h-[1px] w-0 bg-brand-gold group-hover:w-full transition-all duration-700 ease-out mt-2 mx-auto md:mx-0"></div>
          </a>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://instagram.com/oziel_mello" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Abrir Instagram de Oziel Melo"
              className="w-16 h-16 rounded-full flex items-center justify-center border border-brand-gray/40 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-champagne transition-all duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] text-white/50 group"
            >
              <Instagram size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-700 ease-out" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: cinematicEase, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] sm:text-[10px] font-medium tracking-[0.4em] text-white/30 uppercase"
        >
          <p className="hover:text-white/50 transition-colors duration-500">© {new Date().getFullYear()} Oziel Melo. Todos os direitos reservados.</p>
          <p className="hover:text-white/50 transition-colors duration-500 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-brand-gold/30 inline-block"></span>
            Maceió — Brasil
            <span className="w-4 h-[1px] bg-brand-gold/30 inline-block"></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
