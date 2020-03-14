import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./Quiz";
import AppContext from "./AppContext";

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
        <AppContext.Provider value={{ pitches: this.state.pitches }}>
          <Router>
            <Route exact path="/quiz" render={props => <Quiz {...props} />} />
          </Router>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
