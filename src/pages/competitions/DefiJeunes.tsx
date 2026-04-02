import PageLayout from "@/components/PageLayout";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Star, Users, Shield, Zap } from "lucide-react";

const DefiJeunes = () => (
  <PageLayout title="Défi des Jeunes" subtitle="La compétition d'élite pour les moins de 18 ans">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-12">

      <AnimatedSection variant="fade-up">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Star className="w-8 h-8 text-primary shrink-0" />
            <h2 className="font-display text-foreground font-bold text-2xl">Présentation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le <span className="text-foreground font-semibold">Défi des Jeunes</span> est une compétition spécialement conçue pour les joueurs de <span className="text-foreground font-semibold">moins de 18 ans</span>, organisée en parallèle du Défi mondial pendant les 54<sup>es</sup> Championnats du Monde de Scrabble® Francophone à Tunis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Reprenant le même format d'élimination que le Défi mondial, cette épreuve met en valeur les jeunes talents du Scrabble® francophone et leur offre une scène internationale exceptionnelle pour briller.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 h-full">
            <Users className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Participants</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tous les joueurs de <span className="text-foreground font-semibold">moins de 18 ans</span> participant aux Championnats du Monde. Chaque fédération peut présenter ses meilleurs jeunes joueurs pour représenter leur pays dans cette épreuve de prestige.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 h-full">
            <Zap className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Format d'élimination</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Même format que le Défi mondial : les joueurs sont éliminés dès qu'ils ne figurent plus en tête du classement à l'issue d'une manche. La compétition se poursuit jusqu'au dernier joueur invaincu.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 h-full">
            <Shield className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Le Joker — avantage exclusif</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Contrairement au Défi mondial, chaque joueur dispose d'un <span className="text-foreground font-semibold">joker</span> : il a le droit de ne pas finir en tête <span className="text-foreground font-semibold">une fois</span> sans être éliminé. Ce joker utilisé, la règle d'élimination immédiate s'applique. Un avantage précieux qui peut renverser le cours d'une compétition.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 h-full">
            <Star className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Un tremplin vers l'élite</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Le Défi des Jeunes est bien plus qu'une simple compétition : c'est une vitrine internationale pour les futures stars du Scrabble® francophone. Les performances dans cette épreuve peuvent lancer une carrière au plus haut niveau.
            </p>
          </div>
        </StaggerItem>
      </StaggerContainer>

      <AnimatedSection variant="fade-up">
        <div className="bg-secondary border border-border rounded-lg p-8">
          <h2 className="font-display text-foreground font-bold text-xl mb-6">Déroulement de l'épreuve</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Manches éliminatoires", desc: "Tous les jeunes joueurs s'affrontent simultanément. À l'issue de chaque manche, ceux qui ne sont pas en tête sont éliminés — sauf s'ils n'ont pas encore utilisé leur joker." },
              { step: "2", title: "Utilisation du joker", desc: "Un joueur qui ne figure pas en tête peut activer son joker unique pour survivre à cette manche. Il entre alors en zone de danger : toute manche suivante sans être en tête entraîne son élimination définitive." },
              { step: "3", title: "Finale", desc: "Les derniers joueurs encore en lice s'affrontent jusqu'à ce qu'un seul champion émerge, sacré vainqueur du Défi des Jeunes 2026." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="text-foreground font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

    </div>
  </PageLayout>
);

export default DefiJeunes;
