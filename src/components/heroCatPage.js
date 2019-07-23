import React, {Component} from 'react'
import Game from './game';

class HeroCatPage extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div id='page-wrapper'>
        <div id='game-wrapper'>
          <Game />
        </div>
      </div>
    )
  }
}
export default HeroCatPage;