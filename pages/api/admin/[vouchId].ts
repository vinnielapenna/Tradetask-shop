import { NextApiRequest, NextApiResponse } from 'next';
import { vouchDB } from '../../vouches';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { vouchId },
    method,
  } = req;

  if (method === 'DELETE') {
    const index = vouchDB.findIndex((v) => v.id === vouchId);
    if (index > -1) {
      vouchDB.splice(index, 1);
      return res.status(200).json({ message: 'Deleted' });
    }
    return res.status(404).json({ error: 'Vouch not found' });
  }

  return res.status(405).end();
}
