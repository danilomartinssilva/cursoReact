import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {auth} from '../firebase';
import { googleProvider } from '../firebase';
import Login from './login';

class Autenticado extends Component{

    constructor(props){
        super(props)        
        this.state = {
            isLoggedIn:false,
            user: {}
        }        
    }   
  
    componentDidMount(){        
        const { history } = this.props;
        const self = this;
        auth.onAuthStateChanged((user)=>{
            if(user){
                self.setState({
                    isLoggedIn:true,
                    user:user
                })
            }
            else{
                self.setState({
                    isLoggedIn:false,
                    user:{}
                })
            }
        })                
        
    }

    render (){
        return (
            <div>
            {this.state.isLoggedIn ?
            <div>{this.props.children}</div>
                : <Login isLoggedIn = {this.state.isLoggedIn} />
            }
            </div>
        )

    }

    

}
export default (Autenticado)