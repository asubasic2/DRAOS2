import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';






class LoginForm extends Component {


  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      username: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this)
  }
  handleKeyPressUsername(event) {
    var clickedId = event.key;
    if (clickedId == "ArrowDown") {
      // console.log("Clicked")
      document.getElementById("passwordfield").focus()
    }
  }

  handleKeyPressPassword(event) {
    var clickedId = event.key;
    if (clickedId == "ArrowUp") {
      // console.log("Clicked")
      document.getElementById("userfield").focus()
    }
  }




  onLogin() {

    if (this.state.username == 'korisnik' && this.state.password == 'korisnik') {
      this.setState(
        () => ({
          redirect: true,
        })
      )
      localStorage.setItem('role', 'user')
      global.role = 'user'
      return;
    }
    else if (this.state.username == 'admin' && this.state.password == 'admin') {
      this.setState(
        () => ({
          redirect: true,
        })
      )
      localStorage.setItem('role', 'admin')
      global.role = 'admin'
      return;
    }
    var korisnici = JSON.parse(localStorage.getItem("klijent"))
    for (var i = 0; i < korisnici.length; i++) {
      if (korisnici[i].username === this.state.username) {
        if (korisnici[i].password === this.state.password) {
          localStorage.setItem('role', 'user')
          localStorage.setItem("idkorisnik",korisnici[i].id.toString())
          global.role = 'user'
          this.setState(
            () => ({
              redirect: true,
            })
          )
          return;
        }
      }
    }
    alert("Pogrešno korisničko ime ili šifra.")
  }

  componentDidMount() {
    localStorage.setItem("role", "")
    var uposlenik = []
    var u1 = {
      id: 1,
      ImePrezime: "Ajdin Ločić",
      VrstaRada: "Šalter",
      Email: "alocic1@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: "800"
    }
    var u2 = {
      id: 2,
      ImePrezime: "Nina Mijatović",
      VrstaRada: "Šalter",
      Email: "nmijatovic@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: '800'
    }
    var u3 = {
      id: 3,
      ImePrezime: "Admir Subašić",
      VrstaRada: "Vodič",
      Email: "asubasic2@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: '1000'
    }
    var u4 = {
      id: 4,
      ImePrezime: "Mujo Mujić",
      VrstaRada: "Šalter",
      Email: "mmujic@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: '800'
    }
    var u5 = {
      id: 5,
      ImePrezime: "Himzo Polovina",
      VrstaRada: "Vodič",
      Email: "hpolovina@etf.unsa.ba",
      Zaposlen: "01.02.2019.",
      Plata: '1000'
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
      hotel: "Embudu Village",
      zvjezdica: 4,
      soba: 124,
      opis: "Poznat je po zadivljujućem grebenu kao i spektakularnim mestima za ronjenje svetske klase, od kojih se njih 35 nalazi u neposrednoj blizini. Raže, ajkule, kornjače, murinke i mnoge druge neverovatne životinje mogu da se nađu oko grebena. Takođe nudi mnoštvo sadržaja, pored prekrasne prirode i idiličnih pogleda nudi zabavu i sport.",
      cijena: "2000 KM",
      mjesto: "Maldivi",
      drzava: "Maldivi"

    }
    var nudim2 = {
      id: 2,
      hotel: "Viva",
      zvjezdica: 5,
      soba: 124,
      opis: "Poznat je po zadivljujućem grebenu kao i spektakularnim mestima za ronjenje svetske klase, od kojih se njih 35 nalazi u neposrednoj blizini. Raže, ajkule, kornjače, murinke i mnoge druge neverovatne životinje mogu da se nađu oko grebena. Takođe nudi mnoštvo sadržaja, pored prekrasne prirode i idiličnih pogleda nudi zabavu i sport.",
      cijena: "1560 KM",
      mjesto: "Kapadokija",
      drzava: "Turska"

    }
    var nudim3 = {
      id: 3,
      hotel: "Bistrica",
      zvjezdica: 4,
      soba: 124,
      opis: "Poznat je po zadivljujućem grebenu kao i spektakularnim mestima za ronjenje svetske klase, od kojih se njih 35 nalazi u neposrednoj blizini. Raže, ajkule, kornjače, murinke i mnoge druge neverovatne životinje mogu da se nađu oko grebena. Takođe nudi mnoštvo sadržaja, pored prekrasne prirode i idiličnih pogleda nudi zabavu i sport.",
      cijena: "1000 KM",
      mjesto: "Marakeš",
      drzava: "Maroko"

    }
    var nudim4 = {
      id: 4,
      hotel: "Vdara Hotel & Spa at ARIA Las Vegas",
      zvjezdica: 5,
      soba: 300,
      opis: "Ovaj resort nalazi se u aveniji Las Vegas Strip te nudi spa centar s potpunom uslugom. Svi suitevi imaju priključnu stanicu za iPod i TV ravnog ekrana veličine 107 cm. Moderni suitevi u objektu Vdara Hotel & Spa at ARIA Las Vegas obuhvaćaju čajnu kuhinju i blagovaonicu. U ovom resortu bez kockarnice nije dopušteno pušenje. Resort obuhvaća isključivo suiteve, a pojedini su posebno opremljeni za boravak gostiju sa psima. Objekt Vdara Hotel & Spa at ARIA Las Vegas ima krovni bazen okružen manjim bazenima. U baru pokraj bazena poslužuju se lagani obroci i kokteli. U sklopu resorta Vdara Hotel & Spa at ARIA Las Vegas smještena je ekskluzivna trgovina prehrambenih proizvoda Market Cafe, koja obuhvaća i kafić. U ovoj je trgovini moguće kupiti razne lagane zalogaje i svježe namirnice. Bar Vice Versa Pation and Lounge at Vdara tijekom večeri poslužuje koktele u suvremenom ozračju. Svakog petka i subote u večernjim se satima održavaju nastupi glazbenika uživo.",
      cijena: "5000 KM",
      mjesto: "Las Vegas",
      drzava: "SAD"

    }
    var nudim5 = {
      id: 5,
      hotel: "Palma",
      zvjezdica: 4,
      soba: 124,
      opis: "Poznat je po zadivljujućem grebenu kao i spektakularnim mestima za ronjenje svetske klase, od kojih se njih 35 nalazi u neposrednoj blizini. Raže, ajkule, kornjače, murinke i mnoge druge neverovatne životinje mogu da se nađu oko grebena. Takođe nudi mnoštvo sadržaja, pored prekrasne prirode i idiličnih pogleda nudi zabavu i sport.",
      cijena: "3000 KM",
      mjesto: "Las Vegas",
      drzava: "SAD"

    }
    ponude.push(nudim1)
    ponude.push(nudim2)
    ponude.push(nudim3)
    ponude.push(nudim4)
    ponude.push(nudim5)
    localStorage.setItem("ponude", JSON.stringify(ponude))

    var k1 = {
      id: 1,
      imeprezime: "Admir Subašić",
      email: "asubasic2@etf.unsa.ba",
      username: "asubasic2",
      password: "neki",
      telefon: "061/111-222",
      racun: "4406522884781126"
    }
    var k2 = {
      id: 2,
      imeprezime: "Nina Mijatović",
      username: "nmijatovic1",
      password: "neki",
      telefon: "061/222-333",
      racun: "5389697114304580"
    }
    var k3 = {
      id: 3,
      imeprezime: "Ajdin Ločić",
      username: "alocic1",
      password: "neki",
      telefon: "061/333-444",
      racun: "5390107567254982"
    }
    var k4 = {
      id: 4,
      imeprezime: "Hrvoje Hrvatinić",
      username: "hhrvatinic1",
      password: "neki",
      telefon: "061/444-555",
      racun: "5124646174228973"
    }
    var k5 = {
      id: 5,
      imeprezime: "Neki Klikent",
      username: "nklijent1",
      password: "neki",
      telefon: "061/555-666",
      racun: "5533491965137231"
    }
    var klijenti = []
    klijenti.push(k1)
    klijenti.push(k2)
    klijenti.push(k3)
    klijenti.push(k4)
    klijenti.push(k5)
    localStorage.setItem("klijent", JSON.stringify(klijenti))
    var sveZelje = []
    localStorage.setItem("meso", JSON.stringify(sveZelje))
    var rezervacije = []
    var r1 = {
      idkorisnik: 3,
      datumDolaska: "03.03.2020.",
      datumOdlaska: "07.03.2020.",
      brojKreveta: 2,
      Vodic: 0,
      prevoz: "Autobus",
      putnoOsiguranje: 1,
      djece: 1,
      cijena: 550
    }
    var r2 = {
      idkorisnik: 3,
      datumDolaska: "03.03.2020.",
      datumOdlaska: "09.03.2020.",
      brojKreveta: 1,
      Vodic: 1,
      prevoz: "Avion",
      putnoOsiguranje: 1,
      djece: 0,
      cijena: 1050
    }
    rezervacije.push(r1)
    rezervacije.push(r2)
    localStorage.setItem("rezervacije", JSON.stringify(rezervacije))
  }



  render() {

    if (this.state.redirect === true) {
      if (global.role == "user") {
        return <Redirect to="/pocetna"></Redirect>
      }
      else {
        return <Redirect to="/pocetnauposlenik"></Redirect>
      }
    }

    return (

      <div className="loginforma">

        <Form >
          <Form.Group>

            <Form.Control type="username" placeholder="Korisničko ime" id='userfield' value={this.state.username} onChange={(e) => {
              this.setState({
                username: e.target.value
              })
            }}
              onKeyDown={this.handleKeyPressUsername} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Šifra" id='passwordfield' value={this.state.password} onChange={(e) => {
              this.setState({
                password: e.target.value
              })
            }}
              onKeyDown={this.handleKeyPressPassword} />
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