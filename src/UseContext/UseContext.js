import React, {useState} from 'react'
import ChildCompContext from './ChildCompContext';

export const Context = React.createContext();

function UseContext() {
    const [name,setName] = useState("rajjj")
    return (
        <div>
            <Context.Provider value={name}> <ChildCompContext/>
            </Context.Provider>
           
        </div>
    )
}

export default UseContext
