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

  }

  

  render() {

    if(this.state.redirect === true){
      if(global.role=="user"){
        return <Redirect to="/home"></Redirect>
      }
      else{
        return <Redirect to="/pregledkorisnika"></Redirect>
      }
    }

    return (
     
      <div className="loginforma">

      <Form >
          <Form.Group>
            
            <Form.Control type="username" placeholder="Username" value={this.state.username} onChange={(e)=>{
              this.setState({
                username:e.target.value
              })
            }}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e)=>{
              this.setState({
                password:e.target.value
              })
            }}/>
          </Form.Group>
          
          
          
      </Form>
      <button className="submit" onClick={this.onLogin} >
      LOGIN
      </button>
      </div>
    )
  }
}

export default LoginForm;