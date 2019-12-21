import React, { Component } from "react";
import Thumbnail from './Components/Thumbnail';
import "./App.css";

class App extends Component {
  state={  
  tiles:[
    'https://wellforstarters.files.wordpress.com/2016/02/ashley_me3_character_shot.png?w=200&h=200',
    'https://wellforstarters.files.wordpress.com/2016/02/subject_zero_character_box.png?w=200&h=223',
    'https://vignette.wikia.nocookie.net/massfanon/images/f/f3/SsXdaPxK4JWa.png/revision/latest/scale-to-width-down/340?cb=20161008225042'
  ],
  ClickedTiles:[

  ]
};

    handleTileClick=(evt)=>{
      // record click\
      // test for match
      console.log(evt);
      const clickImg=evt.target.src

     const shuffled= this.state.cards.sort(()=>{ return 0.5 - Math.random() });
     this.setState({tiles:shuffled})

    }
  render() {
    return (
      <div className="App">
        {
        this.state.tieles.map((tile,idx)=><Thumbnail 
       src= {tile} key={idx} onClick={this.handleTileClick}
       />)
       }
      </div>

    );
  }
}

export default App;
