import { useState } from 'react'
import AboutUs from './pages/AboutUs'
import HomePage from './pages/HomePage'
import Product from './pages/product'
import Layout from './pages/Layout'
import Template from './pages/Template'
import './App.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AboutUs" element={<AboutUs />} />

        <Route path="/admin" element={<Layout />}>
          <Route path=":firstName" element={<Template />} />
          <Route path="Product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );

}

