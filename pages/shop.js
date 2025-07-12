import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Jukmo Tactical Belt",
    image: "https://m.media-amazon.com/images/I/81cr3lwVSxL._AC_SY355_.jpg",
    link: "https://amzn.to/4lUTUyu",
    price: "$19.98",
    category: "Belt"
  },
  {
    id: 2,
    name: "Rexbeti Knee Pads",
    image: "https://m.media-amazon.com/images/I/81gkjvd9YFL._AC_SX425_.jpg",
    link: "https://amzn.to/40NoZM9",
    price: "$24.99",
    category: "Kneepads"
  },
  {
    id: 3,
    name: "HAPPY NUTS Comfort Cream Deodorant",
    image: "https://m.media-amazon.com/images/I/61cG+UEBCxL._SX522_.jpg",
    link: "https://amzn.to/44J6J7X",
    price: "$14.99",
    category: "Deoderant"
  },
  {
    id: 4,
    name: "Dickies Men's Socks",
    image: "https://m.media-amazon.com/images/I/91DfBeaGyPL._AC_SY741_.jpg",
    link: "https://amzn.to/40KBojR",
    price: "$11.10",
    category: "Socks"
  },
  {
    id: 5,
    name: "Neck Fan, AI 6 Speed Powerful Portable Fan",
    image: "https://m.media-amazon.com/images/I/71EUT9awcGL._AC_SX425_.jpg",
    link: "https://amzn.to/4lMZ5QH",
    price: "$29.99",
    category: "Fan"
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
