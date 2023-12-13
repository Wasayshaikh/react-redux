import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import AddPosts from './views/AddPosts'


function App() {

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
