import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form} from 'react-bootstrap'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class DetaljiPonude extends Component {
constructor(props){
    super(props);
    this.state = {
        id: localStorage.getItem("idIspo"),
        ponuda: {}
    }
}

componentDidMount(){
    var svePonude = JSON.parse(localStorage.getItem("ponude"))
    console.log(svePonude)
    for(var i=0; i<svePonude.length; i++){
        if(svePonude[i].id == this.state.id){
            this.setState({
                ponuda: svePonude[i]
            })
        }
    }
}


render(){
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Detalji o ponudi u hotelu {this.state.ponuda.hotel} na lokaciji {this.state.ponuda.mjesto}</h3>

            <Nav.Link href = "/urediPonude" ><button className="submit"> Nazad </button> </Nav.Link>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Hotel: </th>
                            <td><Form.Control type="text" value = {this.state.ponuda.hotel} placeholder = {this.state.ponuda.hotel} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                hotel: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Mjesto: </th>
                            <td><Form.Control type="text" value = {this.state.ponuda.mjesto} placeholder = {this.state.ponuda.mjesto} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                mjesto: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Država: </th>
                            <td><Form.Control type="text" value = {this.state.ponuda.drzava} placeholder = {this.state.ponuda.drzava} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                drzava: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj zvjezdica: </th>
                            <td><Form.Control type="number" value = {this.state.ponuda.zvjezdica} placeholder = {this.state.ponuda.zvjezdica} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                zvjezdica: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj soba: </th>
                            <td><Form.Control type="number" value = {this.state.ponuda.soba} placeholder = {this.state.ponuda.soba} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                soba: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Cijena: </th>
                            <td><Form.Control type="text" value = {this.state.ponuda.cijena} placeholder = {this.state.ponuda.cijena} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                cijena: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>O hotelu: </th>
                            <td><Form.Control as="textarea" rows="3" value = {this.state.ponuda.opis} placeholder = {this.state.ponuda.opis} onChange={(e)=>{
                                        this.setState({ 
                                            ponuda: { 
                                                opis: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                            <th></th>
                            <th><Nav.Link href = "/urediPonude" ><button className="submit"> Ažuriraj </button> </Nav.Link></th>
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

export default DetaljiPonude;