// lib/data/vouches.ts

export interface Vouch {
  id: string
  workerId: string
  authorId: string
  text: string
  flagged?: boolean
  moderationNote?: string
}

export const vouchDB: Vouch[] = []

