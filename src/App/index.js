import React, { Component } from "react";
import "./style.css";

class App extends Component {
  state = { events: [] }

  componentDidMount() {
    fetch('/events')
      .then(response => response.json())
      .then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App">
        <h1>Calify</h1>
        <h3>Events</h3>
        <ul> 
          {this.state.events.map(event => 
          <li key={event.id}>{event.description}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
