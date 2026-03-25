import PageLayout from "@/components/PageLayout";
import hotelImg from "@/assets/hotel-regency.jpg";
import { Hotel, Plane } from "lucide-react";

const Hebergement = () => (
  <PageLayout title="Hébergement" subtitle="Votre séjour à Tunis">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Hotel Image */}
      <div className="rounded-lg overflow-hidden mb-12">
        <img
          src={hotelImg}
          alt="Regency Tunis Hôtel"
          className="w-full h-64 md:h-96 object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
      </div>

      {/* Notice */}
      <div className="bg-card border-l-4 border-accent rounded-lg p-6 md:p-8 mb-10">
        <h3 className="font-display text-foreground font-bold text-lg mb-2">Réservations</h3>
        <p className="text-muted-foreground leading-relaxed">
          Le Comité d'Organisation exhorte les joueurs désirant venir à Tunis pour l'événement 
          à faire leur réservation le plus tôt possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Regency */}
        <div className="bg-card border border-border rounded-lg p-8">
          <Hotel className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display text-foreground font-bold text-xl mb-3">Regency Tunis Hôtel</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Établissement 5 étoiles situé à Gammarth, Tunisie. Chambres de luxe, suites, 
            plage privée, deux piscines extérieures, bain à remous, et plusieurs restaurants 
            dont le White Elephant proposant une cuisine thaïlandaise.
          </p>
          <p className="text-primary text-sm font-bold">Lieu principal de l'événement</p>
        </div>

        {/* Verdi */}
        <div className="bg-card border border-border rounded-lg p-8">
          <Hotel className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display text-foreground font-bold text-xl mb-3">Verdi Tunis Beach Resort</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Hébergement alternatif pour les participants. Réservez votre chambre directement 
            via le formulaire en ligne.
          </p>
          <a
            href="https://www.tunis-cdm-scrabble-2026.org/reservations-verdi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-xs px-6 py-2 inline-block"
          >
            Réserver une chambre
          </a>
        </div>
      </div>

      {/* Navette */}
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <Plane className="w-8 h-8 text-primary mx-auto mb-4" />
        <h3 className="font-display text-foreground font-bold text-xl mb-3">Navette Aéroport</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl mx-auto">
          Un service de navette est disponible entre l'aéroport de Tunis-Carthage et l'hôtel 
          pour faciliter votre arrivée et votre départ.
        </p>
        <a
          href="https://www.tunis-cdm-scrabble-2026.org/rejoindre-lhotel/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold text-xs px-6 py-2 inline-block"
        >
          Réserver une navette
        </a>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-sm italic">
          Pas de possibilité de règlement en ligne pour votre réservation. 
          Des modalités pratiques vous seront communiquées ultérieurement.
        </p>
      </div>
    </div>
  </PageLayout>
);

export default Hebergement;
