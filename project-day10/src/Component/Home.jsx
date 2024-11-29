import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import '../App.css'


export default function Home() {
  const [user,Setuser]= useState("");
  const [record,setRecord]= useState("")
  
  useEffect(() =>{
    let unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        Setuser(currentUser);
  
      }else{
        console.log("no user logged in");
      }
    })
  },[])
  
  useEffect(()=>{
    fetchData(user)
  },[])
  
  console.log(record);
  
  
  const fetchData = async (user) => {  
    let data = await getDoc(doc(db,"users",user.uid))
    console.log(data.data());
    setRecord(data.data())
  }
  return (
    <>
      <h1>Welcome To Website</h1>
    </>
  )
}