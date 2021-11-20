import React, {Component} from 'react'
import './css/bootstrap.min.css'; //import bootstrap
import logo from './logo.svg';
import './App.css'
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';


class App extends Component{
    constructor(){
        super();
        //initial state view
        this.state = {
            view : 'home'
        }
    }
render(){
    //functional component view untuk mengatur component yang tampil
    const View = ()=>{
        if(this.state.view =='home')
        return <home name="Eden Hazard" />
        else if(this.state.view =='about')
        return <About />
        else if(this.state.view =='help')
        return <Help />
    }
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={()=> this.setState({view : 'about'})} className="nav-link" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={()=> this.setState({view : 'help'})} className="nav-link" href="#">
                            Help
                        </a>
                    </li>
                </ul>
            </nav>
            <view /> {/* memanggil component view */}
        </div>
         );
    }
}

export default App