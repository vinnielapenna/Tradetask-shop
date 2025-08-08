// vouches.ts

interface Vouch {
  id: string
  workerId: string
  authorId: string
  text: string
  flagged?: boolean
  moderationNote?: string
}

export let vouchDB: Vouch[] = []

export function addVouch(vouch: Vouch) {
  vouchDB.push(vouch)
}

export function updateVouch(id: string, data: Partial<Vouch>) {
  const index = vouchDB.findIndex((v) => v.id === id)
  if (index !== -1) {
    vouchDB[index] = { ...vouchDB[index], ...data }
  }
}
