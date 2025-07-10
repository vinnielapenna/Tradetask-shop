import { useState } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    trade: "",
    rate: "",
    description: ""
  });

  const [submittedJob, setSubmittedJob] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedJob({ ...formData });
    setFormData({
      title: "",
      company: "",
      location: "",
      trade: "",
      rate: "",
      description: ""
    });
  };

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Post a Job</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" required /><br /><br />
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" required /><br /><br />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location (City, State)" required /><br /><br />
          <input name="rate" value={formData.rate} onChange={handleChange} placeholder="Pay Rate (e.g., $25/hr)" required /><br /><br />
          <select name="trade" value={formData.trade} onChange={handleChange} required>
            <option value="">Select Trade Type</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Roofing">Roofing</option>
            <option value="HVAC">HVAC</option>
          </select><br /><br />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" rows="4" required /><br /><br />
          <button type="submit">Submit Job</button>
        </form>

        {submittedJob && (
          <>
            <h2>Preview:</h2>
            <JobCard job={submittedJob} />
          </>
        )}
      </main>
    </>
  );
}