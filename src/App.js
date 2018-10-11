import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  onClick = () => {

  }

  componentDidMount() {
    function goodCall (response) {
      console.log(response.data[0].scenes[1])
    }
    function badCall(response) {
      console.log("back call back")
    }
  axios.get('http://localhost:8080/api/stories').then(goodCall).catch(badCall)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.onClick}>start story</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
