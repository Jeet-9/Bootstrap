import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");

  return (
    <>
      <div>
        <form>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option hidden>Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setProductName(e.target.value)}
          />
          {category === "electronics" && (
            <input type="text" placeholder="Warranty" />
          )}
        </form>
      </div>
    </>
  )
}

export default App
