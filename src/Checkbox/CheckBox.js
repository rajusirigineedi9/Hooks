import React, { useState } from 'react'

function CheckBox() {
    const [data,setData] = useState(false);
    const [buttondata,setButtondata] = useState(" ");

//    const  flip=()=>{
//         setData(state:!data)
    
    return (
        <div>
            <input type="checkbox" checked={data} onChange={(e)=>{setData(e.target.checked)}}></input> <br></br>
            <div>{data ? <button onClick={()=>setButtondata("hi")}>+ Add</button> : " "}</div>
            <p style={{backgroundColor:"cyan"}}>{buttondata}</p>
            <p style={{color:"orange"}}>{data ? "this is the checked data" : " "}</p>
           
        </div> 
    )
}

export default CheckBox
