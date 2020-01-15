import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container, Row, Col, Table, Nav, Form, Button} from 'react-bootstrap';
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class PostavkeUposlenika extends Component {
    constructor(props){
        super(props);
        this.state = {
            uposlenik: [],
            stanje: false,
            pretraga: ""
        }
    }

    componentDidMount(){
        this.setState({
            uposlenik: JSON.parse(localStorage.getItem('uposlenik'))
        })
    }

    pretraga(){
    }
render(){
   const uposlenici = this.state.uposlenik.map((up) =>{
        return (
                <tr>
                    <td style = {{textAlign: 'center'}}>{up.ImePrezime}</td>
                    <td style = {{textAlign: 'center'}}>{up.VrstaRada}</td>
                    <td><Nav.Link href = "/detaljiuposlenik" > <button className="submit" onClick = {()=>{localStorage.setItem("idupo", up.id)}}> Edit </button> </Nav.Link></td>
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

            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Uposlenici</h3>

            <Container style={{paddingBottom: '2em', width: '50%'}}>
                <Table striped bordered hover >
                    <tr >
                        <td style={{width: '30%'}}>
                            <Form.Control type="text" value = {this.state.pretraga} placeholder = {"Pretraži..."} onChange={(e)=>{this.setState({ pretraga: e.target.value })}}/>
                        </td>
                        <td style={{width: '0.5%'}}> <Button variant="primary" onClick = {()=>{this.pretraga()}}>Pretraga</Button></td>
    
                    </tr>
                </Table>   
            </Container>
            
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                        <tr>
                            <th style = {{textAlign: 'center'}}>IME I PREZIME</th>
                            <th style = {{textAlign: 'center'}}>VRSTA ZANIMANJA</th>
                            <th style = {{textAlign: 'center'}}>POSTAVKE</th>
                        </tr>
                    <tbody>
                        {uposlenici}
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
            <Nav.Link href = "/dodajuposlenika" style={{paddingBottom: "2em"}}><button className="submit"> Dodaj uposlenika </button> </Nav.Link>
            </div>
        </div>
    
    );
}

}

export default PostavkeUposlenika;