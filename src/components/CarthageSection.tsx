import AnimatedSection from "@/components/AnimatedSection";
import carthageImg from "@/assets/img/2.webp";

const stats = [
  { value: "30+", label: "Nations" },
  { value: "500+", label: "Participants" },
  { value: "54", sup: "e", label: "Édition mondiale" },
];

const CarthageSection = () => (
  <section className="bg-background py-16 md:py-24 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left – Text */}
        <AnimatedSection variant="slide-left">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="text-primary uppercase tracking-[0.25em] text-[11px] font-bold font-body">
              Au cœur de l'histoire
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-[2.6rem] leading-tight italic text-foreground mb-8">
            L'arène millénaire{" "}
            <br />
            de <span className="text-primary">Carthage</span>
          </h2>

          <div className="space-y-5 text-muted-foreground text-[15px] leading-relaxed italic mb-10">
            <p>
              Au cœur de l'ancienne Carthage, les colonnes millénaires se dressent comme les gardiennes
              de l'histoire. Autrefois témoins de conquêtes et de stratégies militaires, elles deviennent
              aujourd'hui l'arène d'une nouvelle forme de combat :{" "}
              <strong className="text-foreground not-italic">le combat des mots.</strong>
            </p>
            <p>
              Dans ce cercle de pierre, les meilleurs joueurs du monde s'affrontent non pas avec des armes,
              mais avec des lettres. Chaque mot est une stratégie.{" "}
              <strong className="text-foreground not-italic">Chaque lettre est un mouvement décisif.</strong>
            </p>
            <p>
              Entre héritage phénicien et langue moderne,{" "}
              <strong className="text-foreground not-italic">
                le Scrabble® trouve à Carthage son arène mythique.
              </strong>
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 sm:gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-heading text-3xl md:text-4xl text-foreground">
                  {s.value}
                  {s.sup && <sup className="text-lg ml-0.5">{s.sup}</sup>}
                </span>
                <span className="block text-primary uppercase tracking-[0.2em] text-[10px] font-bold mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right – Carthage Image */}
        <AnimatedSection variant="slide-right" delay={0.2}>
          <div className="relative flex items-center justify-center">
            <div className="w-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={carthageImg}
                alt="Colonnes de Carthage – Scrabble® Tunis 2026"
                className="w-full h-[280px] sm:h-[350px] md:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default CarthageSection;
