import React, { Component } from 'react';
import AdminNavBar from '../ZaposlenikPages/AdminNavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form,Card, CardDeck,} from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import hotelSlika from '../KorisnikPages/hotel.jpg'
import UserNavBar from '../KorisnikPages/UserNavBar';

class Hoteli extends Component {
constructor(props){
    super(props);
    this.state = {
        mjesto: localStorage.getItem("oviHoteli"),
        ponuda: {},
        svePonude: [],
        jelBilo: true,
        brojac: 0
    }
}

componentDidMount(){
    this.setState({
        svePonude: JSON.parse(localStorage.getItem('ponude'))
    })
    console.log(this.state.svePonude)
    var ovdjeSu = []
    for(let i=0; i<this.state.svePonude.length; i++){
        if(this.state.svePonude[i].mjesto == this.state.mjesto)
            ovdjeSu.push(this.state.svePonude[i])
        
    }
    this.setState({
        potrebnePonude: ovdjeSu
    })
}


render(){

    
    var vratiHotele
    if(!this.state.jelBilo)
    vratiHotele = <CardDeck><Card.Body><Card.Text>Nema ponuda u sistemu....</Card.Text></Card.Body></CardDeck>
    else
    vratiHotele = this.state.svePonude.map((up)=>{
        if(up.mjesto == this.state.mjesto){
            return(
                <CardDeck>
                            <Card style={{ padding:'2em'}}>
                                <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={hotelSlika} />
                                <Card.Body>
                                    
                                    <h2 style={{textAlign: 'center'}}>{up.hotel}</h2>
                                    <Card.Text>
                                        Ocjena: <StarRatings
                                        rating={up.zvjezdica}
                                        starRatedColor="red"
                                        starDimension="40px"
                                        starSpacing="15px"
                                    />
                                    </Card.Text>
                                    <Nav.Link href = "/detaljiHotel" > <button className="submit" onClick = {()=>{localStorage.setItem("idIspo1", up.id)}}> Info </button> </Nav.Link>
                                </Card.Body>
                                
                            </Card>
                            </CardDeck>
            );
        }
        else{
            this.state.brojac++;
        }
        if(this.state.brojac == this.state.svePonude.length)
            return(
                <CardDeck><Card.Body><Card.Text>Nema ponuda u sistemu....</Card.Text></Card.Body></CardDeck>
            )
    })
    if(localStorage.getItem('role')=='user')
    return(
        <div className="mainpage">
            
            <UserNav></UserNav>
        
            <Header></Header>
           
        
            <div className="body">
            <Nav.Link href = "/ljetovanje" ><button className="submit"> Nazad </button> </Nav.Link>    
            
            {vratiHotele}
            
            
            </div>
        </div>
    
    
    );
    else
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
            <Nav.Link href = "/ljetovanje" ><button className="submit"> Nazad </button> </Nav.Link>    
            
            {vratiHotele}
            
            
            </div>
        </div>
    );
}

}

export default Hoteli;