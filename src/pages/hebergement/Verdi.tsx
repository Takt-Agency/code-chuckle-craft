import PageLayout from "@/components/PageLayout";
import { Hotel } from "lucide-react";

const Verdi = () => (
  <PageLayout title="Réservations Verdi" subtitle="Verdi Tunis Beach Resort">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
        <div className="flex justify-center mb-6">
          <Hotel className="w-12 h-12 text-primary" />
        </div>
        <h3 className="font-heading text-2xl italic text-foreground text-center mb-4">
          Verdi Tunis Beach Resort
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
          <p>
            Le Verdi Tunis Beach Resort est l'hébergement alternatif proposé aux participants 
            des Championnats du Monde de Scrabble Francophone 2026.
          </p>
          <p className="text-foreground font-bold">
            Chambres disponibles : <span className="text-primary text-xl">44</span>
          </p>
        </div>
      </div>

      <div className="bg-card border-l-4 border-accent rounded-lg p-6 mb-8">
        <p className="text-muted-foreground text-sm italic">
          Pas de possibilité de règlement en ligne pour votre réservation. 
          Des modalités pratiques pour réaliser cette opération vous seront communiquées ultérieurement.
        </p>
      </div>

      <div className="text-center">
        <a
          href="https://www.tunis-cdm-scrabble-2026.org/reservations-verdi/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold inline-block"
        >
          Réserver une chambre
        </a>
      </div>
    </div>
  </PageLayout>
);

export default Verdi;
