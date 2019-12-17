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
      
        <Nav.Link href="/pregledkorisnika"><p className="textlink">Zaposlenici</p> </Nav.Link>
        <Nav.Link href="/dodajkorisnika"><p className="textlink">Destinacije</p> </Nav.Link>
        <Nav.Link href="/kupci"><p className="textlink">Kupci</p> </Nav.Link>
        <Nav.Link href="/login"><p className="textlink">Logout</p> </Nav.Link>
        
       
      </Navbar.Collapse>
      </Navbar>
    </div>  
    );
}

}

export default AdminNavBar;