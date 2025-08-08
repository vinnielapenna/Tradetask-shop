import { NextApiRequest, NextApiResponse } from 'next';
import { vouchDB } from '../vouches';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(vouchDB);
  }

  return res.status(405).end();
}
