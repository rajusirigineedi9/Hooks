import React,{useState} from 'react'

function UseState() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("Raju")
    const [value,setValue]=useState("")

    const submithandler=(e)=>{
e.preventDefault();
alert(value);
    }

    return (
        <div>
           <h2>{count}</h2> 
          <h2> {name}</h2>
           <button onClick={()=>setCount(count+1)}>Increment</button>
           <button onClick={()=>setName("Venky")}>ChangeName</button>
           <form onSubmit={submithandler}>
               <div>
               <label>Enter any value : </label>
               <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
               </div>
               <input type="submit"></input>
           </form>
        </div>
    )
}

export default UseState
