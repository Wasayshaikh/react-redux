import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import AddPosts from './views/AddPosts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/add' element ={<AddPosts />}/>
      </Routes>
     </>
  )
}

export default App
