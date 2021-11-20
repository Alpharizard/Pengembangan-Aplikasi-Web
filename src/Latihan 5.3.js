import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css'
import Home from './views/Home/Home';

function Message(){ return "Pemirsa"
}

class App extends Component{
render(){
    return(
        <div>
        <Message />
        <Home />
        </div>
    );
}
}

export default App