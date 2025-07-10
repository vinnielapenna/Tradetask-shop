import JobCard from "../components/JobCard";
import Header from "../components/Header";

const jobs = [
  {
    id: 1,
    title: "Framing Carpenter",
    company: "Precision Builders",
    location: "Detroit, MI",
    rate: "$25/hr",
    trade: "Carpentry"
  },
  {
    id: 2,
    title: "Journeyman Electrician",
    company: "Volt Solutions",
    location: "Cleveland, OH",
    rate: "$32/hr",
    trade: "Electrical"
  },
  {
    id: 3,
    title: "Roofing Laborer",
    company: "TopShield Roofing",
    location: "Toledo, OH",
    rate: "$18/hr",
    trade: "Roofing"
  },
  {
    id: 4,
    title: "Plumber's Apprentice",
    company: "Fast Flow Plumbing",
    location: "Grand Rapids, MI",
    rate: "$20/hr",
    trade: "Plumbing"
  }
];

export default function JobsPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Available Jobs</h1>
        <div style={{ display: "grid", gap: "1rem", padding: "1rem" }}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </>
  );
}