import { useEffect, useState } from 'react';
import { Vouch } from '../../models/vouch';

export default function AdminPage() {
  const [vouches, setVouches] = useState<Vouch[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVouches: 0,
    flaggedVouches: 0,
  });

  useEffect(() => {
    fetch('/api/admin/vouches')
      .then((res) => res.json())
      .then((data) => setVouches(data));

    fetch('/api/admin/stats')
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vouch Moderation Panel</h1>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">Stats</h2>
        <ul className="list-disc list-inside">
          <li>Total Users: {stats.totalUsers}</li>
          <li>Total Vouches: {stats.totalVouches}</li>
          <li>Flagged Vouches: {stats.flaggedVouches}</li>
        </ul>
      </div>

      {vouches.length === 0 ? (
        <p>No vouches found.</p>
      ) : (
        <ul className="space-y-4">
          {vouches.map((vouch) => (
            <li key={vouch.id} className="border p-4 rounded">
              <p><strong>Worker ID:</strong> {vouch.workerId}</p>
              <p><strong>Author ID:</strong> {vouch.authorId}</p>
              <p><strong>Content:</strong> {vouch.content}</p>
              <p><strong>Flagged:</strong> {vouch.flagged ? 'Yes' : 'No'}</p>
              <p><strong>Admin Note:</strong> {vouch.adminNote || '—'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
