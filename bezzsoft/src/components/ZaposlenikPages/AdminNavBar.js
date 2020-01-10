import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class AdminNavBar extends Component {

render(){
    return(
     <div className="navbar"> 
      <Navbar  expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto"></Nav>
      
        <Nav.Link href="/pocetnauposlenik"><p className="textlink">Početna</p> </Nav.Link>
        <Nav.Link href="/urediponude"><p className="textlink">Uređuj ponude</p> </Nav.Link>
        <Nav.Link href="/uposlenikpostavke"><p className="textlink">Postavke uposlenika</p> </Nav.Link>
        <Nav.Link href="/klijentipostavke"><p className="textlink">Postavke klijenata</p> </Nav.Link>
        <Nav.Link href="/login"><p className="textlink">Logout</p> </Nav.Link>
        
       
      </Navbar.Collapse>
      </Navbar>
    </div>  
    );
}

}

export default AdminNavBar;