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
    componentDidMount(){
        this.setState({
            sveZelje: JSON.parse(localStorage.getItem('meso'))
        })
    }
render(){ 
    var svePonude = <tr><td>prazno</td><td>prazno</td></tr>;
    if(this.state.sveZelje.length == 0);
    else{
        svePonude = this.state.sveZelje.map((up) =>{
            return (
                    <tr>
                        <td style = {{textAlign: 'center'}}>{up.mjesto}</td>
                        <td><Nav.Link href = "/listaZelja" > <button className="submit" > Pogledaj </button> </Nav.Link></td>
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
                            <th style = {{textAlign: 'center'}}>LOKACIJA</th>
                            <th style = {{textAlign: 'center'}}>POGLEDAJ</th>
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