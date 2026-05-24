import { motion } from "motion/react";
import { cinematicEase } from "../lib/easings";

export default function Experiences() {
  

  const experiences = [
    {
      id: "casamentos",
      title: "Casamentos",
      desc: "A trilha sonora perfeita e emocionante para celebrar o amor no dia mais importante da sua jornada.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "corporativo",
      title: "Corporativo",
      desc: "Refinamento e classe absolutos para premiações, congressos e eventos empresariais de alto padrão.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61629?q=80&w=3024&auto=format&fit=crop" 
    },
    {
      id: "lounges",
      title: "Hotéis & Lounges",
      desc: "Atmosfera intimista e altamente sofisticada com arranjos jazzísticos e música contemporânea.",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "privados",
      title: "Eventos Privados",
      desc: "Total exclusividade e repertório curado minunciosamente para celebrações íntimas e jantares.",
      img: "https://images.unsplash.com/photo-1470229722913-7c090be5bced?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section id="experiencias" className="py-20 sm:py-24 md:py-32 xl:py-40 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.02%22/%3E%3C/svg%3E')] bg-brand-black relative z-20">
      {/* Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#111] blur-[150px] pointer-events-none mix-blend-screen mix-blend-color-dodge"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: cinematicEase }}
          className="text-center mb-16 sm:mb-20 md:mb-28 flex flex-col items-center relative z-10"
        >
          <div className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 mb-8 sm:mb-10"></div>
          <p className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-6 sm:mb-8 font-medium">Serviços Premium</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-light">
            Experiências <br className="hidden sm:block"/><span className="italic text-brand-champagne/80">Musicais</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16 lg:gap-x-16 lg:gap-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: index * 0.15, ease: cinematicEase }}
              className={`group flex flex-col cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-brand-black mb-6 sm:mb-10 relative">
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-brand-black/20 lg:bg-brand-black/40 mix-blend-multiply z-10 transition-colors duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:bg-brand-black/10"></div>
                <div className="absolute inset-x-0 bottom-0 top-1/2 lg:top-1/3 bg-gradient-to-t from-brand-black/90 via-brand-black/60 lg:via-brand-black/40 to-transparent z-10 opacity-100 lg:opacity-70 lg:group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                {/* Image Scale & Filter */}
                <img
                  loading="lazy"
                  width="800"
                  height="1000"
                  src={exp.img}
                  alt={exp.title}
                  className="w-[110%] h-[110%] object-cover transform -translate-x-[2.5%] -translate-y-[2.5%] scale-100 grayscale-[10%] lg:grayscale-[60%] transition-all duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-105 lg:group-hover:grayscale-[10%]"
                />

                {/* Floating Title Inside Image (Cinematic approach) */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 z-20 flex flex-col items-center text-center transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 font-light drop-shadow-md lg:drop-shadow-lg">
                    {exp.title}
                  </h3>
                  <div className="h-[1px] w-20 lg:w-12 bg-brand-gold/60 lg:bg-brand-gold/30 lg:group-hover:w-24 lg:group-hover:bg-brand-gold transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] mt-3 lg:mt-4 shadow-[0_0_10px_rgba(201,185,119,0.5)] lg:shadow-none"></div>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center px-4 max-w-sm mx-auto">
                <p className="text-white/80 lg:text-white/50 font-light leading-relaxed text-sm md:text-base lg:group-hover:text-white/80 transition-colors duration-700">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
