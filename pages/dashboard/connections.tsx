// /pages/dashboard/connections.tsx
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

type Worker = {
  id: string;
  name: string;
  username: string;
  skills: string[];
};

export default function ConnectionsPage() {
  const { data: session } = useSession();
  const [vouchedFor, setVouchedFor] = useState<Worker[]>([]);
  const [vouchedBy, setVouchedBy] = useState<Worker[]>([]);

  useEffect(() => {
    if (!session?.user?.id) return;

    fetch(`/api/connections/${session.user.id}`)
      .then(res => res.json())
      .then(data => {
        setVouchedFor(data.vouchedFor);
        setVouchedBy(data.vouchedBy);
      });
  }, [session]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Connections</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">You vouched for:</h2>
        {vouchedFor.length === 0 ? (
          <p className="text-gray-500">No connections yet.</p>
        ) : (
          <ul className="space-y-2">
            {vouchedFor.map((user) => (
              <li key={user.id} className="border p-3 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">Skills: {user.skills?.join(', ')}</p>
                  </div>
                  <Link href={`/workers/${user.username}`} className="text-blue-500 underline">
                    View Profile
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Vouched for you:</h2>
        {vouchedBy.length === 0 ? (
          <p className="text-gray-500">No connections yet.</p>
        ) : (
          <ul className="space-y-2">
            {vouchedBy.map((user) => (
              <li key={user.id} className="border p-3 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">Skills: {user.skills?.join(', ')}</p>
                  </div>
                  <Link href={`/workers/${user.username}`} className="text-blue-500 underline">
                    View Profile
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
