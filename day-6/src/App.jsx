import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [state,setState] = useState(false)
    const [arr,setArr] = useState([])
    
     useEffect(()=>{
         fetch('https://fakestoreapi.com/carts')
         .then((res)=>res.json())
         .then((res)=>{
            console.log(res);
            setArr(res)
         })
         .catch((err)=>{
            console.log(err)
         })
     },[])

 


  return (
    <div style={{display : "flex",flexWrap : "wrap"}}>
       {
         arr.map((el)=>{
             return (
                 <div>
                    <img src={el.image} width="150px" />
                    <h3>{el.title}</h3>
                    <p> Rs.{el.price}</p>
                 </div>
             )
         })
       }
    </div>
  )
}

export default App