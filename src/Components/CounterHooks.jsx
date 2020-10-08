import React, {useState} from 'react'


export default function Counter(){
  const [ counter , setCounter] = useState(0)

  return (
    <div style={{padding:"2%", border:"2px solid black" , width:"10%", marginLeft:"40%", borderRadius:"5px"}}>
      <h1> Counter </h1>
     <h3>{counter}</h3>
     <div>
       <button onClick={()=> setCounter(counter+1)}>Add</button>
       <button onClick={()=> setCounter(counter-1)}>reduce</button>
     </div>
    </div>
  )

}