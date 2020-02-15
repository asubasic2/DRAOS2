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
        zvjezdica: 0,
        soba: 0,
        opis: "",
        cijena: "",
        svePonude: [],
        redirect: false,
        spremi: function(jedan, dva, tri){
            var nijeValjda = this.svePonude;
            var ponuda = { id: nijeValjda.length + 1,
                hotel: this.prvi,
                mjesto: this.drugi,
                drzava: this.treci,
                zvjezdica: this.zvjezdica,
                soba: this.soba,
                opis: this.opis,
                cijena: this.cijena
            }
            nijeValjda.push(ponuda)
            localStorage.setItem("ponude", JSON.stringify(nijeValjda))
        }
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
    if(this.state.redirect){
        alert("Ponuda uspješno unešena!")
        return <Redirect to="/urediPonude"></Redirect>    
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
                            <td><Form.Control required as="select" isInvalid = {this.state.radStatus} onChange={(val)=>this.setState({drugi: val.target.value})}>
                                <option value=""></option>
                                <option value="Maldivi">Maldivi</option>
                                <option value="Kapadokija">Kapadokija</option>
                                <option value="Las Vegas">Las Vegas</option>
                                <option value="Marakeš">Marakeš</option>
                                </Form.Control>
                            </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Država: </th>
                            <td><Form.Control required as="select" isInvalid = {this.state.radStatus} onChange={(val)=>this.setState({treci: val.target.value})}>
                                <option value=""></option>
                                <option value="Maldivi">Maldivi</option>
                                <option value="Turska">Turska</option>
                                <option value="SAD">SAD</option>
                                <option value="Maroko">Maroko</option>
                                </Form.Control></td>

                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj zvjezdica: </th>
                            <td><Form.Control required type="number" min = {1} max = {6}  onChange={(e)=>{
                                        this.setState({ 
                                            zvjezdica: e.target.value
                                            
                                        }) }}/> </td>

                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj soba: </th>
                            <td><Form.Control required type="number" min = {1} onChange={(e)=>{
                                        this.setState({ 
                                            soba: e.target.value
                                            
                                        }) }}/> </td>

                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Cijena: </th>
                            <td><Form.Control required type="text" onChange={(e)=>{
                                        this.setState({ 
                                            cijena: e.target.value
                                            
                                        }) }}/> </td>

                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>O hotelu: </th>
                            <td><Form.Control required as="textarea" rows="3" onChange={(e)=>{
                                        this.setState({ 
                                            opis: e.target.value
                                            
                                        }) }}/> </td>

                        </tr>
                            <th></th>
                            <th><button className="submit" onClick = {() => {this.state.spremi();
                                                                            this.setState({redirect:true})}}> Dodaj </button></th>
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