import PageLayout from "@/components/PageLayout";

const PolitiqueConfidentialite = () => (
  <PageLayout title="Politique de confidentialité" subtitle="Protection de vos données personnelles">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-10">

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Introduction</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          La Fédération Internationale de Scrabble® Francophone (FISF), en tant que responsable de traitement, s'engage à protéger la vie privée des utilisateurs du site{" "}
          <a href="https://www.tunis-cdm-scrabble-2026.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            www.tunis-cdm-scrabble-2026.org
          </a>.
          La présente politique a pour objet d'informer les utilisateurs des modalités de collecte, d'utilisation et de protection de leurs données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Données collectées</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Dans le cadre de l'utilisation du formulaire de contact, nous collectons les données suivantes :
        </p>
        <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li>Prénom et nom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone (facultatif)</li>
          <li>Sujet et contenu du message</li>
        </ul>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ces données sont des données d'identification et de contact collectées directement auprès des personnes concernées.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Base légale du traitement</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          La base légale du traitement est le <span className="text-foreground font-semibold">consentement</span> de la personne concernée, recueilli de manière libre, claire et sans équivoque lors de la soumission du formulaire de contact, conformément aux articles 4 et 7 du RGPD.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Vous pouvez retirer votre consentement à tout moment en nous contactant à l'adresse indiquée ci-dessous.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Finalités du traitement</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Les informations recueillies sur le formulaire sont enregistrées dans un fichier informatisé afin de :
        </p>
        <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li>Répondre aux demandes d'information relatives aux Championnats du Monde de Scrabble® Francophone</li>
          <li>Assurer le suivi des demandes</li>
          <li>Améliorer nos services</li>
        </ul>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Durée de conservation</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Vos données seront conservées <span className="text-foreground font-semibold">2 mois</span> à partir du dernier contact, puis anonymisées et conservées à des fins historiques et statistiques pour une durée de <span className="text-foreground font-semibold">36 mois</span>.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Destinataires des données</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Vos données personnelles sont destinées au comité d'organisation des 54<sup>es</sup> Championnats du Monde de Scrabble® Francophone. Elles sont traitées par le responsable de la gestion commerciale, membre habilité de la société <span className="text-foreground font-semibold">Skaleet</span>, prestataire technique du site.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Elles ne sont pas transmises à d'autres tiers sans votre consentement préalable, sauf obligation légale.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Vos droits</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
        </p>
        <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li><span className="text-foreground font-semibold">Droit d'accès</span> : obtenir une copie de vos données</li>
          <li><span className="text-foreground font-semibold">Droit de rectification</span> : corriger des données inexactes</li>
          <li><span className="text-foreground font-semibold">Droit à l'effacement</span> : demander la suppression de vos données</li>
          <li><span className="text-foreground font-semibold">Droit au retrait du consentement</span> : à tout moment, sans porter atteinte à la licéité du traitement antérieur</li>
          <li><span className="text-foreground font-semibold">Droit d'opposition</span> : vous opposer au traitement de vos données</li>
          <li><span className="text-foreground font-semibold">Droit à la portabilité</span> : recevoir vos données dans un format structuré</li>
        </ul>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Exercer vos droits</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pour exercer ces droits ou pour toute question relative à la protection de vos données, vous pouvez contacter la FISF :
        </p>
        <div className="text-muted-foreground text-sm space-y-1 leading-relaxed">
          <p><span className="text-foreground font-semibold">Par courrier postal :</span> Avenue Minerve 33, 1190 Forest, Belgique</p>
          <p><span className="text-foreground font-semibold">Par e-mail :</span>{" "}
            <a href="mailto:jcapdevi@gmail.com" className="text-primary hover:underline">jcapdevi@gmail.com</a>
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Si vous estimez que le traitement de vos données n'est pas conforme à la réglementation, vous pouvez introduire une réclamation auprès de l'Autorité de protection des données compétente.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Sécurité des données</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
        </p>
      </section>

      <p className="text-muted-foreground text-xs text-right">
        Dernière mise à jour : janvier 2026
      </p>
    </div>
  </PageLayout>
);

export default PolitiqueConfidentialite;
