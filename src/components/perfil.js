import React,{Component } from 'react';
import { auth } from '../firebase';

class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = ({
          user:{}

        })
    }

    componentDidMount(){
        const self = this;
        auth.onAuthStateChanged(function(user){
            if(user){
                self.setState({
                   user
                })
            }  
            

        })
    }
    render(){
        return (
            <div>                
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={ this.state.user.photoURL } alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{this.state.user.displayName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email:  <b>{this.state.user.email}</b></li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>    

        );
    }

}

export default Perfil