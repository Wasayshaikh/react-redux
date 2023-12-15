import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import AddPosts from './views/AddPosts'


function App() {

  return (
    <>
    <div className='w-full bg-[#f2f2f2] shadow-md py-8 text-center'><h1 className='text-2xl'>React Redux Project</h1></div>
    <div className='p-4 py-6 text-center'>
    <p className='pt-2'>A react project to show list of posts and add new post</p></div>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/add' element ={<AddPosts />}/>
      </Routes>
     </>
  )
}

export default App
