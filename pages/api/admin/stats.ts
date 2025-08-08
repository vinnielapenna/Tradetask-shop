// pages/api/admin/stats.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { vouchDB } from '../../../vouches';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();

  // Dummy stats for now (replace with real data later)
  const stats = {
    jobs: 42,
    vouches: vouchDB.length,
    users: 19, // Could later combine worker + employer counts
  };

  return res.status(200).json(stats);
}
