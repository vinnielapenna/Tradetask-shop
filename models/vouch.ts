export interface Vouch {
  id: string;
  workerId: string;
  authorId: string;
  content: string; // ✅ This was missing
  flagged?: boolean;
  adminNote?: string;
}

