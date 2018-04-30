import React, {Component} from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import {auth} from '../firebase';

class Header extends Component {


    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">            
              <Link className="navbar-brand" to="#">Navbar</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className={ window.location.href.split('/').pop()==="cadastro" ? "nav-item active" : "nav-item"}>
                  
                    <Link className="nav-link" to="/cadastro">Cadastrar <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className={ window.location.href.split('/').pop()==="listar" ? "nav-item active" : "nav-item" }>
                    <Link className="nav-link" to="/listar">Listar</Link>
                  </li>
                  <li className={ window.location.href.split('/').pop()==="upload" ? "nav-item active" : "nav-item" }>
                  <Link className="nav-link" to="/upload">Upload</Link>
                </li>
                <li className={ window.location.href.split('/').pop()==="perfil" ? "nav-item active" : "nav-item" }>
                  <Link className="nav-link" to="/perfil" >Perfil</Link>
                </li>
                <li className={ window.location.href.split('/').pop()==="logout" ? "nav-item active" : "nav-item" }>
                  <Link className="nav-link" to="/logout" onClick={()=>this.logout()}>Logout</Link>
                </li>
                
                </ul>
              </div>
            </nav>
            
            </div>  
        )
    }
    logout(){
      auth.signOut();
    }

}




export default Header;
