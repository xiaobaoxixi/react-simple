import React, { Component } from "react";
import "./Login.css";
import App from "./App";

export class Login extends Component {
  state = {
    step: 1,
    username: "",
    password: [],
    disabled: true
  };
  componentDidMount() {
    if (localStorage.getItem("username")) {
      this.setState({
        username: localStorage.getItem("username")
      });
    } else {
      console.log("no local user registered");
    }
  }
  checkUser = e => {
    let typed = e.target.value;
    this.setState({
      username: typed
    });
  };
  trackPassword = e => {
    let passwordSofar = this.state.password;
    passwordSofar.push(e.target.dataset.code);
    fetch("https://5be5595c48c1280013fc3d34.mockapi.io/users")
      .then(data => data.json())
      .then(users => {
        const matchingUser = users.filter(
          u => u.username === this.state.username
        )[0];
        if (
          matchingUser &&
          matchingUser.password.toString() === passwordSofar.toString()
        ) {
          // keep username in local storage
          this.setState({
            username: matchingUser.username
          });
          localStorage.setItem("username", this.state.username);
          console.log("user:" + localStorage.getItem("user"));
          this.setState({
            step: 2
          });
        }
      });

    if (passwordSofar.toString() === "5,5,7,1") {
    } else if (passwordSofar.toString().length > 19) {
      alert("looks like you need a start over :)");
      window.location.reload();
    }
  };
  restartPassword = () => {
    console.log("restart password");
    this.setState({
      password: []
    });
  };
  signInNew = () => {
    console.log("sign in another acount");
  };
  signUp = () => {
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    fetch(`https://5be5595c48c1280013fc3d34.mockapi.io/users`, {
      method: "post",
      body: JSON.stringify(userInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(data => {
        console.log("signed up");
      });
  };
  render() {
    const currentStep = this.state.step;
    switch (currentStep) {
      case 1:
        return (
          <div>
            <input
              className={
                this.state.username === ""
                  ? "user-name-input"
                  : "user-name-input big"
              }
              type="text"
              placeholder="user name"
              onChange={this.checkUser}
              value={
                this.state.username === ""
                  ? ""
                  : "Welcome back " + this.state.username
              }
              disabled={this.state.disabled}
            />
            <div className="password">
              <div className="dot" onClick={this.trackPassword} data-code="1">
                <p>1</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="2">
                <p>2</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="3">
                <p>3</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="4">
                <p>4</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="5">
                <p>5</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="6">
                <p>6</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="7">
                <p>7</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="8">
                <p>8</p>
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="9">
                <p>9</p>
              </div>
              <div className="dot empty">
                <p />
              </div>
              <div className="dot" onClick={this.trackPassword} data-code="9">
                <p>0</p>
              </div>
              <div className="dot clear" onClick={this.restartPassword}>
                <p>x</p>
              </div>
            </div>
            <button onClick={this.signInNew}>
              sign IN with another acount
            </button>
            <button onClick={this.signUp}>sign UP new acount</button>
          </div>
        );
      case 2:
        return <App />;
    }
  }
}

export default Login;
