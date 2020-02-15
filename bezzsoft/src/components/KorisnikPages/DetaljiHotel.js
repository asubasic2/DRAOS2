import React, { Component } from 'react';
import AdminNavBar from '../ZaposlenikPages/AdminNavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form,Card, CardDeck,} from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import hotelSlika from './hotel.jpg'

class DetaljiHotel extends Component {
constructor(props){
    super(props);
    this.state = {
        id: localStorage.getItem("idIspo1"),
        ponuda: {}
    }
}
dodajZelju(zelja){
    var dajGa =  JSON.parse(localStorage.getItem('meso'));
    var zeljaJSON = zelja
    dajGa.push(zeljaJSON)
    localStorage.setItem("meso", JSON.stringify(dajGa))
    alert("Ponuda je dodana u listu želja!")
}

componentDidMount(){
    var svePonude = JSON.parse(localStorage.getItem("ponude"))
    console.log(svePonude)
    for(var i=0; i<svePonude.length; i++){
        if(svePonude[i].id == this.state.id){
            this.setState({
                ponuda: svePonude[i]
            })
        }
    }
}


render(){
    if(localStorage.getItem('role')!='user'){
  
        return(
            <div className="mainpage">
                
                <NavBar></NavBar>
            
                <Header></Header>
            
            
                <div className="body">
                    
                <CardDeck>
                

                
                
                            <Card style={{ padding:'2em'}}>
                                <Nav.Link href = "/urediPonude" ><button className="submit"> Nazad </button> </Nav.Link>
                                <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={hotelSlika} />
                                <Card.Body>
                                    
                                    <h2 style={{textAlign: 'center'}}>{this.state.ponuda.hotel}</h2>
                                    <Card.Text>
                                        {this.state.ponuda.opis}
                                    </Card.Text>
                                    <Card.Text>
                                        Ocjena: <StarRatings
                                        rating={this.state.ponuda.zvjezdica}
                                        starRatedColor="red"
                                        starDimension="40px"
                                        starSpacing="15px"
                                    />
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </CardDeck>
                
                </div>
            </div>
        
        
        );
    }
    else{
        return(
            <div className="mainpage">
                
                <UserNav></UserNav>
            
                <Header></Header>
            
            
                <div className="body">
                    
                <CardDeck>
                

                
                
                            <Card style={{ padding:'2em'}}>
                                <Nav.Link href = "/urediPonude" ><button className="submit"> Nazad </button> </Nav.Link>
                                <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={hotelSlika} />
                                <Card.Body>
                                    
                                    <h2 style={{textAlign: 'center'}}>{this.state.ponuda.hotel}</h2>
                                    <Card.Text>
                                        {this.state.ponuda.opis}
                                    </Card.Text>
                                    <Card.Text>
                                        Ocjena: <StarRatings
                                        rating={this.state.ponuda.zvjezdica}
                                        starRatedColor="red"
                                        starDimension="40px"
                                        starSpacing="15px"
                                    />
                                    </Card.Text>
                                    <button className="submit" onClick={()=>{this.dodajZelju(this.state.ponuda)}}>Dodaj u želje</button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                
                </div>
            </div>
        
        
        );
    }
}

}

export default DetaljiHotel;