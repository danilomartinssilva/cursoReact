import React, { Component } from 'react';
import _  from 'lodash';
import { database } from '../firebase';
import Cadastro from './cadastro';
import NoteCard from './notecard';


class Lista extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }    
        
    }
    render(){  

         if(_.isEmpty(this.state.notes)===false){
            return (
            
                <div>
                <NoteCard notes ={ this.state.notes }></NoteCard>                 
               </div>             
            )
         }
         else{
             return (
                null
             )
         }
        
    }
   
    componentWillUnmount() {
        database.off();
      }  
    componentDidMount(){
       
        database.on('value',sn=>{            
            this.setState({
                notes:sn.val()
            })
        })    
        
    }

}

export default Lista;