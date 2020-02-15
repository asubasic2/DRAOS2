import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from './UserNavBar'
import Header from '../Header/Header'
import {Container, Row, Col, Table, Nav} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class ListaZelja extends Component {
    constructor(props){
        super(props);
        this.state = {
            sveZelje: []
        }
    }
    getIndex(value, arr, prop) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i][prop] === value) {
                return i;
            }
        }
        return -1;
    }
    ukloniZelju(ovu){
        this.state.sveZelje.splice(this.getIndex(ovu, this.state.sveZelje, 'id'),1);
        localStorage.setItem("meso", JSON.stringify(this.state.sveZelje))
        alert("Ponuda je uklonjena iz liste želja!")
    }
    componentDidMount(){
        this.setState({
            sveZelje: JSON.parse(localStorage.getItem('meso'))
        })
    }
render(){ 
    var svePonude;
    if(this.state.sveZelje.length == 0);
    else{
        svePonude = this.state.sveZelje.map((up, index) =>{
            return (
                    <tr>
                        <td style = {{textAlign: 'center'}}>{up.hotel}</td>
                        <td style = {{textAlign: 'center'}}>{up.mjesto}</td>
                        <td><Nav.Link href = "/detaljiHotel" > <button className="submit" onClick = {()=>{localStorage.setItem("idIspo1", up.id)}}> Info </button> </Nav.Link></td>
                        <td><Nav.Link href = "/listaZelja" > <button className="submit" onClick = {()=>{this.ukloniZelju(up.id)}}> Ukloni </button></Nav.Link></td>
                    </tr>
            
            );
        }) 
    }
    
        return(
            <div className="mainpage">
            
            <UserNav></UserNav> 

            <Header></Header>
        
            <div className="body">
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Vaše spašene lokacije</h3>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th style = {{textAlign: 'center'}}>HOTEL</th>
                            <th style = {{textAlign: 'center'}}>MJESTO</th>
                            <th style = {{textAlign: 'center'}}>POGLEDAJ</th>
                            <th style = {{textAlign: 'center'}}>BRISANJE IZ LISTE</th>
                        </tr>
                        {svePonude}
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
            </div>

        </div>
        );
}

}

export default ListaZelja;