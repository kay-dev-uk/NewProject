import React from 'react'
import NavBar from './components/NavBar'

import { Home } from './pages/'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
