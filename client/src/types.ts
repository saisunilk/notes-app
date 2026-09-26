export type NoteDraft = { title: string; content: string; tags: string[] }
export type Note = NoteDraft & { id: string; createdAt: string; isPinned: boolean }
