import React, { Component } from 'react';
import UserNavBar from '../ZaposlenikPages/AdminNavBar';
import {Nav} from 'react-bootstrap'
import Header from '../Header/Header'
import PrijavaForm from './PrijavaForm';

class PrijavaPage extends Component {

render(){
    return(
        <div className="mainpage">
            
            <UserNavBar></UserNavBar>
        
            <Header></Header>
        
        
    
            <div className="body">
                <h3 className="naslov" style = {{textAlign: 'center'}}>Prijava </h3>
                <PrijavaForm></PrijavaForm>
                
        
            </div>
        
        </div>
    
    );
}

}

export default PrijavaPage;