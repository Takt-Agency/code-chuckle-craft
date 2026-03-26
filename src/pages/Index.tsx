import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import hotelImg from "@/assets/hotel-regency.jpg";
import { Link } from "react-router-dom";
import { Newspaper, Camera, Video, Bus, Hotel } from "lucide-react";

const partnerLogos = [
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-medina_hotels-_fond-bleu-ai-1024x403.webp", alt: "Médina Hôtels", href: "#" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-regency-tunis-by-medina.webp", alt: "Regency Tunis", href: "/hebergement" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/logo_verdi_hotel.webp", alt: "Verdi Hôtel", href: "/hebergement/verdi" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_larousse.webp", alt: "Larousse", href: "https://www.larousse.fr/" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_mattel.webp", alt: "Mattel", href: "https://www.lesjouetsmattel.fr/mattel-france/notre-histoire/" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_astus-300x87.webp", alt: "ASTUS", href: "https://www.facebook.com/Scrabble-Tunisie-578053995984801" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/logo_federationscrabble-horizontale-rvb.webp", alt: "FFSc", href: "https://www.ffscrabble.fr/" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/fisf_logo_4lignes_rvb.webp", alt: "FISF", href: "https://www.fisf.net/" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/office-du-tourisme-tunisie.webp", alt: "Office du Tourisme", href: "https://www.tourisme.gov.tn/?page_id=3236&lang=fr" },
];

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <HeroSection />

    {/* Quick Actions - Verdi + Navette */}
    <section className="bg-background py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
          <StaggerItem>
            <Link
              to="/hebergement/verdi"
              className="bg-card border border-border rounded-lg p-6 flex items-center gap-5 group hover:border-primary transition-colors"
            >
              <img
                src="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/logo_verdi_hotel.webp"
                alt="Verdi Hôtel"
                className="h-16 w-24 object-contain"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                  Réserver une chambre
                </h3>
                <p className="text-muted-foreground text-sm">Verdi Tunis Beach Resort</p>
              </div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link
              to="/infos-pratiques/rejoindre"
              className="bg-card border border-border rounded-lg p-6 flex items-center gap-5 group hover:border-primary transition-colors"
            >
              <div className="w-24 h-16 flex items-center justify-center">
                <Bus className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                  Réserver une navette
                </h3>
                <p className="text-muted-foreground text-sm">Aéroport → Hôtel</p>
              </div>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>

    {/* Hotel Section */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimatedSection variant="slide-left">
            <h2 className="font-heading text-3xl md:text-4xl italic text-foreground mb-4">
              Regency Tunis Hôtel
            </h2>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-6">
              Gammarth · 5 étoiles
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lieu principal de l'événement, le Regency Tunis Hôtel vous accueille dans un cadre luxueux
              avec chambres de standing, plage privée, piscines extérieures et restaurants de qualité.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-regency-tunis-by-medina-300x212.webp"
                alt="Regency Tunis by Médina"
                className="h-14 object-contain"
                loading="lazy"
              />
            </div>
            <Link to="/hebergement" className="btn-outline-gold inline-block text-xs px-6 py-2.5">
              En savoir +
            </Link>
          </AnimatedSection>
          <AnimatedSection variant="slide-right" delay={0.2}>
            <div className="rounded-lg overflow-hidden">
              <img
                src={hotelImg}
                alt="Regency Tunis Hôtel"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <AnimatedSection variant="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl italic text-foreground mb-4">
            Nos partenaires
          </h2>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="h-px w-12 bg-primary" />
            <span className="diamond w-2 h-2" />
            <span className="h-px w-12 bg-primary" />
          </div>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center" staggerDelay={0.08}>
          {partnerLogos.map((p) => (
            <StaggerItem key={p.alt}>
              {p.href.startsWith("/") ? (
                <Link to={p.href}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="max-h-16 max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </Link>
              ) : (
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="max-h-16 max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
        <AnimatedSection variant="fade-up" delay={0.3}>
          <Link to="/partenaires" className="btn-outline-gold inline-block text-xs px-6 py-2.5 mt-10">
            Voir tous les partenaires
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* Media Section */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {[
            { icon: Newspaper, title: "Presse", desc: "Les informations nationales et internationales", cta: "Lire" },
            { icon: Camera, title: "Photos", desc: "Photos des épreuves", cta: "Parcourir" },
            { icon: Video, title: "Vidéos", desc: "Toutes nos vidéos", cta: "Visionner" },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors group">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-foreground font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <span className="text-primary text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-foreground transition-colors">
                  {item.cta} →
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
