import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container, Row, Col, Table, Nav} from 'react-bootstrap';
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';


class UrediPonude extends Component {
    constructor(props){
        super(props);
        this.state = {
            ponude: [],
            stanje: false
        }
    }

    componentDidMount(){
        this.setState({
            ponude: JSON.parse(localStorage.getItem('ponude'))
        })
    }

render(){
   const svePonude = this.state.ponude.map((up) =>{
        return (
                <tr>
                    <td style = {{textAlign: 'center'}}>{up.hotel}</td>
                    <td style = {{textAlign: 'center'}}>{up.mjesto}</td>
                    <td style = {{textAlign: 'center'}}>{up.drzava}</td>
                    <td><Nav.Link href = "/detaljiPonude" > <button className="submit" onClick = {()=>{localStorage.setItem("idIspo", up.id)}}> Edit </button> </Nav.Link></td>
                </tr>
        
        );
    }) 

    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Ponude</h3>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                        <tr>
                            <th style = {{textAlign: 'center'}}>HOTEL</th>
                            <th style = {{textAlign: 'center'}}>MJESTO</th>
                            <th style = {{textAlign: 'center'}}>DRŽAVA</th>
                            <th style = {{textAlign: 'center'}}>POSTAVKE</th>
                        </tr>
                    <tbody>
                        {svePonude}
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
            <Nav.Link href = "/dodajPonudu" ><button className="submit"> Dodaj ponudu </button> </Nav.Link>
            </div>
            
        </div>
    
    );
}

}

export default UrediPonude;