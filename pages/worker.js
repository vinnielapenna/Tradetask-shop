import Header from "../components/Header";
import { useSession } from "next-auth/react";
import { hires } from "../lib/data";

export default function WorkerDashboard() {
  const { data: session } = useSession();
  const email = session?.user?.email || "worker1@example.com"; // default fallback

  const incoming = hires.filter((h) => h.to === email);

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Worker Dashboard</h1>

        <section>
          <h2>Incoming Hire Requests</h2>
          {incoming.length > 0 ? (
            <ul>
              {incoming.map((h, i) => (
                <li key={i}>
                  <strong>{h.title}</strong> from {h.from} <br />
                  <em>{h.location}</em><br />
                  {h.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No incoming hire requests.</p>
          )}
        </section>
      </main>
    </>
  );
}
