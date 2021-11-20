import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css'
import Home from './views/Home/Home';

function Message(props){ 
    return <p>Hello {props.name},</p>
}

class App extends Component{
render(){
    return(
        <div>
        <Message name="Ulrich" />
        <Home name="Eden Hazard"/>
        </div>
         );
    }
}

export default App