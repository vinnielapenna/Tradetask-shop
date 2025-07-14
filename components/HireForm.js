import { useState } from "react";

export default function HireForm({ workerEmail }) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    from: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/hire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, to: workerEmail })
    });
    setSubmitted(true);
  };

  if (submitted) return <p>Hire request submitted!</p>;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        required
        placeholder="Job Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      /><br />
      <input
        required
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      /><br />
      <textarea
        required
        placeholder="Job Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      /><br />
      <input
        required
        placeholder="Your Email"
        value={formData.from}
        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
      /><br />
      <button type="submit">Send Hire Request</button>
    </form>
  );
}
