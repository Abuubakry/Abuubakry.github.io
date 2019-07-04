import React, { Component } from "react";
import Form  from './component/user/form.js'
import User from './component/user/user.js' 


class Home extends Component {
 constructor(){
    super();
    this.state={
        route:'home'
    }
}



onRouteChange=(route)=>{
  this.setState({route:'route '})
  console.log(this.state.route)
}

  render() {
    return (
        <div>
        { 
          this.state.route==='home'
        ?<Form onRouteChange={this.onRouteChange}/>
        : <User/> 
      }
  </div>

      
    );
  }

 }
export default Home;