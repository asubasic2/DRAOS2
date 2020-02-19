import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, Button, CardDeck, CardColumns } from 'react-bootstrap'
import newyorkSlika from './newyork.jpg'
import venecijaSlika from './venecija.jpg'
import rimSlika from './rim.jpg'
import dubrovnikSlika from './dubrovnik.jpg'

class Nova extends Component {

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
                                <h2 style={{textAlign: 'center'}}>New York </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={venecijaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Venecija </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={rimSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Rim </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={dubrovnikSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Dubrovnik </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
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
                                <h2 style={{textAlign: 'center'}}>New York</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={venecijaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Venecija</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={rimSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Rim </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={dubrovnikSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Dubrovnik</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "nema")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>

        </div>
    
    );
}

}

export default Nova;