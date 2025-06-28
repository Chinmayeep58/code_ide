import React, { useState } from 'react'
import logo from '../images/logo.png'
import image from '../images/authPageSide.png'
import '../App.css'
import {Link} from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername]=useState("")
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const submitForm=(e)=>{
        e.preventDefault()
    }
  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between px-0">
        <div className="left w-[35%] ">
            <img className='w-[200px]' src={logo} alt=''/>
            <form className='w-full mt-[30px]' action=''>
                <div className="inputBox">
                    <input required onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder='UserName'/>
                </div>

                <div className="inputBox">
                    <input required onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder='Name'/>
                </div>

                <div className="inputBox">
                    <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email'/>
                </div>

                <div className="inputBox">
                    <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder='Password'/>
                </div>

                <p className='text-[gray]'>Already have an account? <Link to='/login' className='text-[#00AEEF]'>Login</Link> </p>

                <button className="btnBlue w-full mt-[60px]" onSubmit={submitForm}>SignUp</button>
            </form>
        </div>


        <div className="right w-[50%]">
            <img className="h-[100vh] w-[100%] object-cover" src={image}></img>
        </div>
      </div>
    </>
  )
}

export default SignUp
