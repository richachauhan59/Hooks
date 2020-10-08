import React , { useState } from 'react'
import axios from 'axios'

function ToDo(){
    const [query, setQuery] = useState("")
    const [data, setData] = useState(null)

    

 
    return (
        <div style={{padding:"2%", border:"2px solid black" , width:"50%", marginLeft:"20%",marginBottom:"9%", borderRadius:"5px", marginTop:"5%"}}>
            <h1> ToDo </h1>
            <input value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleClick} >Add</button>
            <button onClick={handleClick} >Add</button>

            {data && data.map(item => <div key={item.id} > {item.login} </div> ) }

        </div>
    )
}
export default ToDo