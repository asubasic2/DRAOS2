import React, { Component } from 'react';
import NavBar from './AdminNavBar';
import Header from '../Header/Header'
import PrijavaForm from './PrijavaFormAdmin';
import {Container, Table, Form, Button, Row, Col, Nav} from 'react-bootstrap'
import {Redirect} from 'react-router-dom';

class Klijenti extends Component {
    constructor(props){
        super(props);
        this.state = {
            klijenti: [],
            stanje: false,
            pretraga: "",
            osvjezi: false,
            pretrazeno: []
        }
    }


    componentDidMount(){
        this.setState({
            klijenti: JSON.parse(localStorage.getItem('klijent'))
        })
    }
    pretraga(){
        this.setState({
                osvjezi: false,
                klijenti: JSON.parse(localStorage.getItem('klijent'))
            })
        if(this.state.pretraga == "") {
            this.setState({
                osvjezi: false,
                klijenti: JSON.parse(localStorage.getItem('klijent'))
            })
            return ;
        }
        var u = JSON.parse(localStorage.getItem('klijent'))
        var u1 = []
        for(var i=0; i<u.length; i++){
            if(u[i].imeprezime.includes(this.state.pretraga)){
                u1.push(u[i])
            }
        }
        this.setState({
            osvjezi: true,
            klijenti: u1
        })
    }
render(){
    const klijent = this.state.klijenti.map((up) =>{
        return (
                <tr>
                    <td style = {{textAlign: 'center'}}>{up.imeprezime}</td>
                    <td style = {{textAlign: 'center'}}>{up.telefon}</td>
                    <td style = {{textAlign: 'center'}}>{up.racun}</td>
                    <td><Nav.Link href = "/detaljiklijent" > <button className="submit" onClick = {()=>{localStorage.setItem("idklijent", up.id)}}> Edit </button> </Nav.Link></td>
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

                <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Klijenti</h3>

                <Container style={{paddingBottom: '2em', width: '50%'}}>
                    <Table striped bordered hover >
                        <tr >
                            <td style={{width: '30%'}}>
                                <Form.Control type="text" value = {this.state.pretraga} placeholder = {"Pretraži po imenu i prezimenu..."} onChange={(e)=>{this.setState({ pretraga: e.target.value })}}/>
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
                                <th style = {{textAlign: 'center'}}>BROJ TELEFONA</th>
                                <th style = {{textAlign: 'center'}}>ŽIRO RAČUN</th>
                                <th style = {{textAlign: 'center'}}>POSTAVKE</th>
                            </tr>
                        <tbody>
                            {klijent}
                        </tbody>
                        </Table>
                        </Col>
                    </Row>
                </Container>
                <Nav.Link href = "/prijava" style={{paddingBottom: "2em"}}><button className="submit"> Dodaj klijenta </button> </Nav.Link>
            </div>
        </div>
    );
}

}

export default Klijenti;