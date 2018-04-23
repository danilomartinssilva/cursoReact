import React, { Component } from 'react';

import Cadastro from './cadastro';
import Lista from './lista';




class App extends Component {

  
  render() {
    return (
      <div className="container-fluid">
      <section>
        <Cadastro dados = { this.state } />
      </section>
      <br></br>
      <section>      
        <Lista/>
      </section>   
      </div>
    );
  }
}

export default App;
