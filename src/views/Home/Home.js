import React from 'react';
import Main from '../../App';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.stat = {name : this.props.name}
    }
    render(){
        return(
            <div>
                <Main />
            </div>
        )
    }
}