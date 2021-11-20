import React, {Component} from 'react';
import logo from './logo.svg'; //import file image logo.svg
import './App.css'; //import file css
import Home from './views/Home/Home';

function Message(){ "Halo" }

class App extends Component {
    /*
    render component
    */
    render() {
        return (
            <div>
            <Message />
            <Home />
            </div>
        );
    }
}

export default App;