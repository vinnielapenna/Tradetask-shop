import { useRouter } from "next/router";
import Header from "../../components/Header";
import HireForm from "../../components/HireForm";
import { vouches, reviews } from "../../lib/data";

export default function WorkerProfile() {
  const router = useRouter();
  const { worker } = router.query;

  const workerReviews = reviews.filter((r) => r.worker === worker);
  const workerVouches = vouches.filter((v) => v.to === worker);

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Profile: {worker}</h1>

        <section>
          <h2>Reviews</h2>
          {workerReviews.length > 0 ? (
            <ul>
              {workerReviews.map((r, i) => (
                <li key={i}>{r.comment} — {r.rating}⭐</li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </section>

        <section>
          <h2>Vouches</h2>
          {workerVouches.length > 0 ? (
            <ul>
              {workerVouches.map((v, i) => (
                <li key={i}>{v.comment} — {v.rating}⭐</li>
              ))}
            </ul>
          ) : (
            <p>No vouches yet.</p>
          )}
        </section>

        <section>
          <h2>Hire This Worker</h2>
          <HireForm workerEmail={worker} />
        </section>
      </main>
    </>
  );
}
