import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import Home from './pages/home'
import Wines from './pages/products'
import Wishlist from './pages/wishlist'
import Add from './pages/add'
import NotFound from './pages/notfound'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/wines' element={<Wines/>}/>
          <Route path='/about' element={<About/>}/>


          {/* <Route path='/wines/:id' element={<Details/>}/> */}
          <Route path='/add' element={<Add/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>


          <Route path='*' element={<NotFound/>}/>


        </Route>
      </Routes>
    </>
  )
}

export default App
