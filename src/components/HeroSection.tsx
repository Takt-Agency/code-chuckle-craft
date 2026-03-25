import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden">
    {/* Background Image */}
    <img
      src={heroBg}
      alt="Ruines de Carthage, Tunisie"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />

    {/* Green Overlay */}
    <div className="hero-overlay absolute inset-0" />

    {/* Content */}
    <div className="relative z-10 flex flex-col min-h-screen">
      <TopBanner />
      <Navbar />

      <div className="flex-1 flex items-center px-8">
        {/* Left Arrow */}
        <div className="carousel-arrow shrink-0">
          <ChevronLeft className="w-5 h-5 text-accent" />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-between px-12">
          {/* Date */}
          <div className="text-foreground">
            <p className="font-heading text-6xl font-light italic leading-tight">
              18 –26
            </p>
            <p className="font-display text-4xl font-bold uppercase tracking-[0.15em] mt-1">
              JUILLET
            </p>
            <p className="font-display text-4xl font-bold uppercase tracking-[0.15em]">
              2026
            </p>
          </div>

          {/* Title */}
          <div className="max-w-xl text-right">
            <h1 className="font-heading text-6xl xl:text-7xl font-light italic leading-[1.1] text-foreground">
              Championnats<br />
              du monde de Scrable<br />
              Francophone
            </h1>
            <p className="mt-6 text-primary uppercase tracking-[0.3em] text-lg font-body font-bold">
              TUNIS <span className="diamond mx-2 w-2 h-2 inline-block align-middle" /> 2026
            </p>
            <div className="mt-8">
              <button className="btn-outline-gold">
                LORUM IPSUM
              </button>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="carousel-arrow shrink-0">
          <ChevronRight className="w-5 h-5 text-accent" />
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-3 pb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/40" />
      </div>
    </div>
  </section>
);

export default HeroSection;
