import React, {Component} from 'react';
import './Card.css';
/*
export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    My Card
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}*/

const Card = {
    Container: (props)=>{
        return<div className="card">{props.children}</div>
    }, 

    Header: (props)=>{
        return<div className="card-header">{props.children}</div>
    }, 

    Body: (props)=>{
        return<div className="card-body">{props.children}</div>
    }, 
}
export default Card;