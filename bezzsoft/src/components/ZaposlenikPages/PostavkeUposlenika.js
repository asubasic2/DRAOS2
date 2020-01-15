import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container, Row, Col, Table, Nav} from 'react-bootstrap';
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class PostavkeUposlenika extends Component {
    constructor(props){
        super(props);
        this.state = {
            uposlenik: [],
            stanje: false
        }
    }

    componentDidMount(){
        this.setState({
            uposlenik: JSON.parse(localStorage.getItem('uposlenik'))
        })
    }

render(){
   const uposlenici = this.state.uposlenik.map((up) =>{
        return (
                <tr>
                    <td style = {{textAlign: 'center'}}>{up.ImePrezime}</td>
                    <td style = {{textAlign: 'center'}}>{up.VrstaRada}</td>
                    <td><Nav.Link href = "/detaljiuposlenik" > <button className="submit" onClick = {()=>{localStorage.setItem("idupo", up.id)}}> Edit </button> </Nav.Link></td>
                </tr>
        
        );
    }) 

    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Uposlenici</h3>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                        <tr>
                            <th style = {{textAlign: 'center'}}>IME I PREZIME</th>
                            <th style = {{textAlign: 'center'}}>VRSTA ZANIMANJA</th>
                            <th style = {{textAlign: 'center'}}>POSTAVKE</th>
                        </tr>
                    <tbody>
                        {uposlenici}
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    
    );
}

}

export default PostavkeUposlenika;