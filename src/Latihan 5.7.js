import React, { Component } from 'react';
import Card from './components/Card/Card.js';

export default class Main extends Component {
    render () {
        return (
            <Card>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs</p> {/* <=== Children dari component Card */}
            </Card>
        );
    }
}