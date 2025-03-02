import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className='container'>
        <ul>
              <li><Link className="L" to ="/">Home</Link></li>
              <li><Link className="L" to ="/about">About</Link></li>
              <li><Link className="L" to ="/courses">Courses</Link></li>
              <li><Link className="L" to ="/contact">Contact</Link></li>
            </ul>
        
    </div>
  )
}
