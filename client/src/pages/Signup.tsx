import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import PasswordInput from '../components/Input/PasswordInput'   
import { validateEmail , validatePassword , validateName } from '../utilis/helper'




export const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your signup logic here
    if(!name || !validateName(name)){
    setError("Please enter a valid name")
    return
   }
   
   if(!validateEmail(email)){
    setError("Please enter a valid email address")
    return
   }
   if(!password || password.length < 6){
    setError("Please enter a valid password (at least 6 characters)")
    return
   }
   
   setError("")
}
  return (
    <>
      <Navbar/>
       <div className= "flex items-center justify-center mt-28">
        <div className= "w-96 border rounded bg-white px-7 py-10">
            <form onSubmit= {handleSubmit}>
            <h4 className= "text-2xl mb-7">Signup</h4>
            <input type="text" placeholder = "Name" className= "input-box" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder = "Email" className= "input-box" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn-primary">Signup</button>
            <p className="mt-4 text-center text-sm">Already registered ?
                <Link to="/login" className="font-medium text-primary underline"> Login</Link>
            </p>
            </form>
        </div>
       </div>
       </>

  )
}

export default Signup
