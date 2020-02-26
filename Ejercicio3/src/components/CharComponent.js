import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CharComponent extends React.Component{

    componentDidMount(){

    }

    componentWillUnmount(){
    }

    render(){
        return(
            <div 
                className="btn btn-warning p-3 w-3"
                onClick={()=> this.props.removeLetter()}
            > 
            {this.props.letter}
            </div>
            
        );
    }
}
