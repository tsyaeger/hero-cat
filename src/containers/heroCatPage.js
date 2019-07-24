import React, {Component} from 'react'
import Game from '../components/game';
import Background from '../components/background';
//navigation
//instructions

class HeroCatPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }
  }

  render(){
    return (
      <div id='page-wrapper'>
        <button id='play-btn'>play hero cat</button>
        <div id='game-wrapper'>
          <Background />
          <Game />
        </div>
      </div>
    )
  }
}
export default HeroCatPage;
