import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class UserNavBar extends Component {

render(){
    return(
     <div className="navbar"> 
      <Navbar  expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto"></Nav>
      
        <Nav.Link href="/home"><p className="textlink">Početna</p> </Nav.Link>
        <Nav.Link href="/pregledkosnica"><p className="textlink">Pregled košnica</p> </Nav.Link>
        <Nav.Link href="/profil"><p className="textlink">Profil</p> </Nav.Link>
        <Nav.Link href="/login"><p className="textlink">Logout</p> </Nav.Link>
       
      </Navbar.Collapse>
      </Navbar>
    </div>  
    );
}

}

export default UserNavBar;