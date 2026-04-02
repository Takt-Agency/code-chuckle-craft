import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/img/4.webp";
import regencyBg from "@/assets/img/regency-tunis-hotel.jpg";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 0,
    image: heroBg,
    alt: "Ruines de Carthage, Tunisie",
    left: (
      <>
        <p className="font-heading text-4xl md:text-6xl font-light italic leading-tight">
          18 –26
        </p>
        <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-[0.15em] mt-1">
          JUILLET
        </p>
        <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-[0.15em]">
          2026
        </p>
      </>
    ),
    right: (
      <>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic leading-[1.1] text-foreground">
          54<sup className="text-lg md:text-2xl">es</sup> Championnats<br />
          du monde de Scrabble®<br />
          Francophone
        </h1>
        <p className="mt-4 md:mt-6 text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-lg font-body font-bold">
          TUNIS <span className="diamond mx-2 w-2 h-2 inline-block align-middle" /> 2026
        </p>
        <div className="mt-6 md:mt-8">
          <Link to="/hebergement" className="btn-outline-gold text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 inline-block">
            En savoir +
          </Link>
        </div>
      </>
    ),
  },
  {
    id: 1,
    image: regencyBg,
    alt: "Regency Tunis Medina Hotels & Resorts",
    left: (
      <>
        <p className="font-heading text-4xl md:text-6xl font-light italic leading-tight">
          Hôtel
        </p>
        <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-[0.15em] mt-1">
          OFFICIEL
        </p>
      </>
    ),
    right: (
      <>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic leading-[1.1] text-foreground">
          Regency Tunis<br />
          Medina Hotels<br />
          &amp; Resorts
        </h2>
        <p className="mt-4 md:mt-6 text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-lg font-body font-bold">
          Confort &amp; Élégance au cœur de Tunis
        </p>
        <div className="mt-6 md:mt-8">
          <Link to="/hebergement" className="btn-outline-gold text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 inline-block">
            Réserver maintenant
          </Link>
        </div>
      </>
    ),
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play every 6 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </AnimatePresence>
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="hidden md:block">
          <TopBanner />
        </div>
        <Navbar />

        <div className="flex-1 flex items-center px-4 md:px-8">
          <button
            onClick={goPrev}
            className="carousel-arrow shrink-0 hidden md:flex"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>

          <div className="flex-1 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-12 gap-8 md:gap-4">
            {/* Left content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${slide.id}`}
                className="text-foreground text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                {slide.left}
              </motion.div>
            </AnimatePresence>

            {/* Right content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${slide.id}`}
                className="max-w-xl text-center md:text-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                {slide.right}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goNext}
            className="carousel-arrow shrink-0 hidden md:flex"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-3 pb-6 md:pb-8">
          {slides.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrent(s.id)}
              aria-label={`Aller au slide ${s.id + 1}`}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300 ${
                current === s.id ? "bg-accent" : "bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
