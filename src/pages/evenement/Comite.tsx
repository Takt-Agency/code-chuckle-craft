import PageLayout from "@/components/PageLayout";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import imgJeanneret from "@/assets/img/jeanneret.png";
import imgOssinou from "@/assets/img/ossinou.png";
import imgDieng from "@/assets/img/dieng.png";
import imgGuizani from "@/assets/img/guizani.png";
import imgBrenez from "@/assets/img/brenez.png";
import imgBouzgarrou from "@/assets/img/bouzgarrou.png";
import imgAtallah from "@/assets/img/atallah.png";

const members = [
  {
    name: "P. Jeanneret",
    role: "Président",
    country: "Suisse",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/switzerland-flag-icon-32.webp",
    photo: imgJeanneret,
  },
  {
    name: "W. Guizani",
    role: "Co-Président",
    country: "Tunisie",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/tunisia-flag-icon-32.webp",
    photo: imgGuizani,
  },
  {
    name: "R. Dieng",
    role: "Secrétaire",
    country: "Sénégal",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/senegal-flag-icon-32.webp",
    photo: imgDieng,
  },
  {
    name: "O. Assinou",
    role: "Directeur Exécutif – FISF",
    country: "Bénin",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/benin-flag-icon-32.webp",
    photo: imgOssinou,
  },
  {
    name: "H. Atallah",
    role: "Président de l'ASTUS",
    country: "Tunisie",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/tunisia-flag-icon-32.webp",
    photo: imgAtallah,
  },
  {
    name: "R. Bouzgarrou",
    role: "Marketing",
    country: "Tunisie",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/tunisia-flag-icon-32.webp",
    photo: imgBouzgarrou,
  },
  {
    name: "Y. Brenez",
    role: "Trésorier",
    country: "Belgique",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/belgium-flag-icon-32.webp",
    photo: imgBrenez,
  },
];

const Comite = () => (
  <PageLayout title="Comité d'Organisation" subtitle="L'équipe derrière l'événement">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <AnimatedSection variant="fade-up">
        <div className="text-center mb-14">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Le Comité d'Organisation des 54<sup>es</sup> Championnats du Monde de Scrabble®
            Francophone réunit des membres de plusieurs pays francophones.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer
        className="flex flex-wrap justify-center gap-6"
        staggerDelay={0.08}
      >
        {members.map((m) => (
          <StaggerItem key={m.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <div className="text-center group py-4">
              {/* Photo losange */}
              <div className="flex justify-center mb-5">
                <div className="relative w-40 h-40">
                  {/* Border losange */}
                  <div
                    className="absolute inset-0 border-2 border-primary/40 group-hover:border-primary transition-colors duration-500"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                  {/* Image losange */}
                  <div
                    className="absolute inset-[6px] overflow-hidden bg-secondary"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  >
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl text-muted-foreground font-heading">
                          {m.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Petit losange accent en bas */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-accent" />
                </div>
              </div>
              {/* Info */}
              <div className="mt-2">
                <h3 className="font-display text-foreground font-bold text-lg">{m.name}</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mt-1 mb-2">
                  {m.role}
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <img src={m.flag} alt={m.country} className="w-5 h-auto" loading="lazy" />
                  <span>{m.country}</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </PageLayout>
);

export default Comite;
