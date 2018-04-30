import React,{Component} from 'react';
import './css/login.css';
import {auth} from '../firebase';
import { googleProvider } from '../firebase';
import { Autenticado  } from './autenticado';

class Login extends Component{
    constructor(props){
        super(props);     
        this.loginWithGoogle = this.loginWithGoogle.bind(this);

        
    }
    loginWithGoogle(){
        auth.signInWithPopup(googleProvider);
    }

    render(){

        return(
            <div className="container">
            <button className="loginBtn loginBtn--facebook">
            Login with Facebook
          </button>
          
          <button onClick= { this.loginWithGoogle }  className="loginBtn loginBtn--google">
            Login with Google
          </button>
            </div>
        );
    }
    componentWillReceiveProps(nextProps){
        window.console.log(nextProps)
    }



}

export default Login