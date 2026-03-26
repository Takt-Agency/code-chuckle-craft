import PageLayout from "@/components/PageLayout";

const PolitiqueCookies = () => (
  <PageLayout title="Politique des cookies" subtitle="Utilisation des cookies sur notre site">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-10">

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Qu'est-ce qu'un cookie ?</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur un site internet. Il permet au site de mémoriser certaines informations relatives à votre navigation, afin d'améliorer votre expérience et de vous proposer des services adaptés.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Les cookies ne peuvent pas endommager votre terminal et ne permettent pas de vous identifier personnellement sans votre consentement.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Les cookies utilisés sur ce site</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-display text-foreground font-semibold text-base mb-2">1. Cookies strictement nécessaires</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent d'utiliser les principales fonctionnalités du site (navigation, accès à des zones sécurisées, etc.). Sans ces cookies, certains services ne peuvent pas fonctionner correctement. Ils ne nécessitent pas votre consentement.
            </p>
          </div>

          <div>
            <h3 className="font-display text-foreground font-semibold text-base mb-2">2. Cookies de préférences</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ces cookies permettent au site de mémoriser vos choix et préférences (langue, région, paramètres d'affichage) afin de vous offrir une expérience personnalisée lors de vos prochaines visites.
            </p>
          </div>

          <div>
            <h3 className="font-display text-foreground font-semibold text-base mb-2">3. Cookies analytiques / de mesure d'audience</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ces cookies nous permettent de mesurer l'audience du site, d'analyser les comportements des visiteurs (pages visitées, durée de visite, taux de rebond) afin d'améliorer le contenu et les fonctionnalités du site. Ces données sont collectées de manière anonyme et agrégée.
            </p>
          </div>

          <div>
            <h3 className="font-display text-foreground font-semibold text-base mb-2">4. Cookies de réseaux sociaux</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ces cookies sont déposés par les plateformes de réseaux sociaux (Facebook, Twitter/X, YouTube, etc.) lorsque vous interagissez avec des boutons de partage ou des contenus intégrés depuis ces plateformes. Leur utilisation est soumise à la politique de confidentialité de chaque réseau social concerné.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Durée de conservation des cookies</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-foreground font-semibold py-2 pr-4">Type de cookie</th>
                <th className="text-left text-foreground font-semibold py-2 pr-4">Durée maximale</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Cookies de session</td>
                <td className="py-2">Supprimés à la fermeture du navigateur</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Cookies de préférences</td>
                <td className="py-2">13 mois</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Cookies analytiques</td>
                <td className="py-2">13 mois</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Cookies réseaux sociaux</td>
                <td className="py-2">Selon la politique du réseau social</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Gérer vos préférences</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lors de votre première visite sur notre site, un bandeau d'information vous informe de l'utilisation des cookies et vous permet d'accepter ou de refuser leur dépôt.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Vous pouvez également gérer vos préférences en matière de cookies directement depuis votre navigateur. La plupart des navigateurs vous permettent de :
        </p>
        <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li>Consulter les cookies stockés sur votre terminal</li>
          <li>Accepter ou refuser certains cookies ou l'ensemble des cookies</li>
          <li>Supprimer les cookies existants</li>
          <li>Être averti avant qu'un cookie soit enregistré</li>
        </ul>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pour configurer votre navigateur, consultez l'aide disponible sur votre navigateur :
        </p>
        <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Apple Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Attention : la désactivation de certains cookies peut affecter le bon fonctionnement du site ou la qualité de votre expérience de navigation.
        </p>
      </section>

      <section className="bg-card border border-border rounded-lg p-8 space-y-4">
        <h2 className="font-display text-foreground font-bold text-xl">Contact</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pour toute question relative à notre politique des cookies, vous pouvez nous contacter :
        </p>
        <div className="text-muted-foreground text-sm space-y-1">
          <p><span className="text-foreground font-semibold">Par e-mail :</span>{" "}
            <a href="mailto:contact@tunis-cdm-scrabble-2026.org" className="text-primary hover:underline">
              contact@tunis-cdm-scrabble-2026.org
            </a>
          </p>
          <p><span className="text-foreground font-semibold">Par courrier :</span> FISF, Avenue Minerve 33, 1190 Forest, Belgique</p>
        </div>
      </section>

      <p className="text-muted-foreground text-xs text-right">
        Dernière mise à jour : janvier 2026
      </p>
    </div>
  </PageLayout>
);

export default PolitiqueCookies;
