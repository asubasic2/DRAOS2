import React, { Component } from 'react';
import { Form, Nav, Container, Col, Table, Row} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'





class PrijavaForm extends Component {

  
  constructor(props) {
    super(props);

      this.state = {
        redirect: false,
        ime:'',
        username:'',
        password:'',
        repeatpassword:'',
        broj:'',
        racun: '',
        redirect: false,
        userStatus: false,
        telStatus: false,
        racunStatus: false,
        imeStatus: false,
        passStatus: false,
        klijenti: []
      };
      this.onLogin = this.onLogin.bind(this)
  }

  componentDidMount(){
    this.setState({
      klijenti:  JSON.parse(localStorage.getItem("klijent"))
    })
  }
    
  onLogin() {
    var greska = ""
    const regexbroj = /^\d{3}\/\d{3}-\d{3}$/g
    this.setState({
        userStatus: false,
        telStatus: false,
        racunStatus: false,
        imeStatus: false,
        passStatus: false
    })
    if(this.state.ime < 4) {
      greska = "Neispravno unešeno ime i prezime! Ime i prezime mora imati barem 5 karaktera."
      this.setState({
        imeStatus: true
      })
      alert(greska)
      return ;
    }
    if(this.state.username.length < 3){
        greska = "Neispravno korisničko ime! Korisničko ime treba sadržati više od 3 karaktera.\n"
        this.setState({
            userStatus: true
        })
        alert(greska)
        return ;
    }
    if(this.state.password.length == 0){
      greska = "Neispravna šifra! Polje šifra ne smije ostati prazno."
      this.setState({
        passStatus: true
      })
      alert(greska)
      return ;
    }
    if((this.state.password != this.state.repeatpassword)){
      greska = "Neispravna šifra! Šifre se ne poklapaju."
      this.setState({
        passStatus: true
      })
      alert(greska)
      return ;
    }
    if(!regexbroj.test(this.state.broj)){
      greska = "Neispravan format broja telefona! Unesite u formatu: \"xxx/xxx-xxx\""
      this.setState({
          telStatus: true
      })
      alert(greska)
      return ;
    }
    if(this.state.racun.length !== 16){
        greska = "Neispravno unešen broj računa! Broj računa mora sadržavati tačno 16 karaktera.\n"
        this.setState({
            racunStatus: true
        })
        alert(greska)
        return ;
    }
    var u1 = this.state.klijenti
    var klijent = {
        id: u1.length+1,
        imeprezime: this.state.ime,
        username: this.state.username,
        password: this.state.password,
        telefon: this.state.broj,
        racun: this.state.racun
    }
    u1.push(klijent)
    localStorage.setItem("klijent", JSON.stringify(u1))
    alert("Klijent " + this.state.ime + " je uspješno unešen!")
    this.setState({
        redirect: true
    })
  }

  

  render() {

    if(this.state.redirect === true){
      return <Redirect to="/klijentipostavke"></Redirect>
    }

    return (
     
      <div className="mainpage">
        <div style={{marginBottom: "2em"}}>
        <Nav.Link href = "/klijentipostavke" ><button className="submit"> Nazad </button> </Nav.Link>
      </div>
          <Container style = {{marginBottom: '2em'}}>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Ime i Prezime: </th>
                            <td><Form.Control type="username" isInvalid={this.state.imeStatus} value={this.state.ime} onChange={(e)=>{
              this.setState({
                ime:e.target.value
              })
            }} /></td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Korisničko ime: </th>
                            <td><Form.Control isInvalid={this.state.userStatus} type="username" value={this.state.username} onChange={(e)=>{
              this.setState({
                username:e.target.value
              })
            }}/>
                            </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Šifra: </th>
                            <td><Form.Control isInvalid = {this.state.passStatus} type="password"  value={this.state.password} onChange={(e)=>{
              this.setState({
                password:e.target.value
              })
            }}/></td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Ponovi šifru: </th>
                            <td> <Form.Control type="password" isInvalid={this.state.passStatus}  value={this.state.repeatpassword} onChange={(e)=>{
              this.setState({
                repeatpassword:e.target.value
              })
            }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj telefona: </th>
                            <td>  <Form.Control type="username" isInvalid={this.state.telStatus} placeholder="06x/xxx-xxx" value={this.state.broj} onChange={(e)=>{
              this.setState({
                broj:e.target.value
              })
            }}/> </td>
                        </tr>
                        <tr>
                            <th  style = {{textAlign: 'right'}}>Broj računa: </th>
                            <td>  <Form.Control type="username" isInvalid={this.state.racunStatus} placeholder="Primjer: 5152226415873245" value={this.state.racun} onChange={(e)=>{
            this.setState({
              racun:e.target.value
            })
          }}/></td>
                        </tr>
                            <th></th>
                            <th><button className="submit" onClick = {()=> {this.onLogin()}}> PRIJAVI SE </button></th>
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container> 
      </div>
    )
  }
}

export default PrijavaForm;