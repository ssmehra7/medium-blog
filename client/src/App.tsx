

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { CreateBlog } from './pages/CreateBlog'
import { Profile } from './pages/Profile'
import { Ourstory } from './pages/Ourstory'
import { BlogbyId } from './pages/BlogbyId'
// import { AppBar } from './components/Blog/AppBar'

function App() {
 
  return (
    <BrowserRouter>
      
    <Routes>
    
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/create' element={<CreateBlog/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/user' element={<Profile/>}/>
      <Route path='/ourstory' element={<Ourstory/>}/>
      <Route path='/blog/:id' element={<BlogbyId/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
