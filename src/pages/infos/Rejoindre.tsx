import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Plane, Car, MapPin, Bus } from "lucide-react";

const Rejoindre = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    fromVerdi: false,
    email: "",
    phone: "",
    arrivalDate: "",
    arrivalTime: "",
    arrivalFlight: "",
    departureDate: "",
    departureTime: "",
    departureFlight: "",
    info: "",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout title="Rejoindre l'hôtel" subtitle="Transferts et transport">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Shuttle reservation form */}
        <AnimatedSection variant="fade-up">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
            <h3 className="font-heading text-2xl italic text-foreground mb-2 flex items-center gap-3">
              <Bus className="w-6 h-6 text-primary" />
              Demandes de réservation de navette
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Réservez votre transfert entre l'aéroport Tunis-Carthage et l'hôtel.
            </p>

            <div className="space-y-6">
              {/* Identity */}
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold mb-3">
                  Identité *
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground text-xs mb-1 block">Prénom</Label>
                    <Input
                      value={form.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs mb-1 block">Nom</Label>
                    <Input
                      value={form.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Verdi checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox
                  id="fromVerdi"
                  checked={form.fromVerdi}
                  onCheckedChange={(v) => handleChange("fromVerdi", v === true)}
                />
                <label htmlFor="fromVerdi" className="text-muted-foreground text-sm cursor-pointer">
                  du Verdi *
                </label>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground text-xs mb-1 block">Email *</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-input border-border"
                    required
                  />
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs mb-1 block">Téléphone *</Label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-input border-border"
                    required
                  />
                </div>
              </div>

              {/* Arrival */}
              <div className="border-t border-border pt-4">
                <p className="text-primary text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  Aller : Aéroport Tunis Carthage → Hôtel Verdi / Regency Tunis Hôtel *
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <div>
                    <Label className="text-muted-foreground text-xs mb-1 block">Date</Label>
                    <Input
                      type="date"
                      value={form.arrivalDate}
                      onChange={(e) => handleChange("arrivalDate", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs mb-1 block">Heure</Label>
                    <Input
                      type="time"
                      value={form.arrivalTime}
                      onChange={(e) => handleChange("arrivalTime", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>
                <p className="text-muted-foreground text-xs italic mb-3">
                  Veuillez sélectionner la date et l'heure du jour de votre arrivée.
                </p>
                <div>
                  <Label className="text-muted-foreground text-xs mb-1 block">
                    Compagnie aérienne et N° du vol d'arrivée *
                  </Label>
                  <Input
                    value={form.arrivalFlight}
                    onChange={(e) => handleChange("arrivalFlight", e.target.value)}
                    placeholder="Ex: Tunisair TU 720"
                    className="bg-input border-border"
                    required
                  />
                </div>
              </div>

              {/* Return */}
              <div className="border-t border-border pt-4">
                <p className="text-primary text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                  <Plane className="w-4 h-4 rotate-180" />
                  Retour : Regency Tunis Hôtel / Hôtel Verdi → Aéroport Tunis Carthage *
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <div>
                    <Label className="text-muted-foreground text-xs mb-1 block">Date</Label>
                    <Input
                      type="date"
                      value={form.departureDate}
                      onChange={(e) => handleChange("departureDate", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs mb-1 block">Heure</Label>
                    <Input
                      type="time"
                      value={form.departureTime}
                      onChange={(e) => handleChange("departureTime", e.target.value)}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>
                <p className="text-muted-foreground text-xs italic mb-3">
                  Veuillez sélectionner la date et l'heure du jour de votre départ.
                </p>
                <div>
                  <Label className="text-muted-foreground text-xs mb-1 block">
                    Compagnie aérienne et N° du vol de retour *
                  </Label>
                  <Input
                    value={form.departureFlight}
                    onChange={(e) => handleChange("departureFlight", e.target.value)}
                    placeholder="Ex: Tunisair TU 721"
                    className="bg-input border-border"
                    required
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <Label className="text-muted-foreground text-xs mb-1 block">Information :</Label>
                <textarea
                  value={form.info}
                  onChange={(e) => handleChange("info", e.target.value)}
                  className="w-full bg-input border border-border rounded-md p-3 text-foreground text-sm min-h-[80px] resize-y"
                  placeholder="Informations complémentaires..."
                />
              </div>

              <button
                className="btn-outline-gold w-full text-center"
                disabled={
                  !form.firstName ||
                  !form.lastName ||
                  !form.email ||
                  !form.phone ||
                  !form.arrivalDate ||
                  !form.arrivalFlight ||
                  !form.departureDate ||
                  !form.departureFlight
                }
              >
                Réserver une navette
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Other transport options */}
        <AnimatedSection variant="fade-up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/vehicule_location.webp"
                alt="Location de véhicule"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-foreground font-bold text-lg mb-2 flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary" />
                  Louer un véhicule
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Des agences de location de véhicules sont disponibles à l'aéroport et en ville
                  pour vous permettre de vous déplacer librement pendant votre séjour.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/taxi_tunisien.webp"
                alt="Taxi tunisien"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-foreground font-bold text-lg mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Héler un taxi
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Des taxis sont disponibles à la sortie de l'aéroport et dans toute la ville.
                  Privilégiez les taxis jaunes avec compteur pour vos déplacements.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
};

export default Rejoindre;
