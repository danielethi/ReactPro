import React, { Component } from "react";
import Home from "./Home";
import Listgames from "./Listgames";
export default class Login extends Component {
  state = {
    loginemail: "",
    loginpassword: "",
    isloggedin: false
  };

 
  handleEvent=(event)=>{
      this.setState({[event.target.name]:event.target.value})
  }

  handleLoggingin = (e) => {
    e.preventDefault();
    let mail = JSON.parse(localStorage.getItem("Email"));
    let pass = JSON.parse(localStorage.getItem("Password"));


    if (!this.state.loginemail || !this.state.loginpassword) {
      console.log("..please enter email and password");
    } else if (this.state.loginemail !== mail || this.state.loginpassword !== pass) {
      console.log("user doesn't exist");
    } else {
    }
  };
  buttonClick = () => {
     this.setState({isloggedin:!this.state.isloggedin})
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleLoggingin}>
          <h3 style={{ color: "black" }}>Log in</h3>

          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              onChange={this.handleEvent}
              placeholder="email"
              required
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleEvent}
              placeholder="password"
              required
            />
  <button onClick={this.buttonClick}>Log in</button>
  {this.state.isloggedin ? <Listgames/>:null}
          </div>
        </form>
        
      </div>
    );
    
  }
}
