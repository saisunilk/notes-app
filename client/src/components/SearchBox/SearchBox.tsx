import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const SearchBox = ({value , onChange, handleSearch, onClearSearch}) => {
  return (
    <div>
    <div className="w-80 flex items-center bg-slate-100 border-[1.5px] px-3 rounded mb-3">
    <input
    type="text"
    placeholder="Search"
    value={value}
    onChange={onChange}
    className= "w-full text-xs bg-transparent py-2.75 outline-none">
    </input>
    {value && (
      <IoMdClose  className="cursor-pointer text-slate-400 hover:text-slate-600 mr-3" onClick={onClearSearch}/>
    )}
    <FaMagnifyingGlass
    size={20}
    className= "cursor-pointer text-slate-400 hover:text-slate-600"
    onClick = {handleSearch}
    />
    </div>
    </div>
  )
}

export default SearchBox