import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserNav from '../KorisnikPages/UserNavBar'
import Header from '../Header/Header'
import { Nav, Card, CardDeck, CardColumns, Button } from 'react-bootstrap'
import maldiviSlika from './maldivi.jpg'
import kapaSlika from './kapadocia.jpg'
import maraSlika from './marakes.jpg'
import vegasSlika from './vegas.jpg'

class HomePage extends Component {

dodajZelju(zelja){
    var dajGa =  JSON.parse(localStorage.getItem('meso'));
    var zeljaJSON = {mjesto: zelja}
    dajGa.push(zeljaJSON)
    localStorage.setItem("meso", JSON.stringify(dajGa))
}

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
                                <h2 style={{textAlign: 'center'}}>Maldivi</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Maldivi")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={kapaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Kapadokija</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Kapadokija")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={maraSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Marakeš </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Marakeš")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={vegasSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Las Vegas</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Las Vegas")}}>Pogledaj ponude!</button></Nav.Link>
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
                                <h2 style={{textAlign: 'center'}}>Maldivi</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Maldivi")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}}  src={kapaSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Kapadokija</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Kapadokija")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                            </Card>
                    </CardDeck>

                    <CardDeck>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={maraSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Marakeš </h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Marakeš")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ padding:'2em'}}>
                            <Card.Img variant="top" style={{height: '30em', width: '45em', alignSelf: 'center'}} src={vegasSlika} />
                            <Card.Body>
                                <h2 style={{textAlign: 'center'}}>Las Vegas</h2>
                                <Card.Text>
                                    Iskoristite popuste za rane rezervacije!
                                </Card.Text>
                                <Nav.Link href = "/sviHoteli" ><button className="submit"  onClick = {()=>{localStorage.setItem("oviHoteli", "Las Vegas")}}>Pogledaj ponude!</button></Nav.Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>
            </div>

        </div>
    
    );
}

}

export default HomePage;