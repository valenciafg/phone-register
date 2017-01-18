import React, {Component} from 'react';
import ListPorts from './serialport/ListPorts';
class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <h1>HOLA ELECTRON!</h1>
        <ListPorts/>
      </div>
    );
  }
}

export default Main;
