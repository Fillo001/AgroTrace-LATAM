export default function CropForm() {
  return (
    <form>
      <input type="text" placeholder="Crop Type" />
      <input type="number" placeholder="Quantity" />
      <input type="text" placeholder="Location" />
      <input type="text" placeholder="Buyer Address" />
      <input type="number" placeholder="Price (ETH)" />
      <button type="submit">Submit Crop</button>
    </form>
  );
}
