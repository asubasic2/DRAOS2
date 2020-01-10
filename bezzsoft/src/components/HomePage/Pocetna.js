import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import ljetoslika from './ljeto.jpg'
import zimaslika from './zima.jpg'
import putovanjslika from './putovanje.jpg'
import novagodinaslika from './novagodina.jpg'

class HomePage extends Component {

render(){ 
    if(localStorage.getItem('role') == 'user'){
        return(
            <div className="mainpage">
            
            <UserNav></UserNav> 

            <Header></Header>
        
            <div className="body">
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={ljetoslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Ljeto</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={zimaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Zima</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={novagodinaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Nova godina </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={putovanjslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Putovanje</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
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
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={ljetoslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Ljeto</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={zimaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Zima</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={novagodinaslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Nova godina </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={putovanjslika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Putovanje</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>

        </div>
    
    );
}

}

export default HomePage;