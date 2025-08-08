import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 p-4 border-b">
      <ul className="flex gap-4 text-sm font-medium">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link href="/connections" className="hover:underline">Connections</Link>
        </li>
      </ul>
    </nav>
  );
}
