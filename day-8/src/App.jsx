import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const [obj,setObj] = useState({
      title : "",
      img : "",
      price : "",
      des : ""
     })
     const [arr,setArr] = useState([])
    const handleChange = (e)=>{
      setObj({...obj,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      setArr([...arr,obj])
    }
  

  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input type="text" name='title' placeholder='Title' onChange={handleChange}/>
           <input type="text" name='img' placeholder='Image URL' onChange={handleChange}/>
           <input type="text" name='price' placeholder='Price' onChange={handleChange}/>
           <input type="text" name='des' placeholder='Description' onChange={handleChange}/>
           <input type="submit" />
        </form>
        {
          arr.map((el)=>{
            return (
                <div>
                    <img src={el.img} alt="" />
                    <h5>{el.title} - {el.price}</h5>
                    <p>{el.des}</p>
                </div>
            )
          })
        }
    </div>
  )
}

export default App