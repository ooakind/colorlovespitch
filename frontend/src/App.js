import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    pitches: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const pitches = await res.json();
      this.setState({ pitches });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.pitches.map(p => (
          <div>{p.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
