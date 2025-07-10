import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link href="/" style={{ marginRight: 10 }}>Home</Link>
      <Link href="/jobs" style={{ marginRight: 10 }}>Jobs</Link>
      <Link href="/shop" style={{ marginRight: 10 }}>Shop</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}