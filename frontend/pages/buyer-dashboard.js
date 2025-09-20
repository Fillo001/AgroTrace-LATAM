import CropCard from "../components/CropCard";

export default function BuyerDashboard() {
  const crops = []; // Replace with actual data from contract
  return (
    <div>
      <h2>Buyer Dashboard</h2>
      {crops.map((crop, index) => (
        <CropCard key={index} crop={crop} />
      ))}
    </div>
  );
}
