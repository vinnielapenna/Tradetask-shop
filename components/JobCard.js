export default function JobCard({ job }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
    }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Trade:</strong> {job.trade}</p>
      <p><strong>Pay Rate:</strong> {job.rate}</p>
    </div>
  );
}