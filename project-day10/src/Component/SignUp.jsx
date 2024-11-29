import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {
    const [name,setName]=useState("")
    const [city,setCity]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleAdd =async ()=>{
        await createUserWithEmailAndPassword(auth,email,password)
        .then(data=>{
            console.log(data);
            setDoc(doc(db,"users",data.user.uid),{
                name,city,email
            })
            console.log("data added");
        })
    }

  return (
    <div>
        <h1>SignUp</h1>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='city' onChange={(e)=>setCity(e.target.value)} />
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleAdd} >Add</button>
        <p><link to="/"/>signup</p>
    </div>
  )
}
