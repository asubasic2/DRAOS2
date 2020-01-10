import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class PostavkeUposlenika extends Component {

render(){
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
                <h3 className="naslov">Destinacije</h3>
                <h2>Lista ponuda</h2>
                <h2>Pregled ocjena</h2>
                <h2>Dodaj slike</h2>
                <h2>Dodaj destinaciju mozda?</h2>
        
            </div>
        
        </div>
    
    );
}

}

export default PostavkeUposlenika;