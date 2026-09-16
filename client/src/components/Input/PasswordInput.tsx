import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'

const PasswordInput = ({value, onChange, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () =>{
    setShowPassword(!showPassword);
  }
    return (
    <div className="flex items-center bg-transparent border-[1.5px] px-3 rounded mb-3">
    <input
    type={showPassword ? "text" : "password"}
    placeholder={placeholder}
    value={value}
    onChange={onChange}

    className= "w-full text-sm bg-transparent py-3 mr-3 rounded outline-none">
    </input>
    <FaRegEye
    size={20}
    className= "cursor-pointer"
    onClick={()=>togglePassword()}
    />
    </div>
    
  )
}

export default PasswordInput