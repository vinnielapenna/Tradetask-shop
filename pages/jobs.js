import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://tradetask-backend.onrender.com/jobs")
      .then(res => res.json())
      .then(setJobs)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>
            <strong>{job.title}</strong> - {job.location}
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
