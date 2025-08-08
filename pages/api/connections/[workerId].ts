// /pages/api/connections/[workerId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db'; // Replace with your DB import

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { workerId } = req.query;

  if (req.method !== 'GET') return res.status(405).end();

  try {
    const vouchedFor = await db.vouch.findMany({
      where: { fromUserId: String(workerId) },
      include: { toUser: true },
    });

    const vouchedBy = await db.vouch.findMany({
      where: { toUserId: String(workerId) },
      include: { fromUser: true },
    });

    res.status(200).json({
      vouchedFor: vouchedFor.map(v => v.toUser),
      vouchedBy: vouchedBy.map(v => v.fromUser),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching connections' });
  }
}
