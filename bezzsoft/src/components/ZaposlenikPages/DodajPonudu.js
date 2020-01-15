import React, { Component } from 'react';
import NavBar from '../ZaposlenikPages/AdminNavBar';
import Header from '../Header/Header'
import {Container,Row,Col,Table,Nav,Form} from 'react-bootstrap'
import PrijavaForm from './PrijavaFormAdmin';
import {Redirect} from 'react-router-dom';

class DodajPonudu extends Component {
constructor(props){
    super(props);
    this.state = {
        prvi: "",
        drugi: "",
        treci:"",
        svePonude: [],
        spremi: function(jedan, dva, tri){
            var nijeValjda = this.svePonude;
            var ponuda = { id: this.nijeValjda.lenght + 1,
                hotel: this.prvi,
            mjesto: this.drugi,
            drzava: this.treci
            }
            nijeValjda.push(ponuda)
            localStorage.setItem("ponude", JSON.stringify(nijeValjda));
        },
        redirect: false
    }
}

componentDidMount(){
    var dajGa =  JSON.parse(localStorage.getItem("ponude"));
    this.setState({
        svePonude: dajGa
})
    
}


render(){
    if(localStorage.getItem('role')!='admin'){
        return <Redirect to="/login"></Redirect>
    }
  
    return(
        <div className="mainpage">
            
            <NavBar></NavBar>
        
            <Header></Header>
           
        
            <div className="body">
            <h3 className="naslov" style = {{textAlign: 'center', marginBottom: '1em'}}>Dodavanje ponude</h3>

            <Nav.Link href = "/urediPonude" ><button className="submit"> Nazad </button> </Nav.Link>
            <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Hotel: </th>
                            <td><Form.Control required type="text"   onChange={(e)=>{
                                        this.setState({ 
                                            prvi: e.target.value
                                            
                                        }) }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Mjesto: </th>
                            <td><Form.Control required type="text"   onChange={(e)=>{
                                        this.setState({ 
                                            drugi: e.target.value
                                            
                                        }) }}/> </td>

                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Drzava: </th>
                            <td><Form.Control required type="text"  onChange={(e)=>{
                                        this.setState({ 
                                            treci: e.target.value
                                            
                                        }) }}/> </td>

                        </tr>
                            <th></th>
                            <th><Nav.Link href = "/urediPonude" ><button className="submit" onClick = {() => {this.state.spremi()}}> Dodaj </button> </Nav.Link></th>
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

export default DodajPonudu;