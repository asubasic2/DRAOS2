import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import newyorkSlika from './telaviv.jpg'
import venecijaSlika from './moskva.jpg'
import rimSlika from './pariz.jpg'
import dubrovnikSlika from './istanbul.jpg'

class Putovanja extends Component {

render(){ 
    if(localStorage.getItem('role') == 'user'){
        return(
            <div className="mainpage">
            
            <UserNav></UserNav> 

            <Header></Header>
        
            <div className="body">
                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={newyorkSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}> Tel Aviv</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Tel Aviv")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={venecijaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Moskva </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Moskva")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={rimSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Pariz </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Pariz")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={dubrovnikSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Istanbul</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Istanbul")}}>Pogledaj ponude!</button></Nav.Link>
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
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={newyorkSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Tel Aviv</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Tel Aviv")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={venecijaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Moskva </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Moskva")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={rimSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Pariz </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Pariz")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={dubrovnikSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Istanbul</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Istanbul")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>

        </div>
    
    );
}

}

export default Putovanja;