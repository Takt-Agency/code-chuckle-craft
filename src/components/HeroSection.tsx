import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden">
    <img
      src={heroBg}
      alt="Ruines de Carthage, Tunisie"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="hero-overlay absolute inset-0" />

    <div className="relative z-10 flex flex-col min-h-screen">
      <div className="hidden md:block">
        <TopBanner />
      </div>
      <Navbar />

      <div className="flex-1 flex items-center px-4 md:px-8">
        {/* Arrows hidden on mobile */}
        <div className="carousel-arrow shrink-0 hidden md:flex">
          <ChevronLeft className="w-5 h-5 text-accent" />
        </div>

        {/* Center Content - stacked on mobile, side-by-side on desktop */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-12 gap-8 md:gap-4">
          {/* Date */}
          <div className="text-foreground text-center md:text-left">
            <p className="font-heading text-4xl md:text-6xl font-light italic leading-tight">
              18 –26
            </p>
            <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-[0.15em] mt-1">
              JUILLET
            </p>
            <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-[0.15em]">
              2026
            </p>
          </div>

          {/* Title */}
          <div className="max-w-xl text-center md:text-right">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic leading-[1.1] text-foreground">
              Championnats<br />
              du monde de Scrable<br />
              Francophone
            </h1>
            <p className="mt-4 md:mt-6 text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-lg font-body font-bold">
              TUNIS <span className="diamond mx-2 w-2 h-2 inline-block align-middle" /> 2026
            </p>
            <div className="mt-6 md:mt-8">
              <button className="btn-outline-gold text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3">
                LORUM IPSUM
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-arrow shrink-0 hidden md:flex">
          <ChevronRight className="w-5 h-5 text-accent" />
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-3 pb-6 md:pb-8">
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-foreground/40" />
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-foreground/40" />
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent" />
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-foreground/40" />
      </div>
    </div>
  </section>
);

export default HeroSection;
