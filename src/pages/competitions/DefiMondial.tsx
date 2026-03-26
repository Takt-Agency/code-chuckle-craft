import PageLayout from "@/components/PageLayout";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Trophy, Users, Zap } from "lucide-react";

const DefiMondial = () => (
  <PageLayout title="Défi mondial" subtitle="La compétition d'élite des Championnats">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-12">

      <AnimatedSection variant="fade-up">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="w-8 h-8 text-primary shrink-0" />
            <h2 className="font-display text-foreground font-bold text-2xl">Présentation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le <span className="text-foreground font-semibold">Défi mondial</span> est une compétition de prestige organisée en marge des 54<sup>es</sup> Championnats du Monde de Scrabble Francophone. Elle rassemble les meilleurs joueurs du monde pour des parties d'une intensité exceptionnelle dans un format d'élimination directe.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cette épreuve est l'occasion pour les grands champions de se défier dans un cadre spectaculaire, offrant au public un Scrabble de très haut niveau.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 text-center h-full">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Participants</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Les <span className="text-foreground font-semibold">15 meilleurs joueurs</span> du classement Grand Slam de la saison, auxquels s'ajoutent les meilleurs joueurs de chaque fédération participante.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 text-center h-full">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Format</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Format d'<span className="text-foreground font-semibold">élimination directe</span> : un joueur est éliminé dès qu'il ne figure plus en tête du classement à l'issue d'une manche. Le dernier joueur restant remporte le Défi mondial.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="bg-card border border-border rounded-lg p-6 text-center h-full">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-foreground font-bold text-lg mb-3">Enjeux</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Une compétition de <span className="text-foreground font-semibold">très haut niveau</span> qui met en valeur les meilleurs joueurs francophones du monde, dans une atmosphère de tension et de spectacle unique.
            </p>
          </div>
        </StaggerItem>
      </StaggerContainer>

      <AnimatedSection variant="fade-up">
        <div className="bg-secondary border border-border rounded-lg p-8">
          <h2 className="font-display text-foreground font-bold text-xl mb-4">Règle d'élimination</h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              À chaque manche, tous les joueurs encore en lice s'affrontent simultanément. À l'issue de la manche, les joueurs qui ne se trouvent <span className="text-foreground font-semibold">pas en tête du classement</span> sont éliminés.
            </p>
            <p>
              La compétition se poursuit ainsi jusqu'à ce qu'il ne reste qu'un seul joueur invaincu, sacré <span className="text-foreground font-semibold">vainqueur du Défi mondial</span>.
            </p>
            <p>
              Ce format spectaculaire garantit une montée en intensité tout au long de l'épreuve, avec des retournements de situation possibles à chaque manche.
            </p>
          </div>
        </div>
      </AnimatedSection>

    </div>
  </PageLayout>
);

export default DefiMondial;
