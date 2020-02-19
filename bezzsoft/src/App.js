import React from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import PrijavaPage from './components/PrijavaPage/PrijavaPage';
import AdminPage from './components/ZaposlenikPages/UrediPonude';
import AdminPage1 from './components/ZaposlenikPages/Klijenti';
import UserHomePage from './components/KorisnikPages/UserHomePage';
import Profil from './components/KorisnikPages/Profil'
import Pocetna from './components/HomePage/Pocetna'
import uposlenikpostavke from './components/ZaposlenikPages/PostavkeUposlenika'
import PocetnaUposlenik from './components/ZaposlenikPages/PocetnaUposlenik'
import DetaljiUposlenik from './components/ZaposlenikPages/DetaljiUposlenik'
import DodajUposlenika from './components/ZaposlenikPages/DodajUposlenika'
import DetaljiPonude from './components/ZaposlenikPages/DetaljiPonude'
import DodajPonudu from './components/ZaposlenikPages/DodajPonudu'
import sviHoteli from './components/HomePage/Hoteli'
import Ljetovanje from './components/HomePage/Ljeto'
import Zimovanje from './components/HomePage/Zima'
import Nova from './components/HomePage/Nova'
import Putovanja from './components/HomePage/Put'
import Pocetnaeng from './components/Eng/HomePage/PocetnaEng'
import ljetoeng from './components/Eng/HomePage/LjetoEng'
import detaljiklijent from './components/ZaposlenikPages/DetaljiKlijent'
import listaZelja from './components/KorisnikPages/ListaZelja'
import rezervacije from './components/KorisnikPages/Rezervacije'
import detaljiHotel from './components/KorisnikPages/DetaljiHotel'
import pomoc from './components/HomePage/Pomoc'
import kontakt from './components/HomePage/Kontakt'
import PomocAdmin from './components/ZaposlenikPages/PomocAdmin'
import rezervisi from './components/KorisnikPages/Rezervisi'
import './App.css';


function App() {
  
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/prijava" component={PrijavaPage} />
          <Route exact path="/urediponude" component={AdminPage} />
          <Route exact path="/klijentipostavke" component={AdminPage1} />
          <Route exact path="/home" component={UserHomePage} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/pocetna" component={Pocetna} />
          <Route exact path="/uposlenikpostavke" component={uposlenikpostavke} />
          <Route exact path="/pocetnauposlenik" component={PocetnaUposlenik} />
          <Route exact path="/detaljiuposlenik" component={DetaljiUposlenik} />
          <Route exact path="/dodajuposlenika" component={DodajUposlenika} />
          <Route exact path="/detaljiPonude" component={DetaljiPonude} />
          <Route exact path="/dodajPonudu" component={DodajPonudu} />
          <Route exact path="/ljetovanje" component={Ljetovanje} />
          <Route exact path="/zimovanje" component={Zimovanje} />
          <Route exact path="/novagodina" component={Nova} />
          <Route exact path="/putovanja" component={Putovanja} />
          <Route exact path="/pocetnaeng" component={Pocetnaeng} />
          <Route exact path="/ljetoeng" component={ljetoeng} />
          <Route exact path="/detaljiklijent" component={detaljiklijent} />
          <Route exact path="/listaZelja" component={listaZelja} />
          <Route exact path="/detaljiHotel" component={detaljiHotel} />
          <Route exact path="/sviHoteli" component={sviHoteli} />
          <Route exact path="/pomoc" component={pomoc} />
          <Route exact path="/kontakt" component={kontakt} />
          <Route exact path="/pomocadmin" component={PomocAdmin} />
          <Route exact path="/rezervisi" component={rezervisi} />
          <Route exact path="/rezervacije" component={rezervacije} />
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
