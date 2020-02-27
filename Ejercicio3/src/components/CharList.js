import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharComponent from './CharComponent'

export default class CharList extends React.Component{


    render(){
        return(
          <div className="p-3 m-3">
          {
          this.props.text.split("").map((char,i) =>
          <CharComponent parent={this.props.parent} key={i} index={i} letter={char}></CharComponent>)
          }
          </div>
        );
    }
}
