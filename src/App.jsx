import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Pages/Home/Home';
import Layout from './Components/Pages/Layout/Layout';
import NotFound from './Components/Pages/NotFound/NotFound';
import Features from './Components/Pages/Features/Features';
import Main from './Components/Pages/Main/Main';

function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
