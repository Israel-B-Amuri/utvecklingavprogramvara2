'use client'
import React,{useState} from 'react'

export default function Login(e:any) {
    e.preventDefault
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function handleSubmit() {
      
        
        const response = await fetch('http://10.111.3.78:3001/api/users');
        const result = await response.json();
        console.log(result.password);
      
    }
    
  return (
    <>
        <form autoComplete='true'>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit} type='submit'>Login</button>          
        </form>
    </>
  )
}
