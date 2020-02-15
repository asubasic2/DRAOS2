import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';

class Kontakt extends Component {

render(){ 

    return(
        <div className="mainpage">
            
            <NavBar></NavBar> 

            <Header></Header>

            <div className="body">
            <h2 className="naslov" style = {{textAlign: 'center', padding: '0.5em'}}>Pomoć u korištenju naše stranice</h2>
            <div className="opis">
                <p>
                    BeeZsoft aplikacija omogućava pčelarima jednostavno vođenje dnevnika dnevnih i mjesečnih aktivnosti, kao i o detaljima za svaku pojedinačnu košnicu. Mogućnost, praćenja troškova i dobiti olakšava pčelaru da efikasno procijeni isplativost svake košnice/društva i da unaprijed predvidi aktivnosti u poboljšanju omjera.
                </p>
                
            </div>

            <h3 style = {{textAlign: 'center'}}>Pomoć u korištenju naše stranice</h3>
            <div className="opis">
                <p>
                    BeeZsoft aplikacija omogućava pčelarima jednostavno vođenje dnevnika dnevnih i mjesečnih aktivnosti, kao i o detaljima za svaku pojedinačnu košnicu. Mogućnost, praćenja troškova i dobiti olakšava pčelaru da efikasno procijeni isplativost svake košnice/društva i da unaprijed predvidi aktivnosti u poboljšanju omjera.
                </p>
                
            </div>

            </div>

        </div>
    
    );
}

}

export default Kontakt;