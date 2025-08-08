import { useEffect, useState } from 'react';
import axios from 'axios';

interface Vouch {
  id: string;
  workerId: string;
  authorId: string;
  text: string;
}

export default function AdminDashboard() {
  const [vouches, setVouches] = useState<Vouch[]>([]);
  const [loading, setLoading] = useState(true);

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

  const deleteVouch = async (id: string) => {
    try {
      await axios.delete(`/api/admin/${id}`);
      setVouches((prev) => prev.filter((v) => v.id !== id));
    } catch (error) {
      console.error('Failed to delete vouch:', error);
    }
  };

  useEffect(() => {
    fetchVouches();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Moderation Panel</h1>
      {loading ? (
        <p>Loading vouches...</p>
      ) : vouches.length === 0 ? (
        <p>No vouches available.</p>
      ) : (
        <ul className="space-y-4">
          {vouches.map((vouch) => (
            <li key={vouch.id} className="border p-3 rounded shadow">
              <p><strong>Worker:</strong> {vouch.workerId}</p>
              <p><strong>Author:</strong> {vouch.authorId}</p>
              <p><strong>Text:</strong> {vouch.text}</p>
              <button
                onClick={() => deleteVouch(vouch.id)}
                className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
