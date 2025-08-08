// pages/api/admin/flagged.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { vouchDB } from '../../../vouches';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();

  // Return only vouches marked as flagged
  const flagged = vouchDB.filter(v => v.flagged);

  return res.status(200).json(flagged);
}
