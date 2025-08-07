// pages/api/vouches/[workerId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { vouchDB } from './index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { workerId },
  } = req;

  const vouches = vouchDB.filter((v) => v.workerId === workerId);
  res.status(200).json(vouches);
}

      
  );
}
