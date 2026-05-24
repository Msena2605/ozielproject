import { motion } from "motion/react";
import { cinematicEase } from "../lib/easings";

const Waveform = () => (
  <div className="flex items-end gap-[3px] h-4 mt-1 opacity-70">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="w-[1px] bg-brand-gold"
        animate={{ height: ["4px", "16px", "4px"] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default function About() {

  return (
    <section id="sobre" className="py-20 sm:py-24 md:py-32 xl:py-40 bg-brand-black relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-32 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: cinematicEase }}
            className="relative px-2 sm:px-0"
          >
            {/* Cinematic back glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-gold/10 blur-[80px] z-0 rounded-full"></div>
            
            <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-[#050505] border border-brand-gray/10 group z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-brand-black/10 z-20 transition-colors duration-1000 ease-out lg:group-hover:bg-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 lg:h-2/3 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-20 pointer-events-none opacity-90 lg:opacity-100"></div>
              
              <img
                loading="lazy"
                width="800"
                height="1000"
                src="/Oziel-Melo.png"
                alt="Oziel Melo tocando saxofone"
                className="relative z-10 object-cover object-[center_15%] sm:object-center w-[105%] h-[105%] scale-100 lg:scale-105 lg:group-hover:scale-100 brightness-[1.35] contrast-[1.15] saturate-[1.1] grayscale-[5%] lg:grayscale-[20%] lg:group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-100 lg:opacity-95 lg:group-hover:opacity-100 transform -translate-x-[2.5%] -translate-y-[2.5%]"
              />
            </div>
            
            {/* Minimalist Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: cinematicEase }}
              className="absolute -bottom-6 left-6 sm:-bottom-10 sm:left-auto sm:-right-12 lg:-right-16 bg-[#0f0f10] p-6 sm:p-10 border border-brand-gray/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md z-30"
            >
              <div className="text-brand-gold font-serif text-6xl xl:text-7xl mb-2 font-light tracking-tight">20+</div>
              <div className="text-white/40 text-[9px] uppercase tracking-[0.4em] leading-[1.8] font-medium">
                Anos de<br/>carreira
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
              className="flex items-center gap-6 mb-10"
            >
              <span className="w-10 h-[1px] bg-brand-gold/60"></span>
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-medium">
                Uma vida dedicada à arte
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }}
              className="font-serif text-4xl md:text-5xl lg:text-5xl text-white leading-[1.2] mb-12 font-light tracking-wide"
            >
              A elegância <span className="italic text-brand-champagne/80">do som.</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
              className="space-y-8 text-white/50 font-sans font-light text-base md:text-lg leading-relaxed mix-blend-screen"
            >
              <p>
                A música não deve apenas ser ouvida; ela precisa ser sentida. Com mais de duas décadas de trajetória profissional, Oziel Melo transformou o saxofone em uma extensão da sua própria alma.
              </p>
              <p>
                Cada performance é cuidadosamente desenhada para criar uma atmosfera de exclusividade, classe e emoção profunda, transformando ambientes e conectando pessoas através de melodias memoráveis.
              </p>
              <p>
                Do jazz refinado em lounges de luxo aos arranjos românticos em casamentos inesquecíveis, a excelência e o compromisso com a arte são os pilares de cada apresentação.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }}
              className="mt-16 pt-12 border-t border-brand-gray/20 flex flex-col sm:flex-row sm:items-center justify-between gap-8"
            >
              <div className="flex items-center gap-8">
                <div className="w-12 h-[1px] bg-brand-gold/40"></div>
                <div>
                  <div className="font-serif text-3xl italic text-white/90 font-light">
                    Oziel Melo
                  </div>
                  <p className="text-brand-gold/50 text-[9px] uppercase tracking-[0.4em] mt-3 font-medium">Saxofonista</p>
                </div>
              </div>
              <div className="hidden sm:block">
                 <Waveform />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
