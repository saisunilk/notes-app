import React , {useState} from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'


const Navbar = () => {
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()
  const onLogout = () => {
    navigate("/login")
  }
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const onClearSearch = (e) => {
    setSearchValue("")
  }

  return (
    <div className = "bg-white flex item-center justify-between px-4 py-2 drop-shadow">
        <h2 className= "text-xl font-medium text-black py-2">Notes</h2>
        <SearchBox value={searchValue} 
        onChange={(e)=>setSearchValue(e.target.value)}
         handleSearch={handleSearch} 
         onClearSearch={onClearSearch}/>
        <ProfileInfo onLogout={onLogout} />
    </div>
  )
}

export default Navbar