import { useSession } from "next-auth/react";
import Header from "../components/Header";

const mockJobs = [
  { id: 1, title: "Drywall Repair", completedBy: "worker1@example.com" },
  { id: 2, title: "Fence Painting", completedBy: "worker1@example.com" },
  { id: 3, title: "Garage Cleanup", completedBy: "worker2@example.com" }
];

const mockVouches = [
  { from: "worker2@example.com", to: "worker1@example.com", comment: "Always on time and skilled!", rating: 5 },
  { from: "worker3@example.com", to: "worker1@example.com", comment: "Reliable teammate", rating: 4 }
];

function calculateTier(points) {
  if (points >= 10) return "Gold";
  if (points >= 5) return "Silver";
  return "Bronze";
}

export default function WorkerDashboard() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const completedJobs = mockJobs.filter(job => job.completedBy === userEmail);
  const receivedVouches = mockVouches.filter(v => v.to === userEmail);
  const totalPoints = completedJobs.length + receivedVouches.length;
  const tier = calculateTier(totalPoints);

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Worker Dashboard</h1>
        {userEmail ? (
          <>
            <p>Welcome, {userEmail}</p>
            <p>Tier: <strong>{tier}</strong> ({totalPoints} pts)</p>
            <h3>Completed Jobs</h3>
            <ul>
              {completedJobs.map(job => (
                <li key={job.id}>{job.title}</li>
              ))}
              {completedJobs.length === 0 && <li>No jobs recorded.</li>}
            </ul>
            <h3>Vouches Received</h3>
            <ul>
              {receivedVouches.map((v, idx) => (
                <li key={idx}>
                  From: {v.from} | Rating: {v.rating}⭐<br />
                  "{v.comment}"
                </li>
              ))}
              {receivedVouches.length === 0 && <li>No vouches yet.</li>}
            </ul>
          </>
        ) : (
          <p>Please log in to view your dashboard.</p>
        )}
      </main>
    </>
  );
}
