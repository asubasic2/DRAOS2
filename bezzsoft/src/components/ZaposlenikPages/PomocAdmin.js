import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
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
                <h2 className="naslov" style = {{textAlign: 'center', padding: '0.5em'}}>Upustvo za kupca</h2>
                <div className="opis">
                    <p> 
                        Kupac može da razgleda na stanici destinacije, ali za rezervaciju i dodavanje destinacije u listu želja treba da se registruje. <br></br>
                        (implementirano je da radnik registruje kupca, za testiranje ukucamo u korisničko ime i šifru: korisnik ). <br></br>
                        Kupac kad uđe na stanicu turističke agencije bude pozicioniran na početnu stanicu. <br></br>
                        Kupac može da izabere na početnoj stanici neku destinaciju(nisu raspoređene po kategorijama). <br></br>
                        Kupac može da izabere destinaciju po kategorijama: Ljetovanje, Nova Godina, Zimovanje i Putovanja. <br></br>
                        Samo je za ljetovanje implementirano "Pogledaj ponude". <br></br>
                        Nakon što korisnik odabere "Pogledaj ponude" može izvršiti rezervaciju ili staviti u listu želja. <br></br>
                        U meniju korisnik može pronaći opciju "Lista želja", gdje može vidjeti spisak selektovanih destinacija
                        (možemo ih brisati). <br></br>

                    </p>
                    
                </div>

                <h3 style = {{textAlign: 'center'}}>Upustvo za zaposlenika</h3>
                <div className="opis">
                    <p>
                        Zaposlenik se u ovom slučaju loguje(radi testiranja koristmo za korisničko ime i šifru: admin). <br></br>
                        Zaposlenik registruje novog zaposlenika. <br></br>
                        Kada se zaposlenik loguje ima pregled o broju uposlenika, putovanja, klijenata i rezervacija. <br></br>
                        Korisnik ima meni koji se sastoji od početne stranice, uređivanja ponuda, postavke uposlenika, postavke klijenata i logouta. <br></br>
                        Odabirom uređivanja ponuda uposlenik može da dodaje nove ponude i da edituje stare ponude.
                        U opciji postavke uposlenika korisnik može da doda novog uposlenika, ima pregled liste zaposlenih i može izvršiti pretraživanje  uposlenika. <br></br>
                        U postavkama klijenata postoji lista klijenata sa svojim osnovnim podacima, klijenete možemo da dodajemo, editujemo i da pretražujemo.<br></br>
                        

                    </p>
                    
                </div>

                </div>

            </div>
        );
}

}

export default PomocAdmin;