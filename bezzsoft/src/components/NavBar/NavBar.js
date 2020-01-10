import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class NavBar extends Component {

render(){
    return(
     <div className="navbar"> 
      <Navbar  expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
        <Nav.Link href="/pocetna"><p className="textlink">Početna</p></Nav.Link>
        <Nav.Link href="/ljetovanje"><p className="textlink">Ljetovanje</p></Nav.Link>
        <Nav.Link href="/putovanja"><p className="textlink">Putovanja</p></Nav.Link>
        <Nav.Link href="/zimovanje"><p className="textlink">Zimovanje</p></Nav.Link>
        <Nav.Link href="/novagodina"><p className="textlink">Nova godina</p></Nav.Link>
        <Nav.Link href="/login"><p className="textlink">Login</p> </Nav.Link>
        <Nav.Link href="/prijava"><p className="textlink">Prijava</p> </Nav.Link>
        <Nav.Link href="/kontakt"><p className="textlink">Kontakt</p></Nav.Link>
      </Navbar.Collapse>
      </Navbar>
    </div>  
    );
}

}

export default NavBar;