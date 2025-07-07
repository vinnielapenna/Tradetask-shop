// pages/jobs.js
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://tradetask-backend.onrender.com/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Failed to load jobs", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="p-4 bg-white rounded shadow">
            <div className="font-semibold">{job.title}</div>
            <div className="text-sm text-gray-600">{job.location}</div>
            <p className="text-sm mt-2">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
