import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import StoryButton from './components/startButton.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      story: {},
      options: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/stories')
      .then(res=>this.goodCall(res))
      .catch(err=>this.badCall(err))
  }

  goodCall = (response) => {
    this.setState({
      story: response.data[0],
      name: response.data[0].name
    })
  }

  badCall = (error)  => {
    console.log(error)
  }

  handleClick = (e) => {
    axios.get('http://localhost:8080/api/scenes/5bbe2c89bd214407efdb7fb6/options')
      .then(res=>this.setState({
        options: res.data}))
      .catch(err=>this.badCall(err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"./images/BG.png"} className="battle-giraffe" alt="Battle Giraffe" />
          <p>
            <StoryButton stories={this.state.stories} />
            <button onClick={this.handleClick}>start story</button>
          </p>
          <h2>
            {this.state.name}
          </h2>
          {this.state.options.map(option=> <p> {option.name} </p>)}
        </header>
      </div>
    );
  }
}

export default App;
