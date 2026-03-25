import PageLayout from "@/components/PageLayout";
import { Plane, CreditCard, Globe, FileCheck } from "lucide-react";

const Venir = () => (
  <PageLayout title="Venir en Tunisie" subtitle="Préparez votre voyage">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="space-y-6">
        {[
          { icon: Globe, title: "Visa", content: "Les ressortissants de nombreux pays francophones bénéficient d'une exemption de visa pour un séjour touristique en Tunisie (jusqu'à 90 jours). Vérifiez les conditions spécifiques à votre nationalité auprès de l'ambassade de Tunisie de votre pays." },
          { icon: Plane, title: "Vols", content: "L'aéroport international de Tunis-Carthage (TUN) est desservi par de nombreuses compagnies aériennes depuis les principales villes francophones : Paris, Bruxelles, Montréal, Genève, Dakar, Abidjan, etc." },
          { icon: FileCheck, title: "Documents nécessaires", content: "Passeport valide (6 mois minimum après la date de retour). Billet de retour ou de continuation. Réservation d'hôtel confirmée." },
          { icon: CreditCard, title: "Monnaie et paiements", content: "La monnaie locale est le Dinar tunisien (TND). Les cartes bancaires internationales (Visa, Mastercard) sont acceptées dans les hôtels et grands commerces. Des distributeurs automatiques sont disponibles." },
        ].map((info) => (
          <div key={info.title} className="bg-card border border-border rounded-lg p-6 md:p-8 flex gap-5">
            <info.icon className="w-7 h-7 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-foreground font-bold text-lg mb-2">{info.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{info.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Venir;
