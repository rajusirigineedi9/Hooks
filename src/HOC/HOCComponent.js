import React, { Component } from 'react'
const HOCComponent = Data => {
 class HocComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"raju",
              checked: ""
         }
     }
     
    render() {
        return (
            <div>
              <Data name={this.state.name}
              checkStatus={this.state.checked}/> 
              <input type="checkbox" onClick={()=>this.setState({checked:"CheckboxChecked"})} ></input>
            </div>
        )
    }
}
return HocComponent
}

export default HOCComponent
