import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

import CharList from './components/CharList';



export class App extends React.Component {
  
  constructor(props){
    super(props); 
    this.state = {
      text:'',
      longitud: 0
    }
  }

  formChangedHandler = (event) => {
    this.setState({
      text: event.target.value,
      longitud: event.target.value.split('').length
    })
  }
  render(){
    console.log(this.state.text);
    return (
      <div className="App">
        <div className="container-sm p-5 text-center">
          <Form>
            <Form.Control type="text" placeholder="Insert text" value={this.state.text} onChange={this.formChangedHandler}/>
          </Form>
          <label className="p-3">Number of char Inputs: {this.state.longitud}</label>
          <div className="container-sm p-2">
            <CharList letter={this.state.text}></CharList>
          </div>
        </div>
      </div>
    );
    }
}

export default App;
