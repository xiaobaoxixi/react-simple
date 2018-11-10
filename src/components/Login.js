import React, { Component } from "react";
import "./Login.css";
import App from "./App";

export class Login extends Component {
  state = {
    step: 1,
    username: "",
    password: []
  };
  trackPassword = e => {
    let passwordSofar = this.state.password;
    passwordSofar.push(e.target.dataset.code);
    if (passwordSofar.toString() === "5,5,7,1") {
      console.log("passed");
      this.setState({
        step: 2
      });
    } else if (passwordSofar.toString().length > 19) {
      alert("looks like you need a start over :)");
      window.location.reload();
    }
  };

  render() {
    const currentStep = this.state.step;
    switch (currentStep) {
      case 1:
        return (
          <div>
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
            </div>
          </div>
        );
      case 2:
        return <App />;
    }
  }
}

export default Login;
