export default function CropCard({ crop }) {
  return (
    <div>
      <h3>{crop.cropType}</h3>
      <p>Quantity: {crop.quantity}</p>
      <p>Location: {crop.location}</p>
      <p>Farmer: {crop.farmer}</p>
      <p>Price: {crop.price} ETH</p>
      <button>Confirm Delivery</button>
    </div>
  );
}
