import { useSession } from "next-auth/react";
import Header from "../components/Header";

const mockJobs = [
  { id: 1, title: "Drywall Repair", description: "Patch and refinish a small hole in the wall.", postedBy: "test@example.com" },
  { id: 2, title: "Fence Painting", description: "Paint 50ft of wooden fence.", postedBy: "test@example.com" },
  { id: 3, title: "Garage Cleanup", description: "Clear out and organize a 2-car garage.", postedBy: "someoneelse@example.com" }
];

export default function Dashboard() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const myJobs = mockJobs.filter(job => job.postedBy === userEmail);

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>My Dashboard</h1>
        {userEmail ? <p>Welcome, {userEmail}</p> : <p>Please log in to view your dashboard.</p>}
        <ul>
          {myJobs.map(job => (
            <li key={job.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button style={{ marginRight: "10px" }}>Edit</button>
              <button>Delete</button>
            </li>
          ))}
          {myJobs.length === 0 && userEmail && <p>No jobs posted yet.</p>}
        </ul>
      </main>
    </>
  );
}
