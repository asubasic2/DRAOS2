import React from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import PrijavaPage from './components/PrijavaPage/PrijavaPage';
import AdminPage from './components/ZaposlenikPages/UrediPonude';
import AdminPage1 from './components/ZaposlenikPages/Dodajkorisnika';
import UserHomePage from './components/KorisnikPages/UserHomePage';
import Profil from './components/KorisnikPages/Profil'
import Pocetna from './components/HomePage/Pocetna'
import uposlenikpostavke from './components/ZaposlenikPages/PostavkeUposlenika'
import PocetnaUposlenik from './components/ZaposlenikPages/PocetnaUposlenik'



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
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
