import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"raju"
             
        }
    }
    

     handleclick = () =>{
this.setState({name:"venky"})
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleclick}>Click</button>
            </div>
        )
    }
}

export default State
