export interface Vouch {
  id: string;
  workerId: string;
  authorId: string;
  authorName: string;
  relationship: string;
  message: string;
  createdAt: string;
  content: string;
  flagged?: boolean;
  adminNote?: string;
}

