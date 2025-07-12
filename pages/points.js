import { useSession } from "next-auth/react";
import Header from "../components/Header";

const mockActivity = [
  { type: "job", description: "Completed: Drywall Repair", email: "worker1@example.com" },
  { type: "vouch", description: "Vouched by: worker2@example.com", email: "worker1@example.com" },
  { type: "job", description: "Completed: Fence Painting", email: "worker1@example.com" },
  { type: "vouch", description: "Vouched by: worker3@example.com", email: "worker1@example.com" }
];

export default function PointsPage() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const history = mockActivity.filter(entry => entry.email === userEmail);
  const points = history.length;
  const tier = points >= 10 ? "Gold" : points >= 5 ? "Silver" : "Bronze";

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Points History</h1>
        {userEmail ? (
          <>
            <p>Total Points: <strong>{points}</strong> (Tier: {tier})</p>
            <ul>
              {history.map((entry, idx) => (
                <li key={idx}>{entry.description} (+1pt)</li>
              ))}
              {history.length === 0 && <li>No activity yet.</li>}
            </ul>
          </>
        ) : (
          <p>Please log in to view your point history.</p>
        )}
      </main>
    </>
  );
}
