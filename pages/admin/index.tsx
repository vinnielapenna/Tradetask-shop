// pages/admin/index.tsx

import { useEffect, useState } from 'react';

interface Vouch {
  id: string;
  workerId: string;
  authorId: string;
  content: string;
  flagged: boolean;
  adminNote?: string;
}

export default function AdminDashboard() {
  const [vouches, setVouches] = useState<Vouch[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/flagged')
      .then(res => res.json())
      .then(setVouches);

    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(setStats);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {stats && (
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded">
            <p className="text-xl font-semibold">{stats.total}</p>
            <p>Total Vouches</p>
          </div>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-xl font-semibold">{stats.flagged}</p>
            <p>Flagged Vouches</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-2">Flagged Vouches</h2>
      {vouches.length === 0 ? (
        <p>No flagged vouches found.</p>
      ) : (
        <ul className="space-y-4">
          {vouches.map(vouch => (
            <li key={vouch.id} className="border p-4 rounded shadow">
              <p className="font-semibold text-sm mb-1">Worker ID: {vouch.workerId}</p>
              <p className="mb-2">"{vouch.content}"</p>
              <p className="text-xs text-gray-600">Author: {vouch.authorId}</p>
              {vouch.adminNote && (
                <p className="text-sm text-blue-700 mt-2">Note: {vouch.adminNote}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


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

