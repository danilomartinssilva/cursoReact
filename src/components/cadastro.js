import React, { Component } from 'react';
import { database } from '../firebase';

class Cadastro extends Component{
    constructor(props){
        super(props); 
        this.state={
            title:'',
            body:'',            
        } ; 
        this.handleChange = this.handleChange.bind(this);            
        this.handleSubmit = this.handleSubmit.bind(this);            
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            [e.target.id]:e.target.value
        })
        var dateWithoutFormat = new Date().toLocaleString('pt-BR');
        var dateWithFormat = dateWithoutFormat.split(" ");
        console.log(dateWithFormat);
        const note = {
            title: this.state.title,
            body : this.state.body,
            dateModify : dateWithFormat[0]
        }
        //dateModify = new Date().getFullYear() + new Date().getMonth() + new
        database.push(note);
   
        this.setState({
            title:"",
            body:"",

        })
        
    }
    

    render(){
        return(                        
        <form>
        <header><h1>Cadastro</h1></header>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input name="title" value={this.state.title} onChange={this.handleChange}  required type="text" className="form-control" id="title" placeholder="Enter title..."/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>                    
                    <textarea name="body" value={this.state.body}  onChange={this.handleChange} required className="form-control" id="body" placeholder="Body..."></textarea>
                </div>
             
                <button type="submit" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
        </form>

        );        
    }
}

export default Cadastro;
