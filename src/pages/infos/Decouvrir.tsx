import PageLayout from "@/components/PageLayout";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import sidiBouSaidImg from "@/assets/tunisie/sidi bou said.jpg";
import medinaImg from "@/assets/tunisie/Médina de Tunis.jpg";
import plagesImg from "@/assets/tunisie/Plages et nature.jpg";
import gastronomieImg from "@/assets/tunisie/Gastronomie tunisie.jpg";
import artisanatImg from "@/assets/tunisie/Artisanat tunisie.jpg";

const discoveries = [
  {
    image: sidiBouSaidImg,
    title: "Sites historiques",
    desc: "Carthage, le Bardo, Sidi Bou Saïd, la Médina de Tunis (patrimoine UNESCO), Dougga, El Jem... La Tunisie regorge de trésors archéologiques et historiques témoignant de plus de 3 000 ans d'histoire.",
  },
  {
    image: medinaImg,
    title: "La Médina de Tunis",
    desc: "Classée au patrimoine mondial de l'UNESCO, la Médina de Tunis est un labyrinthe fascinant de ruelles, de mosquées, de palais et de souks où se mêlent traditions et vie quotidienne.",
  },
  {
    image: plagesImg,
    title: "Plages et nature",
    desc: "La côte méditerranéenne offre des plages magnifiques. Le climat en juillet est chaud et ensoleillé (28–35°C), idéal pour profiter de la mer entre deux parties de Scrabble®.",
  },
  {
    image: gastronomieImg,
    title: "Gastronomie",
    desc: "Savourez le couscous, le tajine tunisien, les bricks, la harissa, les pâtisseries aux amandes et au miel... Une cuisine généreuse aux saveurs méditerranéennes et orientales.",
  },
  {
    image: artisanatImg,
    title: "Artisanat",
    desc: "Tapis, céramique, cuir, bijoux en argent, huile d'olive... Les souks regorgent de trésors artisanaux, témoins d'un savoir-faire ancestral transmis de génération en génération.",
  },
];

const Decouvrir = () => (
  <PageLayout title="Découvrir la Tunisie" subtitle="Terre de Carthage">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <AnimatedSection variant="fade-up">
        <div className="text-center mb-14">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Profitez de votre séjour pour découvrir les trésors de la Tunisie,
            pays riche d'une histoire millénaire et d'une culture méditerranéenne vibrante.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.1}>
        {discoveries.map((item) => (
          <StaggerItem key={item.title}>
            <div className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary transition-colors">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-foreground font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </PageLayout>
);

export default Decouvrir;
