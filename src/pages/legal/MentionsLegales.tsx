import PageLayout from "@/components/PageLayout";

const MentionsLegales = () => (
  <PageLayout title="Mentions légales" subtitle="Informations légales">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-10">

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Éditeur du site</h2>
        <div className="text-muted-foreground text-sm space-y-1 leading-relaxed">
          <p><span className="text-foreground font-semibold">Dénomination :</span> Fédération Internationale de Scrabble® Francophone (FISF)</p>
          <p><span className="text-foreground font-semibold">Adresse :</span> Avenue Minerve 33, 1190 Forest, Belgique</p>
          <p><span className="text-foreground font-semibold">Email :</span>{" "}
            <a href="mailto:contact@tunis-cdm-scrabble-2026.org" className="text-primary hover:underline">
              contact@tunis-cdm-scrabble-2026.org
            </a>
          </p>
          <p><span className="text-foreground font-semibold">Site web :</span>{" "}
            <a href="https://www.fisf.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.fisf.net
            </a>
          </p>
        </div>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Co-organisateur</h2>
        <div className="text-muted-foreground text-sm space-y-2 leading-relaxed">
          <p><span className="text-foreground font-semibold">Dénomination :</span> Association Scrabble® Tunisie (ASTUS)</p>
          <p><span className="text-foreground font-semibold">Pays :</span> Tunisie</p>
          <p>En partenariat avec la Fédération Française de Scrabble® (FFSc) —{" "}
            <a href="https://www.ffscrabble.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.ffscrabble.fr
            </a>
          </p>
        </div>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Hébergement du site</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ce site est hébergé par un prestataire technique. Pour toute information relative à l'hébergement, veuillez contacter{" "}
          <a href="mailto:contact@tunis-cdm-scrabble-2026.org" className="text-primary hover:underline">
            contact@tunis-cdm-scrabble-2026.org
          </a>.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Propriété intellectuelle</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos, etc.) sont protégés par le droit d'auteur et sont la propriété exclusive de la FISF et de ses partenaires, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Limitation de responsabilité</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          La FISF s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'éditeur décline toute responsabilité pour tout dommage résultant de l'utilisation des informations disponibles sur ce site.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ce site peut contenir des liens hypertextes vers d'autres sites internet. La FISF n'est pas responsable du contenu des sites vers lesquels ces liens pointent.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Données personnelles</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          La collecte et le traitement de vos données personnelles sont régis par notre{" "}
          <a href="/politique-de-confidentialite" className="text-primary hover:underline">
            Politique de confidentialité
          </a>{" "}
          et notre{" "}
          <a href="/politique-des-cookies" className="text-primary hover:underline">
            Politique des cookies
          </a>.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Droit applicable</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Les présentes mentions légales sont soumises au droit belge. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de la FISF, sauf disposition légale contraire.
        </p>
      </section>

      <p className="text-muted-foreground text-xs text-right">
        Dernière mise à jour : janvier 2026
      </p>
    </div>
  </PageLayout>
);

export default MentionsLegales;
