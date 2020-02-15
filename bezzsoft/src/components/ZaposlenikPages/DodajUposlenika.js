import React, { Component, useState } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form, Button} from 'react-bootstrap'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class DodajUposlenika extends Component {
constructor(props){
    super(props);
    this.state = {
        uposlenici: [],
        ImePrezime: "",
        VrstaRada: "",
        Email: "",
        Zaposlen: "",
        Plata: "",
        redirect: false,
        radStatus: false,
        plataStatus: false,
        emailStatus: false,
        zaposlenStatus: false,
        imeStatus: false
    }
}

componentDidMount(){
    var u = JSON.parse(localStorage.getItem("uposlenik"))
    this.setState({
        uposlenici: u
    })
}

dodajUposlenika(){
    var greska = ""
    const regexEmail = /(^[a-zA-Z0-9]+@[a-zA-Z]+.com$|^[a-zA-Z0-9]+@etf.unsa.ba$)/g
    const regexdatum = /^\d{2}.\d{2}.\d{4}.$/g
    const regexplata = /^\d+$/g
    this.setState({
        radStatus: false,
        plataStatus: false,
        emailStatus: false,
        zaposlenStatus: false,
        imeStatus: false
    })
    if(this.state.ImePrezime === ""){
        greska = "Polje ime i prezime ne smije biti prazno.\n"
        this.setState({
            imeStatus: true
        })
        alert(greska)
        return ;
    }
    if(this.state.VrstaRada.localeCompare("Šalter") !== 0 && this.state.VrstaRada.localeCompare("Vodič") !== 0){
        greska = "Neispravno radno mjesto. Unesite Vodič ili Šalter.\n"
        this.setState({
            radStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexEmail.test(this.state.Email)){
        greska = "Neispravno unešen E-mail. Mora biti formata test@test.com.\n"
        this.setState({
            emailStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexdatum.test(this.state.Zaposlen)){
        greska = "Neispravan format datuma. Unesite datum u formatu dd.mm.yyyy."
        this.setState({
            zaposlenStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexplata.test(this.state.Plata)){
        greska = "Neispravan format unosa plate. Plata mora biti broj"
        this.setState({
            plataStatus: true
        })
        alert(greska)
        return ;
    }
    var u1 = this.state.uposlenici
    var uposlenik = {
        id: u1.length+1,
        ImePrezime: this.state.ImePrezime,
        VrstaRada: this.state.VrstaRada,
        Email: this.state.Email,
        Zaposlen: this.state.Zaposlen,
        Plata: this.state.Plata
    }
    u1.push(uposlenik)
    localStorage.setItem("uposlenik", JSON.stringify(u1))
    this.setState({
        redirect: true
    })
}


render(){
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
    if(this.state.redirect){
        alert("Uposlenik: " + this.state.ImePrezime + " uspješno unešen!")
        return <Redirect to="/uposlenikpostavke"></Redirect>    
    }
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Dodaj uposlenika</h3>
            <div style={{marginBottom: "2em"}}>
                <Nav.Link href = "/uposlenikpostavke" ><button className="submit"> Nazad </button> </Nav.Link>
            </div>
           <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Ime i Prezime: </th>
                            <td><Form.Control isInvalid = {this.state.imeStatus} required type="text" onChange={(e)=>{
                                        this.setState({ 
                                                ImePrezime: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Radno mjesto: </th>
                            <td> <Form.Control required as="select" isInvalid = {this.state.radStatus} onChange={(val)=>this.setState({VrstaRada: val.target.value})}>
                                <option value="">Posao...</option>
                                <option value="Šalter">Šalter</option>
                                <option value="Vodič">Vodič</option>
                                </Form.Control>
                            </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>E-mail: </th>
                            <td><Form.Control isInvalid = {this.state.emailStatus} required type="text" onChange={(e)=>{
                                        this.setState({ 
                                                Email: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Zaposlen od: </th>
                            <td><Form.Control isInvalid = {this.state.zaposlenStatus} required type="text"onChange={(e)=>{
                                        this.setState({ 
                                                Zaposlen: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Plata (KM): </th>
                            <td><Form.Control isInvalid = {this.state.plataStatus} required type="text" onChange={(e)=>{
                                        this.setState({ 
                                                Plata: e.target.value
                                        }) }}/> </td>
                        </tr>
                            <th></th>
                            <th><button className="submit" onClick = {()=> {this.dodajUposlenika()}}> Dodaj </button></th>
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

export default DodajUposlenika;