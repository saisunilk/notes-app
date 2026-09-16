import React from 'react'
import { getInitials } from '../../utilis/helper'
const ProfileInfo = ({ onLogout }: { onLogout: () => void }) => {
    
  return (
    <div className = "flex items-center gap-3">
        <div className= "w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
            {getInitials("sai sunil")}
        </div>
        <p className= "text-sm font-medium">William</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
    </div>
  )
}

export default ProfileInfo