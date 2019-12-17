import React, { Component } from 'react';
import NavBar from '../KorisnikPages/UserNavBar';
import Header from '../Header/Header';
import {Redirect} from 'react-router-dom';



class PregledBiljaka extends Component {

    constructor(props){
        super(props);
        this.state ={ 
        isLoading: true,
        biljke:[],
        }
        }
        componentDidMount(){
        var grad="";
        try{
            grad=this.props.location.state.grad;
        }   
        catch(e){

        } 
        fetch('/ms_kalendar/BiljkaLokacija/'+grad)
        .then((response) => response.json())
        .then((responseJson) => {
        var o=Object.keys(responseJson).length
        var l=[]
        for( var i=0;i<o;i++){
        l.push(responseJson[i])
        }
        this.setState({
        isLoading: false,
        biljke:l
        }
        )
        })
        }

render(){

    if(!localStorage.getItem('prijavljen')){
        return <Redirect to="/login"></Redirect>
    }

    if(this.state.isLoading){
        return(
        <div>Loading</div>
        )
        }

        const bi = this.state.biljke.map(function(biljka){
            return (
                <div className="biljka"> 
                    <br></br>
                    <br></br>
                    <p> Naziv: {biljka.biljka} </p>
                    <p> Početak cvjetanja: {biljka.poc_mjesec} </p>
                    <p> Kraj cvjetanja: {biljka.kraj_mjesec} </p>
                </div>
                );
            });    

    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
        
        
    
            <div className="body">
                <h3 className="naslov">Pregled Biljaka</h3>
                
                {bi}
        
            </div>
        
        </div>
    
    );
}

}

export default PregledBiljaka;