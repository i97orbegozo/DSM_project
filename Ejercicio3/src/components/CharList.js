import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharComponent from './CharComponent'

export default class CharList extends React.Component{

    removeHendler(){

    }

    render(){
        return(
            <div className="container-sm p-3">
            {this.state.charList.map((char, i) => {
                return(
                  <CharComponent key={i} letter={char}/>
                );
                })}
          </div>
        );
    }
}
