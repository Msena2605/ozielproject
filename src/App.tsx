import { useEffect, Suspense, lazy } from "react";
import { motion } from "motion/react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Experiences = lazy(() => import("./components/Experiences"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href) as HTMLElement;
        if (element) {
          lenis.scrollTo(element, { offset: -100 });
        }
      } else if (href === "#") {
        e.preventDefault();
        lenis.scrollTo(0);
      }
    };

    document.documentElement.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.documentElement.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden w-full bg-brand-black text-white selection:bg-brand-gold/30 selection:text-brand-champagne">
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        <div className="relative z-10 bg-brand-black">
          <Suspense fallback={<div className="h-40 flex items-center justify-center text-brand-gold">Carregando...</div>}>
            <About />
            <Experiences />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
