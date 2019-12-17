import React, { Component } from 'react';
import NavBar from '../KorisnikPages/UserNavBar';
import Header from '../Header/Header';
import {Container, Row, Col, Table, Form, Nav, Card} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class PregledUnosa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Unosi:[],
            pocetak: "",
            Prvi:[1],
            KosnicaId: localStorage.getItem("idKosnice"),
            Kosnica: {  
                        id: -1,
            },
            redirect: false,
            user: "",
            pass: "",
            prijavljen: false,
            ukupno:-1
        }
    }
    
    componentDidMount(){
        var data = new FormData();
        data.append("username", localStorage.getItem('username'));
        data.append("password", localStorage.getItem('password'));
        const options = {
            method: "OPTIONS",
            body: data
        }
        fetch("/ms_proizvodnja/Unos/" + this.state.KosnicaId, options).
            then((response) => response.json()).
                then((responseJson)=>{
                    var o=Object.keys(responseJson).length
                    this.setState({
                      ukupno: o
                    });
                    var l=[];
                    if(o == 0){
                        this.state.pocetak = "Za košnicu nema unosa...";
                    }
                    else this.state.pocetak = "Odaberite datum...";
                    for( var i=0;i<o;i++){
                        l.push(responseJson[i])
                    }
                    this.setState({
                        Unosi:l
                    })
                })
    }

    
render(){
        const pocetak = this.state.pocetak;
        const datumi = this.state.Unosi.map((unos) => {
            return (
            <option>{unos.date}</option>
            )
        });
        const kolicine = this.state.Unosi.map((unos) => {
            return (
            <option>{unos.kosnica.vrcanje}</option>
            )
        });
    
    if(this.state.redirect) {
        return <Redirect to="/pregledkosnica"></Redirect>
    }

    return(
        <div className="mainpage">
            <NavBar></NavBar>
        
            <Header></Header>
            <div className="body">
            <h3 className="naslov">Pregled unosa za košnicu</h3>
            
                <Nav.Link href =  "/pregledMed" ><button className="pregled"> Pregled vrcanja meda</button> </Nav.Link>
                <Nav.Link href =  "/pregledPropolis" ><button className="pregled"> Pregled vrcanja propolisa</button> </Nav.Link>
                <Nav.Link href =  "/pregledMaticna" ><button className="pregled">Pregled vrcanja matične mliječi</button> </Nav.Link>
            
            </div>  
        </div>
    
    );
}

}

export default PregledUnosa;