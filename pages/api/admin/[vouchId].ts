// pages/api/admin/[vouchId].ts

import { NextApiRequest, NextApiResponse } from 'next'
import { vouchDB } from '@/lib/data/vouches'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { vouchId } = req.query
  const vouch = vouchDB.find((v) => v.id === vouchId)

  if (!vouch) return res.status(404).json({ error: 'Vouch not found' })

  if (req.method === 'PATCH') {
    const { flagged, moderationNote } = req.body
    if (typeof flagged === 'boolean') vouch.flagged = flagged
    if (typeof moderationNote === 'string') vouch.moderationNote = moderationNote
    return res.status(200).json(vouch)
  }

  return res.status(405).end()
}

