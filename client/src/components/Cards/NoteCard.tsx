import { MdDeleteOutline, MdEdit, MdOutlinePushPin } from 'react-icons/md'
import type { Note } from '../../types'

type NoteCardProps = Note & { onEdit: () => void; onDelete: () => void; onPinNote: () => void }

const NoteCard = ({ title, content, createdAt, tags, isPinned, onEdit, onDelete, onPinNote }: NoteCardProps) => (
  <article className="group flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
    <div className="flex items-start justify-between gap-3">
      <div><h2 className="line-clamp-1 text-base font-semibold text-slate-800">{title}</h2><p className="mt-1 text-xs text-slate-400">{createdAt}</p></div>
      <button aria-label={isPinned ? 'Unpin note' : 'Pin note'} onClick={onPinNote} className={`rounded-lg p-1.5 transition hover:bg-blue-50 ${isPinned ? 'text-primary' : 'text-slate-300 hover:text-primary'}`}><MdOutlinePushPin size={20} /></button>
    </div>
    <p className="mt-4 flex-1 whitespace-pre-wrap text-sm leading-6 text-slate-600">{content}</p>
    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
      <div className="flex flex-wrap gap-1.5">{tags.map((tag) => <span key={tag} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary">#{tag}</span>)}</div>
      <div className="flex shrink-0 items-center gap-1 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
        <button aria-label="Edit note" onClick={onEdit} className="rounded-lg p-1.5 text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600"><MdEdit size={19} /></button>
        <button aria-label="Delete note" onClick={onDelete} className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"><MdDeleteOutline size={20} /></button>
      </div>
    </div>
  </article>
)

export default NoteCard
