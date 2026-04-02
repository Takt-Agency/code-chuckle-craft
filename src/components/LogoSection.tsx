import AnimatedSection from "@/components/AnimatedSection";
import logoCdm from "@/assets/img/logo-cdm.png";

const features = [
  {
    num: "01",
    title: "Piliers de Carthage",
    desc: "Les piliers de Carthage forment une arène symbolique. Ils évoquent l'histoire, la culture et l'espace de compétition.",
    side: "left",
  },
  {
    num: "02",
    title: "Forme Scrabble®",
    desc: "La composition graphique s'inspire directement des carreaux du Scrabble®. Un clin d'œil visuel au jeu et à la construction des mots.",
    side: "right",
  },
  {
    num: "03",
    title: "Lettres Scrabble®",
    desc: "Les mots en bas reprennent l'esthétique des lettres du Scrabble®. Ils représentent la création des mots et l'esprit du jeu.",
    side: "left",
  },
  {
    num: "04",
    title: "Rouge & Identité",
    desc: "Le rouge symbolise l'identité tunisienne et rappelle le drapeau national. Il affirme l'ancrage du championnat en Tunisie.",
    side: "right",
  },
];

const LogoSection = () => (
  <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#781215" }}>
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <AnimatedSection variant="fade-up">
        <div className="text-center mb-14">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
            Le Scrabble® ressemble énormément au système d'écriture
            phénicien (lettres séparées + combinaison pour former des mots).
          </p>
        </div>
      </AnimatedSection>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left column */}
        <div className="space-y-12">
          {features
            .filter((f) => f.side === "left")
            .map((f) => (
              <AnimatedSection key={f.num} variant="slide-left">
                <div className="text-center md:text-left">
                  <div className="flex items-baseline gap-3 justify-center md:justify-start mb-2">
                    <h3 className="font-display text-foreground font-bold text-lg uppercase tracking-widest">
                      {f.title}
                    </h3>
                    <span className="font-heading text-4xl text-primary/30 italic">{f.num}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
        </div>

        {/* Center – Logo in diamond */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="flex justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Red diamond background */}
              <div
                className="absolute inset-4 bg-accent/90"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              {/* Dark diamond with logo */}
              <div
                className="absolute inset-8 bg-dark-green-deep flex items-center justify-center"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              >
                <img
                  src={logoCdm}
                  alt="Logo CDM Scrabble® Tunis 2026"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              {/* Gold border diamond */}
              <div
                className="absolute inset-0 border-2 border-primary/40"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Right column */}
        <div className="space-y-12">
          {features
            .filter((f) => f.side === "right")
            .map((f) => (
              <AnimatedSection key={f.num} variant="slide-right">
                <div className="text-center md:text-right">
                  <div className="flex items-baseline gap-3 justify-center md:justify-end mb-2">
                    <span className="font-heading text-4xl text-primary/30 italic">{f.num}</span>
                    <h3 className="font-display text-foreground font-bold text-lg uppercase tracking-widest">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogoSection;
