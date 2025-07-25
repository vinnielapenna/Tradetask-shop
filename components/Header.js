import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link href="/" style={{ marginRight: 15 }}>Home</Link>
      <Link href="/jobs" style={{ marginRight: 15 }}>Jobs</Link>
      <Link href="/post-job" style={{ marginRight: 15 }}>Post Job</Link>
      <Link href="/shop" style={{ marginRight: 15 }}>Shop</Link>
      <Link href="/dashboard" style={{ marginRight: 15 }}>Dashboard</Link>
      <Link href="/worker" style={{ marginRight: 15 }}>Worker</Link>
      <Link href="/leave-review" style={{ marginRight: 15 }}>Leave Review</Link>
      <Link href="/vouch" style={{ marginRight: 15 }}>Vouch</Link>
      <Link href="/points" style={{ marginRight: 15 }}>Points</Link>
      <Link href="/messages" style={{ marginRight: 15 }}>Messages</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}


