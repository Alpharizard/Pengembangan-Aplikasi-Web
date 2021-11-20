import React, {Component} from 'react';
import './App.css'; //import file css
import Home from './views/Home/Home';

function Message(props){ 
    return <p>Hello {props.name},</p> }

class App extends Component {
    /*
    render component
    */
    render() {
        return (
            <div>
            <Message name= "Ulrich" />
            <Home name= "Eden Hazard"/>
            </div>
        );
    }
}

export default App;