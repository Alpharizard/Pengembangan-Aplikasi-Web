import React, {Component} from 'react';
import './App.css'; //import file css

class App extends Component {
    /*
    render component
    */
    render() {
        return (
            <div>
                {/*
                <h1 style={{textAlign: 'center', color: 'rgb(252, 146, 158'}}>Hello World</h1>
                */}
                <h2>Praktek Pengembangan Aplikasi Web</h2>
                <p className="content-text">Reactjs merupakan framework atau pustaka Javascript untuk membangun komponen interaksi pengguna yang interaktif dan dapat digunakan ulang.</p>
            </div>
        );
    }
}

export default App;