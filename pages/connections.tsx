import { useEffect, useState } from 'react';

interface Vouch {
  id: string;
  workerId: string;
  authorId: string;
  authorName?: string;
  relationship: string;
  message: string;
  createdAt: string;
  flagged?: boolean;
}

export default function ConnectionsPage() {
  const [vouches, setVouches] = useState<Vouch[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const sessionRes = await fetch('/api/auth/session');
      const sessionData = await sessionRes.json();
      if (!sessionData?.user?.id) return;

      setUserId(sessionData.user.id);

      const vouchRes = await fetch('/api/vouches');
      const vouchData: Vouch[] = await vouchRes.json();

      const related = vouchData.filter(
        (v) => v.authorId === sessionData.user.id || v.workerId === sessionData.user.id
      );
      setVouches(related);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Connections</h1>
      {vouches.length === 0 ? (
        <p>No connections found.</p>
      ) : (
        <ul className="space-y-4">
          {vouches.map((vouch) => (
            <li key={vouch.id} className="border p-4 rounded-md shadow">
              <p><strong>Connection:</strong> {vouch.authorId === userId ? vouch.workerId : vouch.authorName || vouch.authorId}</p>
              <p><strong>Relationship:</strong> {vouch.relationship}</p>
              <p><strong>Message:</strong> {vouch.message}</p>
              <p className="text-sm text-gray-500"><strong>Date:</strong> {new Date(vouch.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
