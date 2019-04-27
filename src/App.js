import React, { Component } from 'react';
import Nav from './components/Nav/'
import './style.css';
import Images from './components/Images';

class App extends Component {
  state={
    score: 0,
    topScore: 0,
    imageArray: ["https://picsum.photos/id/237/170/170",
                "https://picsum.photos/id/238/170/170",
                "https://picsum.photos/id/239/170/170",
                "https://picsum.photos/id/240/170/170",
                "https://picsum.photos/id/241/170/170",
                "https://picsum.photos/id/242/170/170",
                "https://picsum.photos/id/243/170/170",
                "https://picsum.photos/id/244/170/170",
                "https://picsum.photos/id/245/170/170",
                "https://picsum.photos/id/246/170/170",
                "https://picsum.photos/id/247/170/170",
                "https://picsum.photos/id/248/170/170"],
    clicked: []
  }

  handleClick = (image) => {
    console.log(`You Clicked ${image}`)
    //if curr image we click is in clicked array = true
    //reset score to 0 and shuffle array and reset game
    //else
    //push into clicked array, update score by 1 and compare with topscore and update if needed, shuffle array
    //can shuffle iamges after if else since we do it either way
    //can make a handleShuffle method if needed
  }

  render() {
    return (
      <div className="App">
        <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Images
          imageArray={this.state.imageArray}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
