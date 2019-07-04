import React,{Component} from 'react';
import './App.css';
import Logo from './component/header/logo/logo.js';
import 'tachyons';
import Particles from 'react-particles-js';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import login from "./home";
// import Stuff from "./Stuff";
// import Contact from "./Contac
const particlesOption =  {
                particles: {
                  number:{
                    value:300,
                    desity:{
                      enable:true,
                      value_area:8000
                    }
                  }
                  }
                }

 class App extends Component{
 

render(){
  return (
      <div>
      
  	<HashRouter >
  	
    <div className="App" >
    
      <div >
       
          <div >
          <ul className="header">
          	
          	<li>	<Logo/>	</li>
            <div className='tr'>
          	<li><NavLink to="/Home">Home</NavLink></li>
             <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </div>
          </ul>
          <div className="content">
             <Route path="/login" component={login}/>
            {/*<Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          */}
          </div>
          </div>
         
      
        </div>
      
    </div>
    </HashRouter>
    <Particles className="particles"
              params={particlesOption}  
            /> 
            </div>
    
  );
}
}
export default App;
