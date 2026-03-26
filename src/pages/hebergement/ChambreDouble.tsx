import VerdiRoomPage from "@/components/VerdiRoomPage";

const ChambreDouble = () => (
  <VerdiRoomPage
    title="Chambre Double"
    subtitle="Petit déjeuner"
    image="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/verdi-twin_double.webp"
    price={104}
    maxAdults={2}
    maxChildren={2}
    period={{ from: "11/07/2026", to: "01/08/2026" }}
    remise="Aucune remise n'a été consentie pour cause de haute saison."
  />
);

export default ChambreDouble;
