import React , { useState, useEffect
 } from 'react'
import { v4 as uuid} from 'uuid'

function ToDo(){
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])


    useEffect(() => {
        handleClick();
      }, []);
    
      useEffect(() => {
      }, [data, query]);


    const handleClick = ( ) => {
        setData([...data, {title: query, id: uuid()}])
    }


    const deleteTodo = (id) => {
        setData(data.filter((data) => data.id !== id));
      };
    
      console.log(data)
    return (
        <div style={{padding:"2%", border:"2px solid black" , width:"50%", marginLeft:"20%",marginBottom:"9%", borderRadius:"5px", marginTop:"5%"}}>
            <h1> ToDo </h1>
            <input value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleClick} >Add</button>

            {data && data.map((item, index) => 
            <div id={item.id}> {item.title}
            <button  onClick={() => deleteTodo(item.id)} >Delete</button>
            </div>
            )}
        </div>
    )
}
export default ToDo
