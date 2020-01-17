import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import telavivSlika from './telaviv.jpg'
import istanbulSlika from './istanbul.jpg'
import parizSlika from './pariz.jpg'
import moskvaSlika from './moskva.jpg'

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
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={telavivSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Tel Aviv</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={istanbulSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Istanbul</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={moskvaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Moskva </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={parizSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Pariz </h2>
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
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={telavivSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Tel Aviv </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={istanbulSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Istanbul </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={moskvaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Moskva </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <button className="submit">Pogledaj ponude!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={parizSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Pariz </h2>
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