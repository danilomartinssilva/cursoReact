import React, { Component } from 'react';
import { BrowserRouter ,Router,Route,Link,Switch,Redirect,withRouter} from 'react-router-dom';

import Cadastro from './cadastro';
import Lista from './lista';
import Header from './header.js';
import Upload from './upload.js';
import Login from './login.js';
import Autenticado from './autenticado';
import Perfil from './perfil';



class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Switch>
          <Route path="/login" component={Login} exact={true} />     
          <Route path="/autenticado" component={Autenticado} exact={true} />  
          <Redirect from="/logout"   to="/autenticado"/>          
          <Autenticado>               
          <Header/>  
            <Route path = "/cadastro" component={Cadastro}/>
            <Route path = "/listar" component={Lista}/>  
            <Route path = "/upload" component={Upload}/>  
            <Route path = "/perfil" component={Perfil}/>  
            
            
          </Autenticado>
        </Switch>
    </div>    
</BrowserRouter>
      
    );
  }
}

export default App;
