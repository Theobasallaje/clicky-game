import React, { Component } from 'react';
import Nav from './components/Nav/'
import './style.css';
import Images from './components/Images';

class App extends Component {
  state={
    score: 0,
    topScore: 0,
    // Random images array
    // imageArray: ["https://picsum.photos/id/237/170/170","https://picsum.photos/id/238/170/170","https://picsum.photos/id/239/170/170","https://picsum.photos/id/240/170/170","https://picsum.photos/id/241/170/170","https://picsum.photos/id/242/170/170","https://picsum.photos/id/243/170/170","https://picsum.photos/id/244/170/170","https://picsum.photos/id/245/170/170","https://picsum.photos/id/246/170/170","https://picsum.photos/id/247/170/170","https://picsum.photos/id/248/170/170"],
    
    // Had to resize images in css
    imageArray: ["https://media.giphy.com/media/VXJWhaO7afRe/giphy.gif", // Saitama 
                "https://vignette.wikia.nocookie.net/onepunchman/images/6/69/Genos_profile_anime.png/revision/latest/scale-to-width-down/310?cb=20161002155041", // Genos
                "https://vignette.wikia.nocookie.net/onepunchman/images/3/37/License-lessRiderAnimeAvi.png/revision/latest?cb=20160207195325", // Mumen Rider 
                "https://i.redd.it/dbngi0djlq521.png", // Speed-o'-Sound Sonic
                "https://vignette.wikia.nocookie.net/onepunchman/images/8/81/Atomic_Samurai_Avi.png/revision/latest?cb=20151227200044", // Atomic Samurai 
                "https://vignette.wikia.nocookie.net/onepunchman/images/2/28/ChildEmperorAvi.png/revision/latest?cb=20151227201758", // Child Emperor
                "http://www.anime-evo.net/wp-content/uploads/2015/12/One-Punch-Man-11-17.jpg", // Lord Boros 
                "https://vignette.wikia.nocookie.net/onepunchman/images/3/34/BangAvi.png/revision/latest?cb=20151227193132", // Silver Fang 
                "https://vignette.wikia.nocookie.net/onepunchman/images/8/8e/Deep_Sea_King_Anime_Portrait.png/revision/latest?cb=20151124210322", // Deep Sea King 
                "https://vignette.wikia.nocookie.net/onepunchman/images/d/d5/Drive_Knight.png/revision/latest?cb=20151221135032", // Drive Knight 
                "http://vignette4.wikia.nocookie.net/onepunchman/images/2/2c/BofoyAnime.png", // Metal Knight
                "https://medias.spotern.com/spots/w640/68600-1532336916.jpg"], // Tatsumaki (Tornado of Terror)
    clicked: []
  }

  handleClick = (image, clicked) => {
    console.log(`You Clicked ${image}`);
    this.setState({
      clicked: [...this.state.clicked, image]
    })
    console.log(`Clicked Array: ${clicked}`);
    //if current image we click is in clicked array = true
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
