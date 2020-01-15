import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form} from 'react-bootstrap'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class DetaljiUposlenik extends Component {
constructor(props){
    super(props);
    this.state = {
        id: localStorage.getItem("idupo"),
        uposlenik: {}
    }
}

componentDidMount(){
    var uposlenici = JSON.parse(localStorage.getItem("uposlenik"))
    for(var i=0; i<uposlenici.length; i++){
        if(uposlenici[i].id == this.state.id){
            this.setState({
                uposlenik: uposlenici[i]
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
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Detalji o uposleniku {this.state.uposlenik.ImePrezime}</h3>

            <Nav.Link href = "/uposlenikpostavke" ><button className="submit"> Nazad </button> </Nav.Link>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Radno mjesto: </th>
                            <td><Form.Control type="text" value = {this.state.uposlenik.VrstaRada} placeholder = {this.state.uposlenik.VrstaRada} onChange={(e)=>{
                                        this.setState({ 
                                            uposlenik: { 
                                                VrstaRada: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>E-mail: </th>
                            <td><Form.Control type="text" value = {this.state.uposlenik.Email} placeholder = {this.state.uposlenik.Email} onChange={(e)=>{
                                        this.setState({ 
                                            uposlenik: { 
                                                Email: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Zaposlen: </th>
                            <td><Form.Control type="text" value = {this.state.uposlenik.Zaposlen} placeholder = {this.state.uposlenik.Zaposlen} onChange={(e)=>{
                                        this.setState({ 
                                            uposlenik: { 
                                                Zaposlen: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Plata: </th>
                            <td><Form.Control type="text" value = {this.state.uposlenik.Plata} placeholder = {this.state.uposlenik.Plata} onChange={(e)=>{
                                        this.setState({ 
                                            uposlenik: { 
                                                Plata: e.target.value
                                            }
                                        }) }}/> </td>
                        </tr>
                            <th></th>
                            <th><Nav.Link href = "/uposlenikpostavke" ><button className="submit"> Ažuriraj </button> </Nav.Link></th>
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

export default DetaljiUposlenik;