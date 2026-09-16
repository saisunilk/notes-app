import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router'
import PasswordInput from '../components/Input/PasswordInput'
import { validateEmail } from '../utilis/helper'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

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
        <h4 className= "text-2xl mb-7">Login</h4>

        <input type="email" placeholder = "Email" className= "input-box" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn-primary">Login</button>  
        <p className='text-sm' text-center mt-4>Not registered yet ? 
            <Link to="/signup" className="font-medium text-primary underline"> create an Account</Link>
        </p>
        </form>
    </div>
   </div>
   </>
  )
}

export default Login