import React, {Component} from 'react';
import './App.css'; //import file css

class App extends Component {
    /*
    render component
    */
    render() {
        var h1 = <i>Lannister</i>;
        const title = "Praktek Pengembangan Aplikasi Web";
        this.text = "Reactjs merupakan framework atau pustaka Javascript untuk membangun komponen interaksi pengguna yang interaktif dan dapat digunakan ulang"
        return (
            <div>
                {
                <h1 style={{textAlign: 'center', color: 'rgb(252, 146, 158'}}>Hello, {h1}</h1>
                }
                <h2 className="title">{title}</h2>
                <p className="content-text">{this.text}.</p>
            </div>
        );
    }
}

export default App;