import React from 'react'
import NavBar from './components/NavBar'

import { Home, About } from './pages/'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
