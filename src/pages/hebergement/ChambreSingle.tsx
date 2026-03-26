import VerdiRoomPage from "@/components/VerdiRoomPage";

const ChambreSingle = () => (
  <VerdiRoomPage
    title="Chambre Single"
    subtitle="Petit déjeuner"
    image="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/verid_single.webp"
    price={88}
    maxAdults={1}
    maxChildren={1}
    period={{ from: "11/07/2026", to: "01/08/2026" }}
    remise="Aucune remise n'a été consentie pour cause de haute saison."
  />
);

export default ChambreSingle;
