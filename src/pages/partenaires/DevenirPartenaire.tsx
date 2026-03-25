import PageLayout from "@/components/PageLayout";
import { Handshake } from "lucide-react";

const DevenirPartenaire = () => (
  <PageLayout title="Devenir partenaire" subtitle="Rejoignez l'aventure">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center mb-10">
        <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl italic text-foreground mb-4">
          Soutenez les Championnats du Monde 2026
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Associez votre image à un événement international prestigieux réunissant des participants 
          de plus de 24 pays. Plusieurs formules de partenariat sont disponibles pour répondre 
          à vos objectifs de visibilité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { level: "Or", desc: "Visibilité maximale : logo sur tous les supports, stand dédié, mentions presse" },
          { level: "Argent", desc: "Logo sur les supports principaux, présence dans les communications officielles" },
          { level: "Bronze", desc: "Logo sur le site web et les programmes, mention dans les communications" },
        ].map((tier) => (
          <div key={tier.level} className="bg-card border border-border rounded-lg p-6 text-center">
            <h4 className="font-display text-primary font-bold text-xl mb-3">Partenaire {tier.level}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{tier.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Pour toute demande de partenariat, contactez-nous :
        </p>
        <p className="text-primary font-bold">contact@tunis-cdm-scrabble-2026.org</p>
      </div>
    </div>
  </PageLayout>
);

export default DevenirPartenaire;
