import { useState } from "react";
import PageLayout from "./PageLayout";
import AnimatedSection from "./AnimatedSection";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Link } from "react-router-dom";
import { CalendarDays, Users, AlertTriangle } from "lucide-react";

interface VerdiRoomPageProps {
  title: string;
  subtitle: string;
  image: string;
  price: number;
  maxAdults: number;
  maxChildren: number;
  period: { from: string; to: string };
  remise: string;
}

const countries = [
  "Afghanistan", "Algérie", "Allemagne", "Belgique", "Bénin", "Burkina Faso", "Burundi",
  "Cameroun", "Canada", "Comores", "Congo", "Côte d'Ivoire", "Djibouti", "Égypte",
  "Espagne", "France", "Gabon", "Grèce", "Guinée", "Haïti", "Italie", "Liban",
  "Luxembourg", "Madagascar", "Mali", "Maroc", "Maurice", "Mauritanie", "Monaco",
  "Niger", "République centrafricaine", "République démocratique du Congo", "Roumanie",
  "Rwanda", "Sénégal", "Seychelles", "Suisse", "Tchad", "Togo", "Tunisie", "Vanuatu",
];

const VerdiRoomPage = ({
  title,
  subtitle,
  image,
  price,
  maxAdults,
  maxChildren,
  period,
  remise,
}: VerdiRoomPageProps) => {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [rooms, setRooms] = useState("1");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [accepted, setAccepted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: "",
    region: "",
    companionFirstName: "",
    companionLastName: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate nights & total
  let nights = 0;
  let total = 0;
  if (arrivalDate && departureDate) {
    const d1 = new Date(arrivalDate);
    const d2 = new Date(departureDate);
    nights = Math.max(0, Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
    total = nights * price * parseInt(rooms || "1");
  }

  return (
    <PageLayout title={`Hôtel Verdi – ${title}`} subtitle={subtitle}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Room image & price */}
        <AnimatedSection variant="fade-up">
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <img
              src={image}
              alt={title}
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-foreground text-lg">
                Tarif : <span className="text-primary font-bold text-2xl">{price},00 €</span>
                <span className="text-muted-foreground text-sm ml-1">/ nuit</span>
              </p>
              <div className="mt-3 bg-secondary border-l-4 border-accent rounded p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-bold text-foreground">Remises :</span> {remise}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Availability check */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
            <h3 className="font-heading text-xl italic text-foreground mb-6 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              Vérifiez le prix et la disponibilité
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Date d'arrivée
                </Label>
                <Input
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  min="2026-07-11"
                  max="2026-08-01"
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Date de départ
                </Label>
                <Input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min="2026-07-12"
                  max="2026-08-01"
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Nombre de logements
                </Label>
                <Select value={rooms} onValueChange={setRooms}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Adultes
                </Label>
                <Select value={adults} onValueChange={setAdults}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: maxAdults }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Enfants
                </Label>
                <Select value={children} onValueChange={setChildren}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: maxChildren + 1 }, (_, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Personal info form */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
            <h3 className="font-heading text-xl italic text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Entrez vos informations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Prénom *
                </Label>
                <Input
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="bg-input border-border"
                  required
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Nom *
                </Label>
                <Input
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="bg-input border-border"
                  required
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Email *
                </Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-input border-border"
                  required
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Téléphone
                </Label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div className="sm:col-span-2">
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Adresse 1
                </Label>
                <Input
                  value={form.address1}
                  onChange={(e) => handleChange("address1", e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div className="sm:col-span-2">
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Adresse 2
                </Label>
                <Input
                  value={form.address2}
                  onChange={(e) => handleChange("address2", e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Ville *
                </Label>
                <Input
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="bg-input border-border"
                  required
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Code postal
                </Label>
                <Input
                  value={form.postalCode}
                  onChange={(e) => handleChange("postalCode", e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Pays *
                </Label>
                <Select value={form.country} onValueChange={(v) => handleChange("country", v)}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Sélectionnez un pays" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Région / Département
                </Label>
                <Input
                  value={form.region}
                  onChange={(e) => handleChange("region", e.target.value)}
                  className="bg-input border-border"
                />
              </div>

              {/* Companion fields */}
              <div className="sm:col-span-2 border-t border-border pt-4 mt-2">
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold mb-4">
                  Accompagnant
                </p>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Prénom accompagnant
                </Label>
                <Input
                  value={form.companionFirstName}
                  onChange={(e) => handleChange("companionFirstName", e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs uppercase tracking-widest mb-2 block">
                  Nom accompagnant
                </Label>
                <Input
                  value={form.companionLastName}
                  onChange={(e) => handleChange("companionLastName", e.target.value)}
                  className="bg-input border-border"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Summary & submit */}
        <AnimatedSection variant="fade-up" delay={0.3}>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            {nights > 0 && (
              <div className="mb-6">
                <h3 className="font-heading text-xl italic text-foreground mb-4">Résumé</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-muted-foreground py-2 font-body text-xs uppercase tracking-widest">
                          Période
                        </th>
                        <th className="text-left text-muted-foreground py-2 font-body text-xs uppercase tracking-widest">
                          Du
                        </th>
                        <th className="text-left text-muted-foreground py-2 font-body text-xs uppercase tracking-widest">
                          Au
                        </th>
                        <th className="text-right text-muted-foreground py-2 font-body text-xs uppercase tracking-widest">
                          Prix
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 text-foreground">54<sup>es</sup> CDM Scrabble</td>
                        <td className="py-3 text-muted-foreground">{arrivalDate}</td>
                        <td className="py-3 text-muted-foreground">{departureDate}</td>
                        <td className="py-3 text-right text-primary font-bold">
                          {total.toFixed(2)} €
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-xs mt-3">
                  {nights} nuit{nights > 1 ? "s" : ""} × {price},00 € × {rooms} logement
                  {parseInt(rooms) > 1 ? "s" : ""}
                </p>
              </div>
            )}

            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="privacy"
                checked={accepted}
                onCheckedChange={(v) => setAccepted(v === true)}
                className="mt-1"
              />
              <label htmlFor="privacy" className="text-muted-foreground text-sm leading-relaxed cursor-pointer">
                J'ai lu et j'accepte la{" "}
                <span className="text-primary underline">politique de confidentialité</span> pour
                cette réservation. Je donne mon consentement pour que les informations ci-dessus
                soient collectées.
              </label>
            </div>

            <p className="text-muted-foreground text-sm italic mb-6">
              Vous paierez votre séjour à un stade ultérieur. Le prix total est{" "}
              <span className="text-primary font-bold">{total > 0 ? `${total.toFixed(2)} €` : "—"}</span>
            </p>

            <p className="text-muted-foreground text-xs mb-6">
              Veuillez vérifier les détails de votre réservation avant de cliquer sur « Réserver maintenant ».
            </p>

            <button
              className="btn-outline-gold w-full text-center"
              disabled={!accepted || !arrivalDate || !departureDate || !form.firstName || !form.lastName || !form.email || !form.city || !form.country}
            >
              Réserver maintenant
            </button>

            <div className="text-center mt-4">
              <Link to="/hebergement/verdi" className="text-primary text-sm hover:underline">
                ← Retour aux chambres
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
};

export default VerdiRoomPage;
