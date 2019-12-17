import React, { Component } from 'react';
import Header from '../Header/Header'
import UserNavBar from '../KorisnikPages/UserNavBar';
import {Redirect} from 'react-router-dom';
import {Nav, Container, Row, Col, Table, Form} from 'react-bootstrap';
class Profil extends Component {

  constructor(props){
    super(props);
    this.state = {
        redirect: false,
    }
}


      render() {
        return (
            <div className="mainpage">
            
            <UserNavBar></UserNavBar>
        
            <Header></Header> 
    
            <div className="body">
              <h3 className="naslov">Ime i prezime</h3>
              <h3>Info o korisniku</h3>
          </div>
        
        </div>
        ) 
      }

} 

export default Profil;