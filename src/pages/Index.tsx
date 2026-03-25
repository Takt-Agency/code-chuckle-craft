import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import hotelImg from "@/assets/hotel-regency.jpg";
import { Link } from "react-router-dom";
import { Newspaper, Camera, Video } from "lucide-react";

const partnerLogos = [
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-medina_hotels-_fond-bleu-ai-1024x403.webp", alt: "Médina Hôtels" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-regency-tunis-by-medina.webp", alt: "Regency Tunis" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_larousse.webp", alt: "Larousse" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_mattel.webp", alt: "Mattel" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_astus-300x87.webp", alt: "ASTUS" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/logo_federationscrabble-horizontale-rvb.webp", alt: "FFSc" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/fisf_logo_4lignes_rvb.webp", alt: "FISF" },
  { src: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/office-du-tourisme-tunisie.webp", alt: "Office du Tourisme" },
];

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <HeroSection />

    {/* Hotel Section */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl italic text-foreground mb-4">
              Regency Tunis Hôtel
            </h2>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-6">
              Gammarth · 5 étoiles
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lieu principal de l'événement, le Regency Tunis Hôtel vous accueille dans un cadre luxueux 
              avec chambres de standing, plage privée, piscines extérieures et restaurants de qualité.
            </p>
            <Link to="/hebergement" className="btn-outline-gold inline-block text-xs px-6 py-2.5">
              En savoir +
            </Link>
          </div>
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
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl italic text-foreground mb-4">
          Nos partenaires
        </h2>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="h-px w-12 bg-primary" />
          <span className="diamond w-2 h-2" />
          <span className="h-px w-12 bg-primary" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partnerLogos.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className="max-h-16 max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
        <Link to="/partenaires" className="btn-outline-gold inline-block text-xs px-6 py-2.5 mt-10">
          Voir tous les partenaires
        </Link>
      </div>
    </section>

    {/* Media Section */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Newspaper, title: "Presse", desc: "Les informations nationales et internationales", cta: "Lire" },
            { icon: Camera, title: "Photos", desc: "Photos des épreuves", cta: "Parcourir" },
            { icon: Video, title: "Vidéos", desc: "Toutes nos vidéos", cta: "Visionner" },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-foreground font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
              <span className="text-primary text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-foreground transition-colors">
                {item.cta} →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
