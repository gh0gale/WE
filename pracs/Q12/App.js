import React from 'react'
import {Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';

export const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </Router>
  )
}

//same as Q14,Q15 but with different components and routes