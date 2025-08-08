// pages/admin/moderation.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';

type Vouch = {
  id: string;
  workerId: string;
  authorId: string;
  text: string;
  createdAt: string;
  flagged: boolean;
  adminNote?: string;
};

export default function AdminModerationPage() {
  const [vouches, setVouches] = useState<Vouch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVouches = async () => {
      try {
        const res = await axios.get('/api/vouches');
        setVouches(res.data);
      } catch (error) {
        console.error('Failed to fetch vouches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVouches();
  }, []);

  const flagVouch = async (id: string) => {
    const note = prompt('Enter an admin note for this vouch (optional):') || '';
    try {
      await axios.put(`/api/admin/${id}`, { flagged: true, adminNote: note });
      setVouches((prev) =>
        prev.map((v) => (v.id === id ? { ...v, flagged: true, adminNote: note } : v))
      );
    } catch (error) {
      console.error('Failed to flag vouch:', error);
    }
  };

  if (loading) return <p className="p-4">Loading vouches...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Vouch Moderation Panel</h1>
      {vouches.length === 0 ? (
        <p>No vouches found.</p>
      ) : (
        <ul className="space-y-4">
          {vouches.map((vouch) => (
            <li key={vouch.id} className="border p-4 rounded shadow">
              <p><strong>Worker ID:</strong> {vouch.workerId}</p>
              <p><strong>Author ID:</strong> {vouch.authorId}</p>
              <p><strong>Text:</strong> {vouch.text}</p>
              <p><strong>Created:</strong> {new Date(vouch.createdAt).toLocaleString()}</p>
              <p><strong>Flagged:</strong> {vouch.flagged ? 'Yes' : 'No'}</p>
              {vouch.adminNote && (
                <p><strong>Admin Note:</strong> {vouch.adminNote}</p>
              )}
              {!vouch.flagged && (
                <button
                  onClick={() => flagVouch(vouch.id)}
                  className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Flag
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
