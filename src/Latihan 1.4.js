import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="content">
                <h1 style={{textAlign: 'center', color: 'rgb(252, 146, 158'}}>Hello World</h1>
                <h2 className="title">Praktek Pengembangan Aplikasi Web</h2>
                <p className="content-text">Reactjs merupakan framework atau pustaka Javascript untuk membangun komponen interaksi pengguna yang interaktif dan dapat digunakan ulang</p>
            </div>
        );
    }
}

export default App;