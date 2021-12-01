import React, { Component } from 'react'
import HOCComponent from './HOCComponent'
export class Data extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.name}</h1> 
               <h2>{this.props.checkStatus}</h2>
            </div>
        )
    }
}

export default HOCComponent(Data);