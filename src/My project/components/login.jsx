import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebaseconfig'

export const Login = () => {
  const [name,setname]= useState('')
  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')

  const submit =  async(e)=> {
     e.preventDefault()
     try{
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      if(user){
        alert("Login Sucessfully")
      }
     }
     catch ( error)
     {
        alert(error)
     }
  }
  return ( 
    <>
    <div className='cointainers'> 
    <div className='header'>
        <h2>Login </h2>
    </div>
   
    <div className='box'>
        <input type='text' value={email} placeholder='E-mail'onChange={(e)=>setemail(e.target.value)}></input>
    </div>
    <div className='box'>
        <input type='text' value={password}placeholder='Password'onChange={(e)=>setpassword(e.target.value)}></input>
    </div>
    <p>Dont Have Account<Link to="/register">Create Account</Link>  </p>
    <button className='btn btn-outline-dark me-2' onClick={submit}>Login</button>
    </div>
    </>
  )
}
