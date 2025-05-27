import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pets from './pages/Pets'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pets" element={<Pets />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  )
}

export default App