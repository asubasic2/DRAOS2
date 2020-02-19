import React, { Component } from 'react';
import UserNav from './UserNavBar'
import Header from '../Header/Header'
import { Container, Row, Col, Table, Nav, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import moment from 'moment'
require('react-datepicker/dist/react-datepicker.css')

class DetaljiUposlenik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idkorisnik: -1,
            datumDolaska: new Date(),
            datumOdlaska:new Date(),
            brojKreveta: 0,
            Vodic: false,
            prevoz: "",
            putnoOsiguranje: false,
            cijena: 0,
            djece: 0,
            pretraga: "",
            redirect: false,
            radStatus: false,
            djeceStatus: false,
            krevetaStatus: false,
            datumOdlaskaStatus: false,
            datumDolaskaStatus: false,
            stanjePrije1: false,
            stanjeVodic: false,
            prevozStanje: false,
            osiguranjeStatus: false
        }
  

    }



    componentDidMount() {
        this.setState({
            idkorisnik: parseInt(localStorage.getItem("idkorisnik"))
        })
    }
    azurirajUposlenika() {
        var greska = ""
        const regexdatum = /^\d{2}.\d{2}.\d{4}.$/g
        const regexdatum2 = /^\d{2}.\d{2}.\d{4}.$/g
        const regexplata = /^\d+$/g
        const regexplata2 = /^\d+$/g
        this.setState({
            radStatus: false,
            krevetaStatus: false,
            djeceStatus: false,
            datumOdlaskaStatus: false,
            datumDolaskaStatus: false,
            stanjeVodic: false,
            prevozStanje: false,
            osiguranjeStatus: false,
        })
        var datumOdlaskaKalendar =moment(this.state.datumOdlaska).format('DD.MM.YYYY.')
        var datumDolaskaKalendar=moment(this.state.datumDolaska).format('DD.MM.YYYY.')
        if (!regexdatum.test(datumOdlaskaKalendar)) {
            greska = "Neispravan format datuma. Unesite datum u formatu dd.mm.yyyy." 
            this.setState({
                datumDolaskaStatus: true
            })
            alert(greska)
            return;
        }
        if (!regexdatum2.test(datumDolaskaKalendar)) {
            alert(this.state.datumOdlaska)
            greska = "Neispravan format datuma. Unesite datum u formatu dd.mm.yyyy."
            this.setState({
                datumOdlaskaStatus: true
            })
            alert(greska)
            return;
        }
        if (!regexplata.test(this.state.brojKreveta)) {
            greska = "Broj kreveta mora biti broj."
            this.setState({
                krevetaStatus: true
            })
            alert(greska)
            return;
        }
        if (!regexplata2.test(this.state.djece)) {
            greska = "Broj djece mora biti broj."
            this.setState({
                djeceStatus: true
            })
            alert(greska)
            return;
        }
        if (this.state.prevoz === "") {
            greska = "Odaberite vrstu prevoza"
            this.setState({
                prevozStanje: true
            })
            alert(greska)
            return;
        }



        var rezervacije = JSON.parse(localStorage.getItem("rezervacije"))
        var r = {
            idkorisnik: localStorage.getItem("idkorisnik"),
            datumDolaska: datumDolaskaKalendar,
            datumOdlaska: datumOdlaskaKalendar,
            brojKreveta: this.state.brojKreveta,
            Vodic: this.state.Vodic,
            prevoz: this.state.prevoz,
            putnoOsiguranje: this.state.putnoOsiguranje,
            cijena: this.state.cijena,
            djece: this.state.djece
        }
        rezervacije.push(r)
        localStorage.setItem("rezervacije", JSON.stringify(rezervacije))
        console.log(rezervacije)
        alert("Uspješno rezervisana destinacija")
        this.setState({
            idkorisnik: this.state.idkorisnik,
            datumDolaska: new Date(),
            datumOdlaska: new Date(),
            brojKreveta: "",
            Vodic: false,
            prevoz: "",
            cijena: 0
        })
    }

 render() {
        if (this.state.redirect) {
            return <Redirect to="/detaljiHotel"></Redirect>
        }

        return (
            <div className="mainpage">

                <UserNav></UserNav>

                <Header></Header>


                <div className="body" >

                    <h3 className="naslov" style={{ textAlign: 'center', marginBottom: '1em' }}>Molimo Vas da popunite polja ispod</h3>

                    <div style={{ marginBottom: "2em" }}>
                        <Nav.Link href="/detaljiHotel" ><button className="submit"> Nazad </button> </Nav.Link>
                    </div>
                    <Container style={{ marginBottom: '2em' }}>
                        <Row>
                            <Col>
                                <Table striped bordered hover>
                                    <tbody  >  
                                    <tr>
                                        <th style={{ textAlign: 'right' }}>Datum dolaska: </th>
                                        <td><DatePicker  className="form-control dateInput"   
                                         isInvalid={this.state.datumDolaskaStatus} 
                                        selected={this.state.datumDolaska} 
                                        dateFormat="dd.MM.yyyy"
                                        name="datumDolaska"                                        
                                        onChange={(e) => {
                                            //var a =new Date()
                                            //console.log(moment(a).format('DD.MM.YYYY.'))
                                            //console.log(moment(e).format('DD.MM.YYYY.'))
                                           // var b=moment(e).format('DD.MM.YYYY.')
                                                this.setState({
                                                    datumDolaska:e
                                                })
                                            }} /> </td>                                            
                                        </tr>
                                        <tr>  
                                        <th style={{ textAlign: 'right' }}>Datum odlaska: </th>
                                        <td><DatePicker  className="form-control dateInput"   
                                        isInvalid={this.state.datumOdlaskaStatus} 
                                        selected={this.state.datumOdlaska}
                                        dateFormat="dd.MM.yyyy"
                                        name="datumOdlaska"  
                                        onChange={(e) => {
                                            //var a =new Date()
                                            //console.log(moment(a).format('DD.MM.YYYY.'))
                                            //console.log(moment(e).format('DD.MM.YYYY.'))
                                           // var b=moment(e).format('DD.MM.YYYY.')
                                                this.setState({
                                                    datumOdlaska:e
                                                })
                                            }} /> </td>
                                            
                                        </tr>                            
                                
                                      
                                        <tr>
                                            <th style={{ textAlign: 'right' }}>Broj kreveta: </th>
                                            <td><Form.Control type="number" min={1} isInvalid={this.state.krevetaStatus} 
                                            value={this.state.brojKreveta}
                                            onChange={(e) => {
                                                this.setState({
                                                    brojKreveta: e.target.value,
                                                    cijena: 500 + 25 * e.target.value
                                                })
                                            }} /> </td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'right' }}>Broj djece: </th>
                                            <td><Form.Control type="number" min={0} max={10} isInvalid={this.state.djeceStatus} 
                                            value={this.state.djece}
                                            onChange={(e) => {
                                               
                                               if (e.target.value == this.state.djece - 1)
                                                    this.setState({
                                                        djece: e.target.value,
                                                        cijena: this.state.cijena - 10
                                                    })
                                                else
                                                    this.setState({
                                                        djece: e.target.value,
                                                        cijena: this.state.cijena + 10
                                                    })
                                            }} /> </td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'right' }}>Želite li vodiča? </th>
                                            <td> <Form.Control required as="select" isInvalid={this.state.radStatus} 
                                            value={this.state.Vodic}
                                            onChange={(val) => {
                                               
                                               if (val.target.value === "true") {
                                                    this.setState({
                                                        Vodic: val.target.value,
                                                        cijena: this.state.cijena + 50
                                                    })
                                                }
                                                else if (val.target.value === "false" && this.state.Vodic === "true") {
                                                    this.setState({
                                                        Vodic: false,
                                                        cijena: this.state.cijena - 50
                                                    })
                                                }
                                            }}>
                                                <option value={true}>Da</option>
                                                <option value={false}>Ne</option>
                                            </Form.Control></td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'right' }}>Vrsta prevoza: </th>
                                            <td><Form.Control required as="select" isInvalid={this.state.prevozStanje} 

                                            value={this.state.prevoz}
                                            onChange={(val) => {
                                                
                                                
                                                if (val.target.value === "" && this.state.prevoz === "Autobus" && !this.state.cijena - 200 < 500)
                                                    this.setState({
                                                        cijena: this.state.cijena - 200
                                                    })
                                                else if (val.target.value === "" && this.state.prevoz === "Avion" && !this.state.cijena - 500 < 500)
                                                    this.setState({
                                                        cijena: this.state.cijena - 500
                                                    })
                                                else if (val.target.value === "Avion" && this.state.prevoz === "Autobus")
                                                    this.setState({
                                                        cijena: this.state.cijena + 300
                                                    })
                                                else if (val.target.value === "Autobus" && this.state.prevoz === "Avion")
                                                    this.setState({
                                                        cijena: this.state.cijena - 300
                                                    })
                                                else if (val.target.value === "Autobus" && this.state.prevoz === "")
                                                    this.setState({
                                                        cijena: this.state.cijena + 200
                                                    })
                                                else if (val.target.value === "Avion" && this.state.prevoz === "")
                                                    this.setState({
                                                        cijena: this.state.cijena + 500
                                                    })
                                                else if (val.target.value === "Nista" && this.state.prevoz === "Autobus")
                                                    this.setState({
                                                        cijena: this.state.cijena - 200
                                                    })
                                                else if (val.target.value === "Nista" && this.state.prevoz === "Avion")
                                                    this.setState({
                                                        cijena: this.state.cijena - 500
                                                    })
                                                else if (val.target.value === "Autobus" && this.state.prevoz === "Nista")
                                                    this.setState({
                                                        cijena: this.state.cijena + 200
                                                    })
                                                else if (val.target.value === "Avion" && this.state.prevoz === "Nista")
                                                    this.setState({
                                                        cijena: this.state.cijena + 500
                                                    })
                                                this.setState({ prevoz: val.target.value })
                                            }}>
                                                <option value=""></option>
                                                <option value="Autobus">Autobus</option>
                                                <option value="Avion">Avion</option>
                                                <option value="Nista">Nista</option>
                                            </Form.Control></td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'right' }}>Želite li putno osiguranje? </th>
                                            <td><Form.Control required as="select" isInvalid={this.state.osiguranjeStatus}
                                            value={this.state.putnoOsiguranje}
                                            onChange={(val) => {
                                                
                                                if (val.target.value === "true") {
                                                    this.setState({
                                                        putnoOsiguranje: val.target.value,
                                                        cijena: this.state.cijena + 50,
                                                    })
                                                }
                                                else if (val.target.value === "false" && this.state.putnoOsiguranje === "true") {
                                                    this.setState({
                                                        putnoOsiguranje: false,
                                                        cijena: this.state.cijena - 50,
                                                    })
                                                }
                                            }}>
                                                <option value=""></option>
                                                <option value={true}>Da</option>
                                                <option value={false}>Ne</option>
                                            </Form.Control> </td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'right' }}>Cijena (KM): </th>
                                            <td><Form.Control type="number" min={1} value={this.state.cijena} readOnly={true} /> </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                    <div style={{ padding: '1em' }}>
                        <button className="submit" onClick={() => { this.azurirajUposlenika() }}> Rezerviši </button>
                    </div>
                </div>
            </div>


        );
    }

}

export default DetaljiUposlenik;