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
       <header className="header">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" className="logo" alt="logo" />
          <div className="info">
            <h1 className="title">Welcome to Calify</h1>
            <p className="intro">A very simple calendar app</p>
          </div>
        </header>
        <main>
          <div className="sidebar">
          </div>
          <div className="page">

          
            <h3>Events</h3>
            <ul className="events-list"> 
              {this.state.events.map(event => 
              <li key={event.id}>{event.description}</li>
              )}
            </ul>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
