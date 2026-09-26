import { useNavigate } from 'react-router-dom'
import ProfileInfo from '../Cards/ProfileInfo'
import SearchBox from '../SearchBox/SearchBox'

type Props = { searchValue?: string; onSearchChange?: (value: string) => void }
const Navbar = ({ searchValue = '', onSearchChange }: Props) => {
  const navigate = useNavigate()
  return <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 px-5 py-3 backdrop-blur sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><button onClick={() => navigate('/dashboard')} className="text-xl font-semibold tracking-tight text-slate-900">notely<span className="text-primary">.</span></button><div className="hidden flex-1 justify-center md:flex"><SearchBox value={searchValue} onChange={(event) => onSearchChange?.(event.target.value)} onClearSearch={() => onSearchChange?.('')} /></div><ProfileInfo onLogout={() => navigate('/login')} /></div><div className="mt-3 md:hidden"><SearchBox value={searchValue} onChange={(event) => onSearchChange?.(event.target.value)} onClearSearch={() => onSearchChange?.('')} /></div></header>
}
export default Navbar
