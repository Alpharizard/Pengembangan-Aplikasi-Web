import React, { Component } from 'react';
import './css/bootstrap.min.css';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';
import './App.css';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            your_name: '',
            status: ''}
        }
    render () {
        const View = ()=>{
            if(this.state.view == 'home')
            return <Home />
            else if (this.state.view == 'about')
            return <About />
            else if(this.state.view == 'help')
            return <Help />
        }
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick={()=> this.props.getValue('home')} className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a onClick={()=> this.props.getValue('about')} className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a onClick={()=> this.props.getValue('help')} className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </nav>
                <React.Fragment>
                <h2 style={{width: '550px', margin: 'auto', textAlign: 'center', color: '#4d90fe'}}>
                    Sistem Informasi e-Biz
                </h2>
                <Input getValues={(name, value)=> this.setState({[name]: value}) }/>
                <Card.Container>
                    <Card.Header>{this.state.your_name}</Card.Header>
                    <Card.Body>
                        <p>{this.state.status}</p>
                    </Card.Body>
                </Card.Container>
            </React.Fragment>
            </div>
        );
    }
}