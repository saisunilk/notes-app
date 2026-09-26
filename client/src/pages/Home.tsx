import { useMemo, useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import AddEditNote from '../components/AddEditNote/AddEditNote'
import NoteCard from '../components/Cards/NoteCard'
import Navbar from '../components/Navbar/Navbar'
import type { Note, NoteDraft } from '../types'

const starterNotes: Note[] = [
  { id: '1', title: 'Plan the product launch', content: 'Finish the landing page copy, collect final screenshots, and share the launch checklist with the team.', tags: ['work', 'priority'], createdAt: 'Sep 20, 2026', isPinned: true },
  { id: '2', title: 'Weekend ideas', content: 'Try the new coffee place on Saturday morning and book tickets for the outdoor film night.', tags: ['personal', 'weekend'], createdAt: 'Sep 18, 2026', isPinned: false },
  { id: '3', title: 'Design inspiration', content: 'Soft shadows, generous spacing, and one confident accent color make interfaces feel calm and focused.', tags: ['ideas', 'design'], createdAt: 'Sep 15, 2026', isPinned: false },
]

const Home = () => {
  const [notes, setNotes] = useState<Note[]>(starterNotes)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const tags = useMemo(() => [...new Set(notes.flatMap((note) => note.tags))].sort(), [notes])
  const filteredNotes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return [...notes].filter((note) => !activeTag || note.tags.includes(activeTag)).filter((note) => !query || [note.title, note.content, ...note.tags].some((value) => value.toLowerCase().includes(query))).sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
  }, [notes, searchQuery, activeTag])
  const saveNote = (draft: NoteDraft) => {
    if (editingNote) setNotes((current) => current.map((note) => note.id === editingNote.id ? { ...note, ...draft } : note))
    else setNotes((current) => [{ id: crypto.randomUUID(), ...draft, createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), isPinned: false }, ...current])
    setIsEditorOpen(false); setEditingNote(null)
  }
  const closeEditor = () => { setIsEditorOpen(false); setEditingNote(null) }
  return <main className="min-h-screen bg-slate-50">
    <Navbar searchValue={searchQuery} onSearchChange={setSearchQuery} />
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-medium text-primary">YOUR WORKSPACE</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">All notes</h1><p className="mt-1 text-sm text-slate-500">Capture thoughts, tasks, and everything in between.</p></div><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-600" onClick={() => { setEditingNote(null); setIsEditorOpen(true) }}><MdAdd size={20} /> Add note</button></div>
      {tags.length > 0 && <div className="mb-7 flex flex-wrap items-center gap-2"><button onClick={() => setActiveTag(null)} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${!activeTag ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-primary'}`}>All notes</button>{tags.map((tag) => <button key={tag} onClick={() => setActiveTag(activeTag === tag ? null : tag)} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${activeTag === tag ? 'bg-blue-100 text-primary ring-1 ring-blue-200' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-primary'}`}>#{tag}</button>)}</div>}
      {filteredNotes.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredNotes.map((note) => <NoteCard key={note.id} {...note} onEdit={() => { setEditingNote(note); setIsEditorOpen(true) }} onDelete={() => setNotes((current) => current.filter((item) => item.id !== note.id))} onPinNote={() => setNotes((current) => current.map((item) => item.id === note.id ? { ...item, isPinned: !item.isPinned } : item))} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"><div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-primary"><MdClose size={24} /></div><h2 className="font-semibold text-slate-800">No notes found</h2><p className="mt-1 text-sm text-slate-500">Try another search or create a fresh note.</p></div>}
    </section>{isEditorOpen && <AddEditNote note={editingNote} onClose={closeEditor} onSave={saveNote} />}
  </main>
}
export default Home
