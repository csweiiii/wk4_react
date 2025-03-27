import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Productlist from './components/Productlist'
import BookIntroduction from './pages/BookIntroduction'
function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/productlist" element={<Productlist />} /> 
        <Route path="/BookIntroduction/:id" element={<BookIntroduction />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App