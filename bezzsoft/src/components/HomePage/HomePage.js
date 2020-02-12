import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header'
import { Nav } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
class HomePage extends Component {

render(){
    localStorage.setItem('username','');
    localStorage.setItem('password','');
    localStorage.setItem('id','-1');
    localStorage.setItem('prijavljen',false);
    localStorage.setItem('role','neprijavljen');
    return(
        
        <div className="mainpage">
            <Redirect to="/pocetna"></Redirect>
                   
            <Header></Header>
        
        
            <div className="body">

                <div className="opis">
                <button className="engleski" onClick={this.onLogin} >
                    English 
                </button>
                <Nav.Link href="/pocetna" ><button className="bosanski" onClick={this.onLogin} >
                    Bosanski
                </button> </Nav.Link>
                </div>
        
                
        
            </div>
        
        </div>
    
    );
}

}

export default HomePage;