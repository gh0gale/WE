import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import {Counter} from "./Counter";
import { About } from "./About";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="Navbar">
            <ul>
              <li><Link className="L" to ="/">Home</Link></li>
              <li><Link className="L" to ="/about">About</Link></li>
              <li><Link className="L" to ="/login">Login</Link></li>
              <li><Link className="L" to ="/signup">SignUp</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path = "/" element = {<Counter/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<SignUp/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
