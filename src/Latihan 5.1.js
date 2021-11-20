import React, {Component} from 'react'
import './App.css'

function sayHello(){
    return "Hello World"
}

class App extends Component{
    bilangHalo(){
        return "Halo Dunia"
    }


render(){
    return(
        <>
        <p>sayHello: <b>{sayHello()}</b></p>
        <p>bilangHalo: <b>{this.bilangHalo()}</b></p>
        </>
    )
}
}

export default App