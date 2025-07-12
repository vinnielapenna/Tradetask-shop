import { useState } from "react";
import { useSession } from "next-auth/react";
import Header from "../components/Header";

export default function VouchPage() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ to: "", rating: 5, comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vouch submitted:", { ...form, from: session?.user?.email });
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Vouch for a Worker</h1>
        {session ? (
          submitted ? (
            <p>✅ Vouch submitted for {form.to}</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
              <label>
                Worker Email:
                <input
                  type="email"
                  value={form.to}
                  onChange={(e) => setForm({ ...form, to: e.target.value })}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </label>
              <label>
                Rating (1–5):
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </label>
              <label>
                Comment:
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </label>
              <button type="submit">Submit Vouch</button>
            </form>
          )
        ) : (
          <p>Please log in to leave a vouch.</p>
        )}
      </main>
    </>
  );
}
