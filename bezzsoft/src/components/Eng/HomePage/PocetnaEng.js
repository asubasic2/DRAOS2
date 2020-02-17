import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../NavBar/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import ljetoslika from './ljeto.jpg'
import zimaslika from './zima.jpg'
import putovanjslika from './putovanje.jpg'
import novagodinaslika from './novagodina.jpg'

class PocetnaEng extends Component {

render(){ 
    if(localStorage.getItem('role') == 'user'){
        return(
            <div className="mainpage">
            
            <UserNav></UserNav> 

            <Header></Header>
        
            <div className="body">
            <h2 className="naslov"  style = {{textAlign: 'center', padding: '1em'}}>Welcome to the ANA Travel Agency web site!</h2>
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={ljetoslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Summer</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <Nav.Link href = "/ljetoeng"><button className="submit">View offers!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={zimaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Winter</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={novagodinaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>New year</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={putovanjslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Travel</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>

        </div>
        );
    }

    return(
        <div className="mainpage">
            
            <NavBar></NavBar> 

            <Header></Header>
        
            <div className="body">
            <h2 className="naslov"  style = {{textAlign: 'center', padding: '1em'}}>Welcome to the ANA Travel Agency web site!</h2>
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={ljetoslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Summer</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <Nav.Link href = "/ljetoeng"><button className="submit">View offers!</button></Nav.Link> 
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={zimaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Winter</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={novagodinaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>New year</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={putovanjslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Travel</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>

        </div>
    
    );
}

}

export default PocetnaEng;