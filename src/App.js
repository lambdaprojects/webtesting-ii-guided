import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    greeting: "No hello for you"
  };
  render() {
    return (
      <>
        <h2>hello world!</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <div>{this.state.greeting}</div>
      </>
    );
  }

  greet = () => {
    this.setState({ greeting: "Hello web19" });
  };

  bye = () => {
    this.setState({ greeting: "Bye bye" });
  };
}

export default App;
