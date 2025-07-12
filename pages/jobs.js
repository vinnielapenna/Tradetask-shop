import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(setJobs);
  }, []);

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(query.toLowerCase()) ||
    job.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Browse Jobs</h1>
        <input
          placeholder="Search by title or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%", maxWidth: "400px" }}
        />
        <ul>
          {filtered.map(job => (
            <li key={job.id}>
              <strong>{job.title}</strong> — {job.location}
            </li>
          ))}
          {filtered.length === 0 && <li>No results found.</li>}
        </ul>
      </main>
    </>
  );
}
