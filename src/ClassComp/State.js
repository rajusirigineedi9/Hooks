import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"raju",
            count:0,
            field:""
             
        }
    }
    

//      handleclick = () =>{
// this.setState({name:"venky"})
//     }

eventhandler = (e)=>{
    e.preventDefault();
    alert(this.state.field)
}
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.count}</h2>
                {/* <h2>{this.state.field}</h2> */}
                <button onClick={()=>this.setState({name:"venky"})}>Click</button>
            
                
                <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
                <form onSubmit={this.eventhandler}>
                    <input type="text " value={this.state.field}  onChange={(e)=>this.setState({field:e.target.value})}></input>
                    <input type="submit"></input>
                </form>
                 </div>               
            </div>
        )
    }
}

export default State
