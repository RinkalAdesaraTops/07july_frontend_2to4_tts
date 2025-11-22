import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CrudExample from './CrudExample'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './About'
import Home from './Home'
import Contact from './Contact'

function App() {
  return (
    <>
    <Menu />
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    {/* <CrudExample /> */}
    </>
  )
}

export default App
