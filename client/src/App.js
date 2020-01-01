import React, { Component } from "react";
import Thumbnail from './Components/Thumbnail';
import Score from './Components/Scorecard';

class App extends Component {

  state = {
    tiles: [
      '/img/mando.png',
      '/img/quill.png',
      '/img/cara.png',
      '/img/bounty.png',
      '/img/ig.png',
      '/img/bbyoda.png',
      '/img/moff.png',
      '/img/armor.png',
      '/img/mythrol.png',
      '/img/client.PNG',
      '/img/lady.PNG',
      '/img/junker.PNG',
    ],
    topScore: 0,
    score: 0,
  };

  clickedTiles = [
  ];
// empty clicked tiles array
// remvoe https
// shuffle the array on 1st mount 
// store image locally save extention


  handleTileClick = (evt) => {
    console.log(evt);
    const clickedTile = evt.target.src;
    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length=0;
      this.setState({score: 0});
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ? 
    newScore: 
    this.state.topScore;
    this.clickedTiles.push(clickedTile);
    const shuffled = this.state.tiles.sort(() => { return 0.5 - Math.random() });
    this.setState({ 
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />
        {
          this.state.tiles.map((tile, idx) => <Thumbnail
            src={tile}
            key={idx}
            onClick={this.handleTileClick}
          />)
        }
      </div>
    );
  };

};
export default App;
