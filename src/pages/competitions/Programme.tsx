import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Download } from "lucide-react";

const PDF_URL = "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/11/Programmes-Tunis-2026-V1_9.pdf";
const IMAGE_URL = "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/11/programmes-tunis-2026-v1_9.webp";

const Programme = () => (
  <PageLayout title="Programme" subtitle="Déroulement des championnats">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <AnimatedSection variant="fade-up">
        <div className="text-center mb-10">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ci-dessous le programme officiel validé par le Comité Directeur de la FISF.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="fade-up" delay={0.15}>
        <div className="text-center mb-8">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2 text-xs px-6 py-2.5"
          >
            <Download className="w-4 h-4" />
            Télécharger le programme (PDF)
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="scale-in" delay={0.3}>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <img
            src={IMAGE_URL}
            alt="Programme officiel des 54es Championnats du Monde de Scrabble Francophone – Tunis 2026"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </div>
  </PageLayout>
);

export default Programme;
