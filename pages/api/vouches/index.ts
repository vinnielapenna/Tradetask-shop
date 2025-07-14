// pages/api/vouches/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { getSession } from 'next-auth/react';
import { Vouch } from '../../../models/vouch';

let vouchDB: Vouch[] = []; // Mock DB for now

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'POST') {
    const { workerId, relationship, message } = req.body;

    const existing = vouchDB.find(
      (v) => v.workerId === workerId && v.authorId === session.user.id
    );
    if (existing) return res.status(400).json({ error: 'Already vouched for this worker' });

    const newVouch: Vouch = {
      id: uuidv4(),
      workerId,
      authorId: session.user.id,
      authorName: session.user.name || 'Anonymous',
      relationship,
      message,
      createdAt: new Date().toISOString(),
    };

    vouchDB.push(newVouch);
    return res.status(201).json(newVouch);
  }

  return res.status(405).end();
}
