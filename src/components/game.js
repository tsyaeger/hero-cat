import React, {Component} from 'react';
import Background from './background'
import Cat from './cat';
import Dog from './dog';
import Child from './child';


const getDefaultState = () => {
  const boardSize = 15
  const playerSize = 25
  const half = Math.floor(boardSize / 2) * playerSize;
  return {
    size: {
      boardSize: boardSize,
      playerSize: playerSize,
      maxDim: boardSize * playerSize
    },
    positions: {
      cat: {
        top: half,
        left: half
      },
      dog: {
        top: half,
        left: half
      },
      child: {
        top: half,
        left: half
      }
    },
    dogSpeed: 5
  }
}



class Game extends Component {
  constructor(props){
    super(props)
    this.state = getDefaultState()
  }

  render(){
    return(
      <div id='imgs-wrapper'>
        <Background />
        <Cat positions={this.state.positions.cat}/>
        <Dog positions={this.state.positions.dog}/>
        <Child positions={this.state.positions.child}/>
      </div>
    )
  }

}

export default Game;
