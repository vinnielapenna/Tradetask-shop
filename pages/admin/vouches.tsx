// pages/admin/vouches.tsx

import { useState, useEffect } from 'react'
import axios from 'axios'

interface Vouch {
  id: string
  workerId: string
  authorId: string
  text: string
  flagged?: boolean
  moderationNote?: string
}

export default function AdminVouchesPage() {
  const [vouches, setVouches] = useState<Vouch[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVouches = async () => {
      try {
        const res = await axios.get('/api/vouches')
        setVouches(res.data)
      } catch (err) {
        console.error('Error fetching vouches:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchVouches()
  }, [])

  const handleFlag = async (id: string, flagged: boolean) => {
    try {
      const res = await axios.patch(`/api/admin/${id}`, { flagged })
      setVouches((prev) =>
        prev.map((v) => (v.id === id ? { ...v, flagged: res.data.flagged } : v))
      )
    } catch (err) {
      console.error('Error flagging vouch:', err)
    }
  }

  const handleNote = async (id: string, note: string) => {
    try {
      const res = await axios.patch(`/api/admin/${id}`, { moderationNote: note })
      setVouches((prev) =>
        prev.map((v) => (v.id === id ? { ...v, moderationNote: res.data.moderationNote } : v))
      )
    } catch (err) {
      console.error('Error adding note:', err)
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vouch Moderation Panel</h1>
      {vouches.length === 0 ? (
        <p>No vouches found.</p>
      ) : (
        <div className="space-y-4">
          {vouches.map((vouch) => (
            <div key={vouch.id} className="border rounded p-4 shadow-sm">
              <p><strong>Worker ID:</strong> {vouch.workerId}</p>
              <p><strong>Author ID:</strong> {vouch.authorId}</p>
              <p><strong>Text:</strong> {vouch.text}</p>
              <div className="mt-2 flex items-center gap-4">
                <button
                  onClick={() => handleFlag(vouch.id, !vouch.flagged)}
                  className={`px-3 py-1 rounded text-white ${vouch.flagged ? 'bg-red-600' : 'bg-gray-600'}`}
                >
                  {vouch.flagged ? 'Unflag' : 'Flag'}
                </button>
                <input
                  type="text"
                  defaultValue={vouch.moderationNote || ''}
                  placeholder="Add moderation note"
                  onBlur={(e) => handleNote(vouch.id, e.target.value)}
                  className="border px-2 py-1 rounded w-1/2"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
