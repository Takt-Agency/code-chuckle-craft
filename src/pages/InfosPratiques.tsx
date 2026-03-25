import PageLayout from "@/components/PageLayout";
import { MapPin, Plane, CreditCard, Globe, Thermometer } from "lucide-react";

const infos = [
  {
    icon: Plane,
    title: "Accès",
    content: "Tunis est desservie par l'aéroport international de Tunis-Carthage (TUN), situé à environ 20 minutes du Regency Tunis Hôtel à Gammarth. Un service de navette sera proposé.",
  },
  {
    icon: MapPin,
    title: "Lieu",
    content: "Regency Tunis Hôtel, Gammarth, Tunis, Tunisie. Hôtel 5 étoiles offrant toutes les commodités nécessaires pour accueillir l'événement.",
  },
  {
    icon: CreditCard,
    title: "Monnaie",
    content: "La monnaie locale est le Dinar tunisien (TND). Les principales cartes bancaires sont acceptées dans les hôtels et restaurants. Des distributeurs automatiques sont disponibles.",
  },
  {
    icon: Globe,
    title: "Visa",
    content: "Les ressortissants de nombreux pays francophones bénéficient d'une exemption de visa pour un séjour touristique en Tunisie. Vérifiez les conditions spécifiques à votre nationalité.",
  },
  {
    icon: Thermometer,
    title: "Climat",
    content: "En juillet, Tunis bénéficie d'un climat méditerranéen chaud et ensoleillé avec des températures moyennes de 28-35°C. Prévoir des vêtements légers et une protection solaire.",
  },
];

const InfosPratiques = () => (
  <PageLayout title="Infos Pratiques" subtitle="Préparez votre voyage">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="space-y-6">
        {infos.map((info) => (
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

export default InfosPratiques;
