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
                className="btn btn-warning p-3 m-1"
                onClick={()=> this.props.parent.removeLetterHandler(this.props.index)}
            > 
              {this.props.letter}
            </div>
            
        );
    }
}
