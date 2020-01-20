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
        ImePrezime: "",
        Plata: "",
        Email: "",
        Zaposlen: "",
        VrstaRada: "",
        id: localStorage.getItem("idupo"),
        uposlenik: {},
        pretraga: "",
        redirect: false,
        radStatus: false,
        plataStatus: false,
        emailStatus: false,
        zaposlenStatus: false
    }
}

componentDidMount(){
    var uposlenici = JSON.parse(localStorage.getItem("uposlenik"))
    console.log(uposlenici)
    for(var i=0; i<uposlenici.length; i++){
        if(uposlenici[i].id == this.state.id){
            this.setState({
                uposlenik: uposlenici[i]
            })
        }
    }
}

azurirajUposlenika(){
    var greska = ""
    const regexEmail = /(^[a-zA-Z0-9]+@[a-zA-Z]+.com$|^[a-zA-Z0-9]+@etf.unsa.ba$)/g
    const regexdatum = /^\d{2}.\d{2}.\d{4}.$/g
    const regexplata = /^\d+ KM$/g
    this.setState({
        radStatus: false,
        plataStatus: false,
        emailStatus: false,
        zaposlenStatus: false
    })
    if(this.state.VrstaRada.localeCompare("Šalter") !== 0 && this.state.VrstaRada.localeCompare("Vodič") !== 0 && this.state.VrstaRada != ""){
        greska = "Neispravno radno mjesto! Unesite Vodič ili Šalter.\n"
        this.setState({
            radStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexEmail.test(this.state.Email) && this.state.Email !== ""){
        greska = "Neispravno unešen E-mail! Mora biti formata test@test.com.\n"
        this.setState({
            emailStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexdatum.test(this.state.Zaposlen) && this.state.Zaposlen !== ""){
        greska = "Neispravan format datuma! Unesite datum u formatu dd.mm.yyyy."
        this.setState({
            zaposlenStatus: true
        })
        alert(greska)
        return ;
    }
    if(!regexplata.test(this.state.Plata) && this.state.Plata !== ""){
        greska = "Neispravan format unosa plate! Unesite platu u formatu: \"xxxx KM\""
        this.setState({
            plataStatus: true
        })
        alert(greska)
        return ;
    }
    var uposlenici = JSON.parse(localStorage.getItem("uposlenik"))
    for(var i=0; i<uposlenici.length; i++){
        if(uposlenici[i].id == this.state.id){
            if(this.state.ImePrezime != ""){
                uposlenici[i].ImePrezime = this.state.ImePrezime
            }
            if(this.state.VrstaRada != ""){
                uposlenici[i].VrstaRada = this.state.VrstaRada
            }
            if(this.state.Email != ""){
                uposlenici[i].Email = this.state.Email
            }
            if(this.state.Zaposlen != ""){
                uposlenici[i].Zaposlen = this.state.Zaposlen
            }
            if(this.state.Plata != ""){
                uposlenici[i].Plata = this.state.Plata
            }
            this.setState({
                uposlenik: uposlenici[i]
            })
        }
    }
    console.log(uposlenici)
    localStorage.setItem("uposlenik", JSON.stringify(uposlenici))
    alert("korisnik " + this.state.uposlenik.ImePrezime + " je uspješno ažuriran")
    this.setState({
        ImePrezime: "",
        Plata: "",
        Email: "",
        Zaposlen: "",
        VrstaRada: ""
    })
}

obrisiUposlenika(){
    var uposlenici = JSON.parse(localStorage.getItem("uposlenik"))
    for(var i=0; i<uposlenici.length; i++){
        if(uposlenici[i].id == this.state.id){
            uposlenici.splice(i,1);
        }
    }
    localStorage.setItem("uposlenik", JSON.stringify(uposlenici))
    alert("korisnik " + this.state.uposlenik.ImePrezime + " je uspješno obrisan")
    this.setState({
        redirect: true
    })
}


render(){
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
    if(this.state.redirect){
        return <Redirect to="/uposlenikpostavke"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
               
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Detalji o uposleniku {this.state.uposlenik.ImePrezime}</h3>

            <div style={{marginBottom: "2em"}}>
                <Nav.Link href = "/uposlenikpostavke" ><button className="submit"> Nazad </button> </Nav.Link>
            </div>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Radno mjesto: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.radStatus} value = {this.state.VrstaRada} placeholder = {this.state.uposlenik.VrstaRada} onChange={(e)=>{
                                        this.setState({ 
                                                VrstaRada: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>E-mail: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.emailStatus} value = {this.state.Email} placeholder = {this.state.uposlenik.Email} onChange={(e)=>{
                                        this.setState({ 
                                                Email: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Zaposlen od: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.zaposlenStatus} value = {this.state.Zaposlen} placeholder = {this.state.uposlenik.Zaposlen} onChange={(e)=>{
                                        this.setState({ 
                                                Zaposlen: e.target.value
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Plata: </th>
                            <td><Form.Control type="text" isInvalid = {this.state.plataStatus} value = {this.state.Plata} placeholder = {this.state.uposlenik.Plata} onChange={(e)=>{
                                        this.setState({ 
                                                Plata: e.target.value
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

export default DetaljiUposlenik;