import PageLayout from "@/components/PageLayout";
import { Mail, MapPin, Globe } from "lucide-react";

const Contact = () => (
  <PageLayout title="Contact" subtitle="Nous contacter">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="font-display text-foreground font-bold text-xl mb-6">Comité d'Organisation</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-bold text-sm">Adresse</p>
                <p className="text-muted-foreground text-sm">Regency Tunis Hôtel, Gammarth, Tunis, Tunisie</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-bold text-sm">Email</p>
                <p className="text-muted-foreground text-sm">contact@tunis-cdm-scrabble-2026.org</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-bold text-sm">Site officiel</p>
                <a
                  href="https://www.tunis-cdm-scrabble-2026.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  www.tunis-cdm-scrabble-2026.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="font-display text-foreground font-bold text-xl mb-6">Organisateurs</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-primary font-bold text-sm mb-1">FISF</h4>
              <p className="text-muted-foreground text-sm">
                Fédération Internationale de Scrabble Francophone
              </p>
              <a href="https://www.fisf.net/" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                www.fisf.net
              </a>
            </div>
            <div>
              <h4 className="text-primary font-bold text-sm mb-1">ASTUS</h4>
              <p className="text-muted-foreground text-sm">
                Association Scrabble Tunisie
              </p>
            </div>
            <div>
              <h4 className="text-primary font-bold text-sm mb-1">FFSc</h4>
              <p className="text-muted-foreground text-sm">
                Fédération Française de Scrabble
              </p>
              <a href="https://www.ffscrabble.fr/" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                www.ffscrabble.fr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Presse", desc: "Les informations nationales et internationales", link: "https://www.tunis-cdm-scrabble-2026.org/presse/", cta: "Lire" },
          { title: "Photos", desc: "Photos des épreuves", link: "https://www.tunis-cdm-scrabble-2026.org/photos/", cta: "Parcourir" },
          { title: "Vidéos", desc: "Toutes nos vidéos", link: "https://www.tunis-cdm-scrabble-2026.org/videos/", cta: "Visionner" },
        ].map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors"
          >
            <h4 className="font-display text-foreground font-bold text-lg mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">{item.cta} →</span>
          </a>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Contact;
