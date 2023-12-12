import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Logout from './views/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/login' element ={<Login />}/>
        <Route path='/logout' element ={<Logout />}/>
      </Routes>
     </>
  )
}

export default App
