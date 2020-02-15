import React, { Component } from 'react';
import {Navbar,Nav,Image} from 'react-bootstrap';
import bih from './bih.png'
import eng from './eng.png'
import hlp from './help.png'
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
        <Nav.Link href="/pomocadmin"><Image src={hlp} style={{width:'3em', height:'3em', padding:'none'}} roundedCircle/></Nav.Link>
        <Nav.Link href="/pocetnauposlenik"><Image src={bih} style={{width:'3em', height:'2em', padding:'none'}} roundedCircle/></Nav.Link>
        <Nav.Link href="/pocetnauposlenik"><Image src={eng} style={{width:'3em', height:'2em', padding:'none'}} roundedCircle/></Nav.Link>
      </Navbar.Collapse>
      </Navbar>
    </div>  
    );
}

}

export default AdminNavBar;