import React, { Component } from 'react';
import {Navbar,Nav,Image} from 'react-bootstrap';
import bih from './bih.png'
import eng from './eng.png'
import hlp from './help.png'

class UserNavBar extends Component {

render(){
    return(
     <div className="navbar"> 
      <Navbar  expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto"></Nav>
        <Nav.Link href="/pocetnaeng"><p className="textlink">Home</p></Nav.Link>
        <Nav.Link href="/ljetoeng"><p className="textlink">Summer</p></Nav.Link>
        <Nav.Link href="/putovanja"><p className="textlink">Travel</p></Nav.Link>
        <Nav.Link href="/zimovanje"><p className="textlink">Winter</p></Nav.Link>
        <Nav.Link href="/novagodina"><p className="textlink">New year</p></Nav.Link>
        <Nav.Link href="/kontakt"><p className="textlink">Contact</p></Nav.Link>
        <Nav.Link href="/login"><p className="textlink">Logout</p> </Nav.Link>
        <Nav.Link href="/pomoc"><Image src={hlp} style={{width:'3em', height:'3em', padding:'none'}} roundedCircle/></Nav.Link>
        <Nav.Link href="/pocetna"><Image src={bih} style={{width:'3em', height:'2em', padding:'none'}} roundedCircle/></Nav.Link>
        <Nav.Link href="/pocetnaeng"><Image src={eng} style={{width:'3em', height:'2em', padding:'none'}} roundedCircle/></Nav.Link>
      </Navbar.Collapse>
      </Navbar>
    </div>  
    );
}

}

export default UserNavBar;