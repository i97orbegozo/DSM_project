import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputCal from './components/calInput';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formLabelNameIn: "Numero a multiplicar",
      formLabelNameOut: "Resultado",

      inputVal: 0,
      mult: null,
      outputVal: 0 
 
    }
  }

  inputChanged = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  }
  
  multiplierChanged = (event) => {
    var newMult = event.target.value;
    var result = newMult * this.state.inputVal;

    this.setState({
      mult: newMult,
      outputVal: result
    })
  }
  
  
  render(){
    return(
      <div className="container-fluid">
        <div className="container-sm p-5 w-30 text-center">
          <InputCal
            value={this.state.inputVal}
            id="inputCalculator"
            nameLabel={this.state.formLabelNameIn}
            change={this.inputChanged}>  
          </InputCal>

          <div className="p-2 text-center">
            <button 
              className="btn btn-warning m-3" 
              value={37} 
              onClick={this.multiplierChanged} >
                x37
            </button>
            
            <button 
              className="btn btn-warning m-3" 
              value={42} 
              onClick={this.multiplierChanged}>
                x42
            </button>
          </div>

          <label className="font-weight-light">Usando el multiplicador:{this.state.mult}</label>

          <div className="container-sm">
            <input 
              nameLabel={this.state.formLabelNameOut}
              value={this.state.outputVal}
              disabled
            />
          </div>
            
        
        
        </div>
      </div>
    );
  }
}

export default App;
