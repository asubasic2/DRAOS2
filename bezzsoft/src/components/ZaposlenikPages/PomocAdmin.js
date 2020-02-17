import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from './AdminNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';

class PomocAdmin extends Component {

render(){ 

        return (
            <div className="mainpage">
                
                <UserNav></UserNav> 

                <Header></Header>

                <div className="body">
             

                <h3 style = {{textAlign: 'center'}}>Upustvo za zaposlenika</h3>
                <div className="opis">
                    <p>
                        Zaposlenik se u ovom slučaju loguje(radi testiranja koristmo za korisničko ime i šifru: admin). <br></br>
                        Zaposlenik registruje novog zaposlenika. <br></br>
                        Kada se zaposlenik loguje ima pregled o broju uposlenika, putovanja, klijenata i rezervacija. <br></br>
                        Korisnik ima meni koji se sastoji od početne stranice, uređivanja ponuda, postavke uposlenika, postavke klijenata i logouta. <br></br>
                        Odabirom uređivanja ponuda uposlenik može da dodaje nove ponude i da edituje stare ponude.
                        U opciji postavke uposlenika korisnik može da doda novog uposlenika, ima pregled liste zaposlenih i može izvršiti pretraživanje  uposlenika. <br></br>
                        Kod dodavanja novog uposlenika zaposlenik ga dodaje tako što može izvršiti prelazak između textbox-ova pomoću tipki za navigaciju(prilikom prelaska sa radnog mjesta na E-mail moramo pritisnuti tab, pa onda navigacijsku tipku).<br></br>
                        U postavkama klijenata postoji lista klijenata sa svojim osnovnim podacima, klijenete možemo da dodajemo, editujemo i da pretražujemo.<br></br>
                        <br></br>
                    </p>
                    
                </div>

                </div>

            </div>
        );
}

}

export default PomocAdmin;