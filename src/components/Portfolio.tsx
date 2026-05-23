import { motion } from "motion/react";
import { Play } from "lucide-react";
import { cinematicEase } from "../lib/easings";

export default function Portfolio() {
  
  const items = [
    { id: 1, title: "Recepção Casamento", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop" },
    { id: 2, title: "Lounge Jazz", img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2940&auto=format&fit=crop" },
    { id: 3, title: "Performance Ao Vivo", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop" }
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-24 md:py-32 xl:py-40 bg-brand-black relative">
      {/* Background glow & subtle texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen mix-blend-color-dodge"></div>
      <div className="absolute inset-0 bg-[#0a0a0a]/50 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEase }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="w-6 sm:w-8 h-[1px] bg-brand-gold/50"></span>
              <p className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-medium">Assista e sinta</p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-light leading-[1.1]">
              Portfólio <br className="hidden md:block"/><span className="italic text-brand-champagne/80">Cinematográfico</span>
            </h2>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            href="https://instagram.com/oziel_mello"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-[11px] tracking-[0.3em] font-medium uppercase text-white/90 lg:text-white/70 lg:hover:text-brand-champagne transition-colors pb-2 sm:pb-3 flex items-center gap-4 group mt-2 sm:mt-4 md:mt-0 relative overflow-hidden"
          >
            Acessar Galeria
            <span className="w-12 h-[1px] lg:w-10 bg-brand-gold/80 lg:bg-brand-gold/50 lg:group-hover:bg-brand-gold lg:group-hover:w-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gray/30"></span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold translate-x-[-100%] lg:group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: index * 0.15, ease: cinematicEase }}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#0a0a0a] cursor-pointer"
            >
              {/* Image & Image Effects */}
              <div className="absolute inset-0 w-full h-full transform scale-100 lg:group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)]">
                <img
                  loading="lazy"
                  width="800"
                  height="1000"
                  src={item.img}
                  alt={item.title}
                  className="w-[105%] h-[105%] object-cover grayscale-[20%] lg:grayscale-[80%] lg:group-hover:grayscale-0 transition-all duration-[2.5s] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-90 lg:opacity-70 lg:group-hover:opacity-100 transform -translate-x-[2.5%] -translate-y-[2.5%]"
                />
              </div>
              
              {/* Cinematic Overlay Backdrops */}
              <div className="absolute inset-0 bg-[#0a0a0a]/20 lg:bg-[#0a0a0a]/30 mix-blend-multiply transition-colors duration-[1.5s] lg:group-hover:bg-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 top-1/3 lg:top-0 bg-gradient-to-t from-brand-black/95 via-brand-black/60 lg:via-brand-black/40 to-transparent opacity-90 lg:opacity-80 lg:group-hover:opacity-100 transition-opacity duration-[1.5s] pointer-events-none z-10"></div>

              {/* Play Button Indicator - Premium visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center lg:pointer-events-none z-20">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-150 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                {/* Button border */}
                <div className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-brand-gold/60 lg:border-brand-gold/30 flex items-center justify-center backdrop-blur-md opacity-100 scale-100 lg:opacity-0 lg:scale-75 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:border-brand-gold/60 lg:group-hover:bg-brand-black/20 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_25px_rgba(201,185,119,0.3)] lg:shadow-[0_0_30px_rgba(201,185,119,0.2)] bg-brand-black/20 lg:bg-transparent">
                  <Play size={16} className="text-brand-champagne ml-1 transform translate-x-0 lg:-translate-x-1 lg:group-hover:translate-x-0 transition-transform duration-[1.2s] ease-out lg:w-5 lg:h-5" fill="currentColor" />
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 xl:p-12 translate-y-0 lg:translate-y-6 opacity-100 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-20 flex flex-col items-center text-center">
                <p className="text-brand-gold text-[9px] uppercase tracking-[0.4em] mb-4 font-medium relative top-0 lg:top-2 opacity-100 lg:opacity-0 lg:group-hover:top-0 lg:group-hover:opacity-100 transition-all duration-[1.5s] delay-100 ease-out drop-shadow-md">
                  Performance
                </p>
                <h3 className="font-serif text-2xl xl:text-3xl text-white font-light drop-shadow-lg">{item.title}</h3>
              </div>
              
              {/* Subtle visual frame border */}
              <div className="absolute inset-0 border border-brand-gray/10 lg:group-hover:border-brand-gold/30 transition-colors duration-1000 z-20 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
