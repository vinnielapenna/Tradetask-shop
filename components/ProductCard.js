export default function ProductCard({ product }) {
  return (
    <a href={product.link} target="_blank" rel="noopener noreferrer" style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      textAlign: "center",
      textDecoration: "none",
      color: "#000",
      backgroundColor: "#f9f9f9"
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </a>
  );
}
