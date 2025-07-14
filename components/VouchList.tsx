// components/VouchList.tsx
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function VouchList({ workerId }: { workerId: string }) {
  const { data: vouches, error } = useSWR(`/api/vouches/${workerId}`, fetcher);

  if (error) return <p>❌ Failed to load vouches</p>;
  if (!vouches) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Vouches</h3>
      {vouches.map((v: any) => (
        <div key={v.id} className="border p-3 rounded shadow">
          <p className="font-semibold">{v.authorName} ({v.relationship})</p>
          <p>{v.message}</p>
        </div>
      ))}
    </div>
  );
}
