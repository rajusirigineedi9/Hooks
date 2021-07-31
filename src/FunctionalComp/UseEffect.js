import React, {useState,useEffect} from 'react'

function UseEffect() {
    const [count,setCount]=useState([])
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res=>res.json())
        .then(result=>{
            setData(result)
            console.log(result)
            
        });
    },[])
    return (
        <div>
            <h1>hello</h1>
            {
                data.map(user=>(<img src={user.url} />

                ))
            
            }
        </div>
    )
}

export default UseEffect
