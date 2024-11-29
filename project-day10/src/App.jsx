import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import Home from './Component/Home'

function App() {
  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/' Component={Login}></Route>
  <Route path='/signup' Component={SignUp}></Route>
  <Route path='/home' Component={Home}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
