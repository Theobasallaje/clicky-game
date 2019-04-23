import React, { Component } from 'react';
import Nav from './components/Nav/'
import './style.css';
import Images from './components/Images';

class App extends Component {
  state={
    score: 0,
    topScore: 0,
    imageArray: ["url1","url2"]
  }

  render() {
    return (
      <div className="App">
        <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Images/>
      </div>
    );
  }
}

export default App;
