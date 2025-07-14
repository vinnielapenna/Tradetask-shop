import Header from "../components/Header";
import { useState } from "react";
import { vouches, reviews } from "../lib/data";

const mockWorkers = [
  { email: "worker1@example.com", name: "John D." },
  { email: "worker2@example.com", name: "Sarah T." },
  { email: "worker3@example.com", name: "Mike R." }
];

export default function WorkersPage() {
  const [query, setQuery] = useState("");

  const filtered = mockWorkers.filter((w) =>
    w.name.toLowerCase().includes(query.toLowerCase()) ||
    w.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Find Workers</h1>
        <input
          placeholder="Search by name or email"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%", maxWidth: 400 }}
        />
        <ul>
          {filtered.map((w) => (
            <li key={w.email}>
              <a href={`/profile/${w.email}`}>{w.name}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
