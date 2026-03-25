import PageLayout from "@/components/PageLayout";
import { Landmark, Sun, Utensils, ShoppingBag } from "lucide-react";

const Decouvrir = () => (
  <PageLayout title="Découvrir la Tunisie" subtitle="Terre de Carthage">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Profitez de votre séjour pour découvrir les trésors de la Tunisie, 
          pays riche d'une histoire millénaire et d'une culture méditerranéenne vibrante.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: Landmark, title: "Sites historiques", desc: "Carthage, le Bardo, Sidi Bou Saïd, la Médina de Tunis (patrimoine UNESCO), Dougga, El Jem..." },
          { icon: Sun, title: "Plages et nature", desc: "La côte méditerranéenne offre des plages magnifiques. Le climat en juillet est chaud et ensoleillé (28–35°C)." },
          { icon: Utensils, title: "Gastronomie", desc: "Savourez le couscous, le tajine tunisien, les bricks, la harissa, les pâtisseries aux amandes et au miel..." },
          { icon: ShoppingBag, title: "Artisanat", desc: "Tapis, céramique, cuir, bijoux en argent, huile d'olive... Les souks regorgent de trésors artisanaux." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-lg p-6">
            <item.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-display text-foreground font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Decouvrir;
