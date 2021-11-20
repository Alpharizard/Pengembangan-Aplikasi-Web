import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css'

function Message(){
    return <p>Hello frrom Message component</p>
}

class App extends Component{
render(){
    return(
        <div>
        <Message />
        </div>
    );
}
}

export default App