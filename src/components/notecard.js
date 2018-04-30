import React,{Component } from 'react';
import { database } from '../firebase';
import _  from 'lodash';

class NoteCard extends Component{

    render(){
        
        return (
           <div>
            <div>
           { 
            Object.keys(this.props.notes).map(
                key=>this.renderNote(key,this.props.notes[key])) }
             </div>           
           </div>
        )


    }
    deleteItem(key){        
        //console.log(this.isEmpty());
       database.child(key).remove();
    }
    renderNote(key,note){
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
    }

}

export default NoteCard;