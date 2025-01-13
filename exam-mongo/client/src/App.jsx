import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "../src/layouts/Nav"
import Home from "../src/pages/Home"
import Add from "../src/pages/Add"
import Details from "../src/pages/Details"
import NotFound from "../src/pages/Notfound"
import Wishlist from "../src/pages/Wishlist"
import "./App.css"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details" element={<Details />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
