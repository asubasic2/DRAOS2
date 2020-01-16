import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import jahorinaSlika from './jahorina.jpg'
import aspenSlika from './aspen.jpg'
import samoniSlika from './samoni.jpg'
import kopaonikSlika from './kopaonik.jpg'

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
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={jahorinaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Jahorina</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={aspenSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Aspen</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={kopaonikSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Kopaonik </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={samoniSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Šamoni </h2>
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
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={jahorinaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Jahorina </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={aspenSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Aspen </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={kopaonikSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Kopaonik </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={samoniSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Šamoni</h2>
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