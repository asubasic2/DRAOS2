import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '50%',
    height: '50%'
  };

class Kontakt extends Component {

render(){ 

    return(
        <div className="mainpage">
            
            <NavBar></NavBar> 

            <Header></Header>

            <div className="body">
            <h2 className="naslov" style = {{textAlign: 'Left', padding: '0.5em'}}>Kontakt</h2>
            <div className="opis">
                <p>
                    Kontakt telefon: 033/225-883 <br></br>
                    Fax: 033/225-883 <br></br>
                    Adresa: Zmaja od Bosne bb <br></br>
                    
                </p>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
        
                    initialCenter={{
                     lat: 43.854070,
                     lng: 18.390200
                    }}

                >
                <Marker
                    position = {{lat: 43.854070, lng: 18.390200}}
                    name = {"ANA"}
                /> 
       
          </Map>
                
            </div>

            
                
            

            </div>

        </div>
    
    );
}

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNTzCIJRSztaCuX6AvD3P54lxvbvUt01g'
  })(Kontakt);