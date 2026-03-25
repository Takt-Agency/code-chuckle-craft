import PageLayout from "@/components/PageLayout";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const Evenement = () => (
  <PageLayout title="L'Événement" subtitle="54es Championnats du Monde">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl italic text-foreground mb-6">
          54es Championnats du Monde de Scrabble Francophone
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Les 54es Championnats du Monde de Scrabble Francophone se tiendront du 18 au 26 juillet 2026 
          au Regency Tunis Hôtel à Gammarth, Tunisie. Cet événement majeur du Scrabble francophone 
          réunira les meilleurs joueurs du monde entier pour une semaine de compétition intense.
        </p>
      </div>

      {/* Key Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: Calendar, title: "Dates", desc: "18–26 juillet 2026" },
          { icon: MapPin, title: "Lieu", desc: "Regency Tunis Hôtel, Gammarth" },
          { icon: Users, title: "Participants", desc: "Joueurs du monde entier" },
          { icon: Trophy, title: "Compétitions", desc: "Plusieurs catégories" },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
            <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-foreground font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="bg-card border border-border rounded-lg p-8 md:p-12">
        <h3 className="font-heading text-2xl italic text-foreground mb-4">À propos de l'événement</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Organisé conjointement par la Fédération Internationale de Scrabble Francophone (FISF) 
            et l'Association Scrabble Tunisie (ASTUS), cet événement promet d'être une édition 
            mémorable dans le cadre enchanteur de la Tunisie.
          </p>
          <p>
            Le Regency Tunis Hôtel, établissement 5 étoiles situé à Gammarth, offrira aux participants 
            un cadre luxueux avec des chambres de standing, une plage privée, des piscines extérieures, 
            et plusieurs restaurants de qualité.
          </p>
          <p>
            Au-delà de la compétition, les participants pourront découvrir les richesses culturelles 
            et historiques de la Tunisie, terre de Carthage et carrefour de civilisations millénaires.
          </p>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Evenement;
