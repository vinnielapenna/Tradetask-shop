import { useState } from "react";
import { useSession } from "next-auth/react";
import Header from "../components/Header";

export default function LeaveReview() {
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [review, setReview] = useState({ worker: "", rating: 5, feedback: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", review, "by", session?.user?.email);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Leave a Review</h1>
        {session ? (
          submitted ? (
            <p>✅ Review submitted for {review.worker}!</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
              <label>
                Worker Name:
                <input
                  type="text"
                  value={review.worker}
                  onChange={(e) => setReview({ ...review, worker: e.target.value })}
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
                  value={review.rating}
                  onChange={(e) => setReview({ ...review, rating: e.target.value })}
                  required
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </label>
              <label>
                Feedback:
                <textarea
                  value={review.feedback}
                  onChange={(e) => setReview({ ...review, feedback: e.target.value })}
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </label>
              <button type="submit">Submit Review</button>
            </form>
          )
        ) : (
          <p>Please log in to leave a review.</p>
        )}
      </main>
    </>
  );
}
