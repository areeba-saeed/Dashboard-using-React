import React, { Component } from "react";
import fire from "./components/config/fire";
import Login from "./Login.js";
import "./App.css";
import Dashboard from "./dashboard";
import navigatepath from "./navigatepath.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div> {this.state.user ? <Dashboard /> : <Login />}</div>;
  }
}

export default App;
