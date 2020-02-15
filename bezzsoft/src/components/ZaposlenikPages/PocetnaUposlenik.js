import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';
import {Container,Row,Col,Table,Nav,Form} from 'react-bootstrap'

class PocetnaUposlenik extends Component {
    constructor(props){
        super(props);
        this.state = {
            ponude: [],
            uposlenici: [],
            rezervacije: [],
            klijenti: []
        }
    }

componentDidMount(){
    this.setState({
        ponude: JSON.parse(localStorage.getItem("ponude")),
        uposlenici:  JSON.parse(localStorage.getItem("uposlenik")),
        klijenti: JSON.parse(localStorage.getItem("klijent"))
    })
        
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
                <h3 className="naslov">Dobrodošli</h3>
                <Container style = {{marginBottom: '2em', marginTop: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'center'}}>Broj uposlenika: </th>
                            <td  style = {{textAlign: 'center'}}>{this.state.uposlenici.length}</td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'center'}}>Broj putovanja: </th>
                            <td  style = {{textAlign: 'center'}}>{this.state.ponude.length}</td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'center'}}>Broj klijenata: </th>
                            <td  style = {{textAlign: 'center'}}>{this.state.klijenti.length}</td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'center'}}>Broj rezervacija: </th>
                            <td  style = {{textAlign: 'center'}}>X</td>
                        </tr>
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

export default PocetnaUposlenik;