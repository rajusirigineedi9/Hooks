import React,{useState,useEffect,useRef} from 'react'

function UseRef2() {
    const [timer,setTimer] = useState(0)
const IntervalRef = useRef()
    useEffect(()=>{
       IntervalRef.current= setInterval(()=>{
            setTimer((prevTimer)=>prevTimer+1)
        },1000);
        return ()=>{
            clearInterval(IntervalRef.current)
        }
    },[timer]);
    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={()=>clearInterval(IntervalRef.current)}>Click</button>
        </div>
    )
}

export default UseRef2
