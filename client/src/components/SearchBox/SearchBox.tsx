import type { ChangeEvent } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
type Props = { value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; onClearSearch: () => void }
const SearchBox = ({ value, onChange, onClearSearch }: Props) => <div className="flex w-full max-w-sm items-center rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50"><FaMagnifyingGlass size={15} className="text-slate-400" /><input type="search" placeholder="Search notes and tags" value={value} onChange={onChange} className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-slate-400" />{value && <button type="button" aria-label="Clear search" onClick={onClearSearch} className="text-slate-400 hover:text-slate-700"><IoMdClose size={19} /></button>}</div>
export default SearchBox
