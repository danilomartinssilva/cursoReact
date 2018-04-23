import React, { Component } from 'react';
import _  from 'lodash';
import { database } from '../firebase';
import Cadastro from './cadastro';


class Lista extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
        this.renderNotes = this.renderNotes.bind(this);
    }
    
    render(){        
        return (
            
            <div>
                
             {this.renderNotes()}
             
           </div>    

           
        )
    }
    deleteItem(key){
        
        //const { key } = this.props.notes;
        //console.log(id);
        
        database.child(key).remove();
    }
    renderNotes(){
        return _.map(this.state.notes,(note,key)=>{
            
              return (
                <div key = {key}>
                    <div className="card" >
                        <h5 className="card-header">{note.title}</h5>
                        <div className="card-body">
                            
                            <p className="card-text">{note.body}</p>
                            <button className="btn btn-danger" onClick={()=> this.deleteItem(key) }>Excluir</button>
                        </div>                    
                        
                    </div>
                    <br></br>
                </div>
                
              )  
        })
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