// pages/api/admin/[vouchId].ts

import { NextApiRequest, NextApiResponse } from 'next'
import { updateVouch } from '../../../vouches'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  const { vouchId } = req.query
  const { flagged, moderationNote } = req.body

  if (typeof vouchId !== 'string') {
    return res.status(400).json({ error: 'Invalid vouch ID' })
  }

  updateVouch(vouchId, { flagged, moderationNote })

  return res.status(200).json({ message: 'Vouch updated' })
}


