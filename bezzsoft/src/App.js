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
import Ljetovanje from './components/HomePage/Ljeto'
import Zimovanje from './components/HomePage/Zima'
import Pocetnaeng from './components/Eng/HomePage/PocetnaEng'
import ljetoeng from './components/Eng/HomePage/LjetoEng'
import detaljiklijent from './components/ZaposlenikPages/DetaljiKlijent'
import listaZelja from './components/KorisnikPages/ListaZelja'
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
          <Route exact path="/pocetnaeng" component={Pocetnaeng} />
          <Route exact path="/ljetoeng" component={ljetoeng} />
          <Route exact path="/detaljiklijent" component={detaljiklijent} />
          <Route exact path="/listaZelja" component={listaZelja} />
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
