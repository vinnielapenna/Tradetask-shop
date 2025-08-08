// /pages/api/connections/[workerId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { users, vouches } from '@/lib/data'; // assumes you're storing mock users and vouches here

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { workerId } = req.query;

  if (req.method !== 'GET') return res.status(405).end();

  try {
    const vouchedFor = vouches
      .filter(v => v.fromUserId === workerId)
      .map(v => users.find(u => u.id === v.toUserId))
      .filter(Boolean);

    const vouchedBy = vouches
      .filter(v => v.toUserId === workerId)
      .map(v => users.find(u => u.id === v.fromUserId))
      .filter(Boolean);

    res.status(200).json({
      vouchedFor,
      vouchedBy,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching mock connections' });
  }
}

