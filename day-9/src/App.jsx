import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Local from './Component/Local'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Local/>
  )
}

export default App
