import React , { useState } from 'react'
import axios from 'axios'

function Github(){
    const [query, setQuery] = useState("")
    const [data, setData] = useState(null)


    const handleClick = () => {
        axios
          .get("https://api.github.com/search/users", {
            params: {
              q: query
            }
          })
          .then((res) => setData(res.data.items))
          .catch((err) => console.log("error", err));
      };

    console.log(data)

    return (
        <div style={{padding:"2%", border:"2px solid black" , width:"50%", marginLeft:"20%",marginBottom:"9%", borderRadius:"5px", marginTop:"5%"}}>
            <h1> Github Search Users </h1>
            <input value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleClick} >SEARCH</button>
        
            {data && data.map(item => <div key={item.id} > {item.login} </div> ) }

        </div>
    )
}
export default Github