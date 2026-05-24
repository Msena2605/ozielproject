import { motion } from "motion/react";
import { cinematicEase } from "../lib/easings";

export default function Testimonials() {
  

  const testimonials = [
    {
      id: 1,
      text: "A entrada ao som do saxofone foi o momento mais inesquecível da noite. Profissional impecável e de uma sensibilidade estética incrível.",
      author: "Camila & Rafael",
      role: "Casamento"
    },
    {
      id: 2,
      text: "Um nível de sofisticação ímpar. Sempre que contratamos para nossos eventos, os convidados ficam em absoluto encantamento.",
      author: "Diretoria",
      role: "Evento Corporativo Premium"
    },
    {
      id: 3,
      text: "A atmosfera que ele cria é espetacular. Elevou o padrão da recepção do nosso hotel a outro patamar. Altamente recomendável.",
      author: "Juliana T.",
      role: "Gerente de Eventos"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 sm:py-24 md:py-32 xl:py-40 bg-brand-black relative z-20 overflow-hidden">
      {/* Cinematic subtle spotlight */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] bg-brand-gold/5 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: cinematicEase }}
          className="text-center mb-16 md:mb-28 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <span className="w-8 sm:w-12 h-[1px] bg-brand-gold/40"></span>
            <p className="text-brand-gold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] font-medium">Reconhecimento</p>
            <span className="w-8 sm:w-12 h-[1px] bg-brand-gold/40"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] font-light">
            Palavras de <br className="hidden md:block"/><span className="italic text-brand-champagne/80">Quem Viveu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: index * 0.15, ease: cinematicEase }}
              className="group flex flex-col p-10 lg:p-14 xl:p-16 bg-[#0a0a0a] border border-brand-gray/10 lg:hover:border-brand-gold/20 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-default relative overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 lg:bg-brand-gold/0 rounded-full blur-[50px] transition-colors duration-1000 lg:group-hover:bg-brand-gold/10"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-brand-gold/50 lg:bg-brand-gold/30 lg:group-hover:bg-brand-gold transition-colors duration-1000"></div>
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-brand-gold/50 lg:bg-brand-gold/30 lg:group-hover:bg-brand-gold transition-colors duration-1000"></div>

              <div className="text-brand-gold/30 lg:text-brand-gold/20 font-serif text-7xl lg:text-8xl leading-[0.5] mb-8 lg:group-hover:text-brand-gold/50 transition-colors duration-[1.5s] font-light tracking-tighter">"</div>
              <p className="text-white/80 lg:text-white/70 font-light text-base lg:text-lg leading-relaxed mb-16 flex-grow italic lg:group-hover:text-white/90 transition-colors duration-700">
                {t.text}
              </p>
              
              <div className="mt-auto relative">
                <div className="absolute top-0 left-0 w-full lg:w-8 h-[1px] bg-brand-gold/20 lg:bg-brand-gold/30 lg:group-hover:w-full transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                <div className="pt-8">
                  <h3 className="text-white font-medium tracking-[0.25em] uppercase text-[10px] sm:text-[11px] mb-2">{t.author}</h3>
                  <p className="text-brand-gold/70 text-[9px] tracking-[0.3em] font-medium uppercase">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
