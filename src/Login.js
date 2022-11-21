import React from "react";
import fire from "./components/config/fire";
import "./App.css";
import Dashboard from "./dashboard";

class Login extends React.Component {
  login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        alert("Invalid Email or Password");
      });
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <h1 className="head">Login</h1>
          <div className="email">
            Email Address
            <input id="email" type="text" />
          </div>
          <div>
            <div className="password">
              Password
              <input id="password" type="text" />
            </div>
          </div>

          <button className="btn" onClick={this.login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
