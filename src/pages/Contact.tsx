import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Mail, MapPin, Globe, Phone, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout title="Contactez-nous" subtitle="Une question ? Écrivez-nous">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">

        {/* Top info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-foreground font-bold text-xl mb-6">Comité d'Organisation</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-bold text-sm">Lieu de l'événement</p>
                  <p className="text-muted-foreground text-sm">Regency Tunis Hôtel, Gammarth, Tunis, Tunisie</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-bold text-sm">Email</p>
                  <a
                    href="mailto:contact@tunis-cdm-scrabble-2026.org"
                    className="text-primary text-sm hover:underline"
                  >
                    contact@tunis-cdm-scrabble-2026.org
                  </a>
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
                <p className="text-muted-foreground text-sm">Fédération Internationale de Scrabble Francophone</p>
                <p className="text-muted-foreground text-xs">Avenue Minerve 33, 1190 Forest, Belgique</p>
                <a href="https://www.fisf.net/" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                  www.fisf.net
                </a>
              </div>
              <div>
                <h4 className="text-primary font-bold text-sm mb-1">ASTUS</h4>
                <p className="text-muted-foreground text-sm">Association Scrabble Tunisie</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-sm mb-1">FFSc</h4>
                <p className="text-muted-foreground text-sm">Fédération Française de Scrabble</p>
                <a href="https://www.ffscrabble.fr/" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                  www.ffscrabble.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-14">
          <h2 className="font-display text-foreground font-bold text-2xl mb-2">Formulaire de contact</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Utilisez ce formulaire pour toute demande d'information relative aux 54<sup>es</sup> Championnats du Monde de Scrabble Francophone.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <CheckCircle className="w-12 h-12 text-primary" />
              <h3 className="font-display text-foreground font-bold text-xl">Message envoyé !</h3>
              <p className="text-muted-foreground text-sm max-w-md">
                Merci pour votre message. Nous vous répondrons dans les meilleurs délais à l'adresse email indiquée.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ prenom: "", nom: "", email: "", telephone: "", sujet: "", message: "", consent: false }); }}
                className="btn-outline-gold text-xs px-6 py-2.5 mt-4"
              >
                Envoyer un nouveau message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2" htmlFor="prenom">
                    Prénom <span className="text-primary">*</span>
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    value={form.prenom}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2" htmlFor="nom">
                    Nom <span className="text-primary">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2" htmlFor="email">
                    Adresse e-mail <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2" htmlFor="telephone">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2" htmlFor="sujet">
                  Sujet <span className="text-primary">*</span>
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  required
                  value={form.sujet}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="inscriptions">Inscriptions</option>
                  <option value="hebergement">Hébergement</option>
                  <option value="programme">Programme</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="presse">Presse / Médias</option>
                  <option value="sejour-jeunes">Séjour des Jeunes</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2" htmlFor="message">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 accent-primary"
                />
                <label htmlFor="consent" className="text-muted-foreground text-xs leading-relaxed">
                  J'accepte que mes données personnelles soient utilisées pour traiter ma demande conformément à la{" "}
                  <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialité
                  </a>
                  . <span className="text-primary">*</span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-outline-gold text-xs px-8 py-3 inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </div>
            </form>
          )}
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
};

export default Contact;
