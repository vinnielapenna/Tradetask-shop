import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Heavy-Duty Work Gloves",
    image: "/gloves.jpg",
    link: "https://www.amazon.com/s?k=work+gloves",
    price: "$12.99"
  },
  {
    id: 2,
    name: "Steel Toe Work Boots",
    image: "/boots.jpg",
    link: "https://www.amazon.com/s?k=steel+toe+boots",
    price: "$59.99"
  },
  {
    id: 3,
    name: "Cordless Drill Set",
    image: "/drill.jpg",
    link: "https://www.amazon.com/s?k=cordless+drill",
    price: "$79.99"
  },
  {
    id: 4,
    name: "HVAC Multimeter Tool",
    image: "/multimeter.jpg",
    link: "https://www.amazon.com/s?k=hvac+multimeter",
    price: "$34.99"
  }
];

export default function ShopPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Tool Shop</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem"
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}