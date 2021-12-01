import React from 'react'
import {useRef,useEffect} from 'react'
function UseRef() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
       
    }, [])
    return (
        <div>
            <input ref={inputRef}></input>
            <input ref={inputRef2}></input>
        </div>
    )
}

export default UseRef
