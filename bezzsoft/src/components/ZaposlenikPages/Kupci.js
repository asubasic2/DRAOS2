import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header';
import {ListGroup, Accordion, Card, Button, Nav} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';


class Kupci extends Component {
    constructor(props){
        super(props);
        this.state = {
            korisnici: [],
            id: localStorage.getItem("id")
        }
    }

render(){
   
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
            
        
        
    
            <div className="body">
                <h3 className="naslov">Kupci</h3>
                <h2>Lista kupaca</h2>
                <h2>Lista rezervacija</h2>
                <h2>Napravi rezervaciju možda ne treba?</h2>
                <h2>Obriši rezervaciju</h2>
            </div>
        
        </div>
    
    );
}

}

export default Kupci;