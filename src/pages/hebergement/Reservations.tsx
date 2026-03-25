import PageLayout from "@/components/PageLayout";
import { ClipboardList } from "lucide-react";

const Reservations = () => (
  <PageLayout title="Réservations effectuées" subtitle="Suivi des réservations">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl italic text-foreground mb-4">
          Consultez vos réservations
        </h3>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-6">
          Retrouvez la liste des réservations effectuées pour les Championnats du Monde 
          de Scrabble Francophone 2026.
        </p>
        <a
          href="https://www.tunis-cdm-scrabble-2026.org/reservations-effectuees/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold inline-block"
        >
          Consulter les réservations
        </a>
      </div>
    </div>
  </PageLayout>
);

export default Reservations;
