
import React from 'react'
import { useState } from 'react';

import "./Counter.css";

export const Counter = () => {
   const [count,setCount] = useState(0);
   
  return (
    <div className='container' > 
      <h1>COUNTER:{count}</h1> 
      <div className='content' >
        <button className='Inc' onClick={()=>setCount(count + 1)}>INCREMENT</button>
        <button className='Res' onClick={()=>setCount(0)}>RESET</button>
        <button className='Dec' onClick={()=>setCount(count - 1)}>DECREMENT</button>
      </div>

    </div>
  )
}

