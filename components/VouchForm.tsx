// components/VouchForm.tsx
import { useState } from 'react';
import axios from 'axios';

export default function VouchForm({ workerId }: { workerId: string }) {
  const [relationship, setRelationship] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('/api/vouches', { workerId, relationship, message });
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  if (success) return <p>✅ Thanks for vouching!</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <select
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Your Relationship</option>
        <option>Worked Together</option>
        <option>Friend in the Trade</option>
        <option>Former Coworker</option>
      </select>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        className="w-full border p-2 rounded"
        maxLength={250}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Vouch
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
