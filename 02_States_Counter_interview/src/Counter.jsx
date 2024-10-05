import React from 'react'
import { useState } from 'react'

function Counter() {
    let [count,setcount] = useState(0);
    function increaseCounter() {
        if(count<50){
            setcount((prevCounter)=>prevCounter+1);
            setcount((prevCounter)=>prevCounter+1);
            setcount((prevCounter)=>prevCounter+1);
            setcount((prevCounter)=>prevCounter+1);
           
        }
    }
    function decreaseCounter() {
        if(count>0){
            setcount(count-1);
        }
    }
    
  return (
    <div>
        <h4>ALLAH LOVE US</h4>
        <h3>Count = {count} </h3>
      <button onClick={increaseCounter} >Counter Up</button><br />
      <button onClick={decreaseCounter} >Counter Down</button>
      
    </div>
  )
}

export default Counter
