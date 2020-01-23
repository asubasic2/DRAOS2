import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form} from 'react-bootstrap'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class DetaljiKlijent extends Component {
constructor(props){
    super(props);
    this.state = {
        username: "",
        racun: "",
        brojTelefona: "",
        id: localStorage.getItem("idklijent"),
        klijent: {},
        pretraga: "",
        redirect: false,
        userStatus: false,
        telStatus: false,
        racunStatus: false
    }
}

componentDidMount(){
    var klijenti = JSON.parse(localStorage.getItem("klijent"))
    for(var i=0; i<klijenti.length; i++){
        if(klijenti[i].id == this.state.id){
            this.setState({
                klijent: klijenti[i]
            })
        }
    }
}

azurirajUposlenika(){
    var greska = ""
    const regexbroj = /^\d{3}\/\d{3}-\d{3}$/g
    this.setState({
        userStatus: false,
        telStatus: false,
        racunStatus: false,
    })
    if(this.state.username.length < 3 && this.state.username !== ""){
        greska = "Neispravno korisničko ime! Korisničko ime treba sadržati više od 3 karaktera.\n"
        this.setState({
            userStatus: true
        })
        alert(greska)
        return ;
    }
    if(this.state.racun.length !== 16 && this.state.racun !== ""){
        greska = "Neispravno unešen broj računa! Broj računa mora sadržavati tačno 16 karaktera.\n"
        this.setState({
            racunStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexbroj.test(this.state.brojTelefona) && this.state.brojTelefona !== ""){
        greska = "Neispravan format broja telefona! Unesite u formatu: \"xxx/xxx-xxx\""
        this.setState({
            telStatus: true
        })
        alert(greska)
        return ;
    }
    var uposlenici = JSON.parse(localStorage.getItem("klijent"))
    for(var i=0; i<uposlenici.length; i++){
        if(uposlenici[i].id == this.state.id){
            if(this.state.username != ""){
                uposlenici[i].username = this.state.username
            }
            if(this.state.brojTelefona != ""){
                uposlenici[i].telefon = this.state.telefon
            }
            if(this.state.racun != ""){
                uposlenici[i].racun = this.state.racun
            }
            this.setState({
                klijent: uposlenici[i]
            })
        }
    }
    localStorage.setItem("klijent", JSON.stringify(uposlenici))
    alert("Klijent " + this.state.klijent.imeprezime + " je uspješno ažuriran")
    this.setState({
        imeprezime: "",
        username: "",
        racun: "",
        brojTelefona: ""
    })
}

obrisiUposlenika(){
    var klijenti = JSON.parse(localStorage.getItem("klijent"))
    for(var i=0; i<klijenti.length; i++){
        if(klijenti[i].id == this.state.id){
            klijenti.splice(i,1);
        }
    }
    localStorage.setItem("klijent", JSON.stringify(klijenti))
    alert("Klijent " + this.state.klijent.imeprezime + " je uspješno obrisan")
    this.setState({
        redirect: true
    })
}


render(){
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
    if(this.state.redirect){
        return <Redirect to="/klijentipostavke"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
               
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Detalji o klijentu {this.state.klijent.imeprezime}</h3>

            <div style={{marginBottom: "2em"}}>
                <Nav.Link href = "/klijentipostavke" ><button className="submit"> Nazad </button> </Nav.Link>
            </div>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Korisničko ime: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.userStatus} value = {this.state.username} placeholder = {this.state.klijent.username} onChange={(e)=>{
                                        this.setState({ 
                                            username: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj telefona: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.telStatus} value = {this.state.brojTelefona} placeholder = {this.state.klijent.telefon} onChange={(e)=>{
                                        this.setState({ 
                                            brojTelefona: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj žiro računa: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.racunStatus} value = {this.state.racun} placeholder = {this.state.klijent.racun} onChange={(e)=>{
                                        this.setState({ 
                                            racun: e.target.value
                                        }) }}/> </td>
                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
            <div>                          
                <button className="submit" onClick = {()=>{this.azurirajUposlenika()}}> Ažuriraj </button>
            </div> 
            <div>     
                <button className="submit" onClick = {()=>{this.obrisiUposlenika()}}>Obriši uposlenika</button>
            </div>
            </div>
        </div>
    
    
    );
}

}

export default DetaljiKlijent;