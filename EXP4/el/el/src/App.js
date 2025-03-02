import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import {Navbar} from "./Navbar"; // Optional navigation bar

function App() {
  return (
    <Router>
      <Navbar /> {/* Optional Navbar for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
