import React from 'react'
import NavBar from './components/NavBar'

import { Home, About, Work, Flipping, Kanban,Florin } from './pages/'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/work/flipping' element={<Flipping />} />
          <Route path='/work/kanban' element={<Kanban />} />
          <Route path='/work/florin' element={<Florin />} /> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
