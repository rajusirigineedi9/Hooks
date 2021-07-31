import React from 'react'
import {useContext} from 'react'
import {Context} from "./UseContext"
function ChildCompContext() {
const name=useContext(Context)
    return (
        <div>
            {name}
        </div>
    )
}

export default ChildCompContext
