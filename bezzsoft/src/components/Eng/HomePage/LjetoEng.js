import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../NavBar/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import maldiviSlika from './maldivi.jpg'
import kapaSlika from './kapadocia.jpg'
import maraSlika from './marakes.jpg'
import vegasSlika from './vegas.jpg'

class LjetoEng extends Component {

render(){ 
    if(localStorage.getItem('role') == 'user'){
        return(
            <div className="mainpage">
            
            <UserNav></UserNav> 

            <Header></Header>
        
            <div className="body">
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={maldiviSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Maldives</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={kapaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Cappadocia</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={maraSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Marrakech </h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={vegasSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Las Vegas</h2>
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
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={maldiviSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Maldives</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={kapaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Cappadocia</h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={maraSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Marrakech </h2>
                                <Card.Text>
                                    Take advantage of early booking discounts!
                                </Card.Text>
                                <button className="submit">View offers!</button>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={vegasSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Las Vegas</h2>
                                <Card.Text>
                                    Take advantage of early booking discouWnts!
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

export default LjetoEng;