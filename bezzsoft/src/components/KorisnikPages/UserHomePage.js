import React, { Component } from 'react';
import NavBar from '../KorisnikPages/UserNavBar';
import Header from '../Header/Header'
import UserNavBar from '../KorisnikPages/UserNavBar';
class UserHomePage extends Component {

render(){
    return(
        <div className="mainpage">
            
            <UserNavBar></UserNavBar>
        
            <Header></Header> 
         
        
    
            <div className="body">
                <h3 className="naslov">Dobro došli gospodine</h3>
                <h3></h3>
                <h3>Ponude</h3>
                <h3>Ocjena putovanja</h3>
                <h3>Najava</h3>
                <h3>Info</h3>
                <h3>Napravi rezervaciju</h3>
                <h3>Slike</h3>
                
        
            </div>
        
        </div>
    
    );
}

}

export default UserHomePage;