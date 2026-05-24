import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cinematicEase } from "../lib/easings";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay so it doesn't interrupt LCP
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 1.2, ease: cinematicEase }}
          href="https://wa.me/558299488812"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Oziel Melo pelo WhatsApp"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-[4rem] lg:right-[4rem] mb-[env(safe-area-inset-bottom)] z-[40] group focus:outline-none flex items-center justify-center cursor-pointer"
        >
          {/* Breathing Backplate Container */}
          <motion.div 
            animate={{ 
              boxShadow: [
                "0 20px 40px rgba(0,0,0,0.5), 0 0 10px rgba(201,185,119,0.03)", 
                "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(201,185,119,0.1)", 
                "0 20px 40px rgba(0,0,0,0.5), 0 0 10px rgba(201,185,119,0.03)"
              ]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="flex items-center justify-center w-[74px] h-[74px] lg:w-[94px] lg:h-[94px] rounded-full bg-[#050505]/40 backdrop-blur-xl border border-brand-gold/10 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:bg-[#050505]/60 lg:group-hover:border-brand-gold/30"
          >
            {/* Inner Premium Capsule */}
            <div className="relative flex items-center justify-center w-[54px] h-[54px] lg:w-[68px] lg:h-[68px] rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#080808] border border-white/5 shadow-[inset_0_0_20px_rgba(37,211,102,0.04)] transition-all duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-110 lg:group-hover:shadow-[inset_0_0_30px_rgba(37,211,102,0.15),0_5px_25px_rgba(37,211,102,0.25)]">
              
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px] text-[#25d366] drop-shadow-[0_2px_8px_rgba(37,211,102,0.2)] transition-all duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-105 lg:group-hover:drop-shadow-[0_4px_12px_rgba(37,211,102,0.5)]"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
