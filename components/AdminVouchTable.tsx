import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminVouchTable() {
  const [vouches, setVouches] = useState([]);

  const fetchVouches = async () => {
    const res = await axios.get('/api/admin/vouches');
    setVouches(res.data);
  };

  const deleteVouch = async (id: string) => {
    await axios.delete(`/api/admin/vouches/${id}`);
    fetchVouches();
  };

  useEffect(() => {
    fetchVouches();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Vouches</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Worker ID</th>
            <th className="border p-2">Relationship</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {vouches.map((v: any) => (
            <tr key={v.id}>
              <td className="border p-2">{v.authorName}</td>
              <td className="border p-2">{v.workerId}</td>
              <td className="border p-2">{v.relationship}</td>
              <td className="border p-2">{v.message}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteVouch(v.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
