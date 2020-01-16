import React, { Component } from 'react';
import { Form} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';






class LoginForm extends Component {

  
  constructor(props) {
    super(props);

      this.state = {
        redirect: false,
        username:'',
        password:'',
      };
      this.onLogin = this.onLogin.bind(this)
  }

    
  onLogin() {
    
    if(this.state.username == 'korisnik' && this.state.password == 'korisnik'){
      this.setState(
        ()=>({
          redirect:true,
        })
      ) 
      localStorage.setItem('role', 'user')
      global.role = 'user'
    }
    else if(this.state.username == 'admin' && this.state.password == 'admin'){
      this.setState(
        ()=>({
          redirect:true,
        })
      )
      localStorage.setItem('role', 'admin')
      global.role = 'admin'
    }
    else{
      alert("Pogrešan username ili password ")
    }
  }

  componentDidMount(){
    localStorage.setItem("role", "")
    var uposlenik = []
    var u1 = {
      id: 1,
      ImePrezime: "Ajdin Ločić",
      VrstaRada: "Šalter",
      Email: "alocic1@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: "800 KM"
    }
    var u2 = {
      id: 2,
      ImePrezime: "Nina Mijatović",
      VrstaRada: "Šalter",
      Email: "nmijatovic@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: "800 KM"
    }
    var u3 = { 
      id: 3,
      ImePrezime: "Admir Subašić",
      VrstaRada: "Vodič",
      Email: "asubasic2@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: "1000 KM"
    }
    var u4 = {
      id: 4,
      ImePrezime: "Mujo Mujić",
      VrstaRada: "Šalter",
      Email: "mmujic@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: "800 KM"
    }
    var u5 = {
      id: 5,
      ImePrezime: "Himzo Polovina",
      VrstaRada: "Vodič",
      Email: "hpolovina@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: "1000 KM"
    }
    uposlenik.push(u1)
    uposlenik.push(u2)
    uposlenik.push(u3)
    uposlenik.push(u4)
    uposlenik.push(u5)
    localStorage.setItem("uposlenik", JSON.stringify(uposlenik))
    var ponude = []
    var nudim1 = {
      id: 1,
      hotel: "Aqua",
      mjesto: "Nica",
      drzava: "Francuska"

    }
    var nudim2 = {
      id: 2,
      hotel: "Viva",
      mjesto: "Las Vegas",
      drzava: "SAD"

    }
    var nudim3 = {
      id: 3,
      hotel: "Bistrica",
      mjesto: "Jahorina",
      drzava: "BIH"

    }
    var nudim4 = {
      id: 4,
      hotel: "FIS",
      mjesto: "Vlašić",
      drzava: "BIH"

    }
    var nudim5 = {
      id: 4,
      hotel: "Palma",
      mjesto: "Makarska",
      drzava: "Hrvatska"

    }
    ponude.push(nudim1)
    ponude.push(nudim2)
    ponude.push(nudim3)
    ponude.push(nudim4)
    ponude.push(nudim5)
    localStorage.setItem("ponude", JSON.stringify(ponude))
  }

  

  render() {

    if(this.state.redirect === true){
      if(global.role=="user"){
        return <Redirect to="/pocetna"></Redirect>
      }
      else{
        return <Redirect to="/pocetnauposlenik"></Redirect>
      }
    }

    return (
     
      <div className="loginforma">

      <Form >
          <Form.Group>
            
            <Form.Control type="username" placeholder="Korisničko ime" value={this.state.username} onChange={(e)=>{
              this.setState({
                username:e.target.value
              })
            }}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Šifra" value={this.state.password} onChange={(e)=>{
              this.setState({
                password:e.target.value
              })
            }}/>
          </Form.Group>
          
          
          
      </Form>
      <button className="submit" onClick={this.onLogin} >
      Prijavi se
      </button>
      </div>
    )
  }
}

export default LoginForm;