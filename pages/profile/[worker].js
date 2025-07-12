import { useRouter } from "next/router";
import Header from "../../components/Header";
import { vouches, reviews } from "../../lib/data";

function calculateTier(points) {
  if (points >= 10) return "Gold";
  if (points >= 5) return "Silver";
  return "Bronze";
}

export default function WorkerProfile() {
  const router = useRouter();
  const { worker } = router.query;

  const userVouches = vouches.filter(v => v.to === worker);
  const userReviews = reviews.filter(r => r.worker === worker);
  const totalPoints = userVouches.length + userReviews.length;
  const tier = calculateTier(totalPoints);

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Worker Profile</h1>
        <p>Email: <strong>{worker}</strong></p>
        <p>Tier: {tier} ({totalPoints} pts)</p>
        <h3>Vouches</h3>
        <ul>
          {userVouches.map((v, idx) => (
            <li key={idx}>From: {v.from} - Rating: {v.rating}⭐ — "{v.comment}"</li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {userReviews.map((r, idx) => (
            <li key={idx}>From: {r.employer} - Rating: {r.rating}⭐ — "{r.comment}"</li>
          ))}
        </ul>
      </main>
    </>
  );
}
