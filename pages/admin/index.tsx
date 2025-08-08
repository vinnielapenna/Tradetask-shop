// pages/admin/index.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [flaggedVouches, setFlaggedVouches] = useState([]);
  const [stats, setStats] = useState({ jobs: 0, vouches: 0, users: 0 });

  useEffect(() => {
    async function fetchData() {
      const flaggedRes = await fetch("/api/admin/flagged");
      const flagged = await flaggedRes.json();
      setFlaggedVouches(flagged);

      const statsRes = await fetch("/api/admin/stats");
      const statsData = await statsRes.json();
      setStats(statsData);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">App Stats</h2>
        <ul className="mt-2">
          <li>Total Jobs Posted: {stats.jobs}</li>
          <li>Total Vouches: {stats.vouches}</li>
          <li>Total Users: {stats.users}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Flagged Vouches</h2>
        {flaggedVouches.length === 0 ? (
          <p className="text-gray-500">No flagged vouches.</p>
        ) : (
          <ul className="space-y-3">
            {flaggedVouches.map((vouch: any) => (
              <li key={vouch.id} className="p-3 border rounded">
                <p><strong>Worker ID:</strong> {vouch.workerId}</p>
                <p><strong>Flag Reason:</strong> {vouch.flagReason || "N/A"}</p>
                <Link href={`/admin/${vouch.id}`}>
                  <span className="text-blue-600 underline">Review</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

