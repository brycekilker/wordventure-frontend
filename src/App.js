import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import StoryButton from './components/startButton.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stories: {},
    }
  }

  componentDidMount() {
  axios.get('http://localhost:8080/api/stories').then(res=>this.goodCall(res)).catch(err=>this.badCall(err))
  }
  goodCall = (response) => {
    console.log(this.state)
    this.setState({stories: response.data[0].name})
  }
  badCall = (error)  => {
    console.log(error)
  }
handleClick = (e) => {
  console.log(this.state)
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
            Adventure!
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
