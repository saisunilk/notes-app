import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { MdClose, MdLabelOutline } from 'react-icons/md'
import type { Note, NoteDraft } from '../../types'

type Props = { note: Note | null; onClose: () => void; onSave: (note: NoteDraft) => void }

const AddEditNote = ({ note, onClose, onSave }: Props) => {
  const [title, setTitle] = useState(note?.title ?? '')
  const [content, setContent] = useState(note?.content ?? '')
  const [tags, setTags] = useState<string[]>(note?.tags ?? [])
  const [tagInput, setTagInput] = useState('')
  const [error, setError] = useState('')
  const addTag = () => { const tag = tagInput.trim().replace(/^#/, '').toLowerCase(); if (tag && !tags.includes(tag)) setTags([...tags, tag]); setTagInput('') }
  const onTagKeyDown = (event: KeyboardEvent<HTMLInputElement>) => { if (event.key === 'Enter' || event.key === ',') { event.preventDefault(); addTag() } }
  const submit = (event: FormEvent) => { event.preventDefault(); if (!title.trim() || !content.trim()) { setError('A title and note content are required.'); return }; onSave({ title: title.trim(), content: content.trim(), tags }) }
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <form onSubmit={submit} className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl" aria-modal="true" role="dialog">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5"><div><p className="text-xs font-semibold tracking-wider text-primary">{note ? 'UPDATE NOTE' : 'NEW NOTE'}</p><h2 className="mt-1 text-xl font-semibold text-slate-800">{note ? 'Edit your note' : 'What’s on your mind?'}</h2></div><button type="button" onClick={onClose} aria-label="Close editor" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><MdClose size={22} /></button></div>
      <div className="space-y-5 px-6 py-6"><label className="block text-sm font-medium text-slate-700">Title<input autoFocus value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give your note a title" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-blue-50" /></label><label className="block text-sm font-medium text-slate-700">Content<textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Write your note here…" rows={7} className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-blue-50" /></label><div><p className="text-sm font-medium text-slate-700">Tags <span className="font-normal text-slate-400">(optional)</span></p><div className="mt-2 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-primary">#{tag}<button type="button" aria-label={`Remove ${tag} tag`} onClick={() => setTags(tags.filter((item) => item !== tag))}><MdClose size={15} /></button></span>)}</div><div className="mt-2 flex rounded-xl border border-slate-200 px-3 focus-within:border-primary focus-within:ring-4 focus-within:ring-blue-50"><MdLabelOutline className="my-auto text-slate-400" /><input value={tagInput} onChange={(event) => setTagInput(event.target.value)} onKeyDown={onTagKeyDown} onBlur={addTag} placeholder="Add a tag and press Enter" className="w-full bg-transparent px-2 py-3 text-sm outline-none" /></div></div>{error && <p className="text-sm text-red-500">{error}</p>}</div>
      <div className="flex justify-end gap-3 border-t border-slate-100 px-6 py-4"><button type="button" onClick={onClose} className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100">Cancel</button><button type="submit" className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-600">{note ? 'Save changes' : 'Create note'}</button></div>
    </form>
  </div>
}
export default AddEditNote
