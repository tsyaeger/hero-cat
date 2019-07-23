import React, {Component} from 'react';
import { UP, DOWN, LEFT, RIGHT } from './../helpers/constants';
import Background from './background'
import Cat from './cat';
import Dog from './dog';
import Child from './child';


const getDefaultState = () => {
  const boardSize = 25
  const playerSize = 25
  const half = Math.floor(boardSize / 2) * playerSize;
  console.log('dims',boardSize * playerSize)
  return {
    gameOn: false,
    size: {
      boardSize: boardSize,
      playerSize: playerSize,
      maxDim: boardSize * playerSize
    },
    positions: {
      cat: {
        top: 485,
        left: 941
      },
      dog: {
        top: half,
        left: -200
      },
      child: {
        top: 260,
        left: half,
        dirCount: 0,
        currentDirection: 'UP'
      }
    },
    childSpeed: 30,
    dogSpeed: 50
  }
}

//max top 470
//max left 1500

class Game extends Component {
  constructor(props){
    super(props)
    this.state = getDefaultState()
  }

  changeGameStatus = (e) => {
    let status
    if(this.state.gameOn == false){
      this.childInterval = setInterval(this.updateChildPosition, 50);
      this.dogInterval = setInterval(this.updateDogPosition, 200);
      status = 'ON'
    }
    else{
      clearInterval(this.childInterval);
      clearInterval(this.dogInterval);
      status = 'OFF'
    }
    this.setState(state => ({
      gameOn: !state.gameOn
    }))
  }



  updateChildPosition = () => {
    const maxDirCount = 15
    const { childSpeed, positions: { child, dog }, size: { playerSize, maxDim }} = this.state;
    let direction = (child.dirCount >= maxDirCount) ? this.getRandomDirection() : child.currentDirection

    //handle boundaries
    if(child.top >= 550){
      direction = 'UP'
    }
    else if(child.top <= 240){
      direction = 'DOWN'
    }
    else if(child.left <= -100){
      direction = 'RIGHT'
    }
    else if(child.left >= 1600){
      direction = 'LEFT'
    }

    const updatePosition = () => {
      switch(direction) {
        case 'UP':
          child.top -= childSpeed;
          break;
        case 'DOWN':
          child.top += childSpeed;
          break;
        case 'LEFT':
          child.left -= childSpeed;
          break;
        case 'RIGHT':
          child.left += childSpeed;
          break;
        case 'UP-LEFT':
          child.top -= childSpeed;
          child.left -= childSpeed;
          break;
        case 'UP-RIGHT':
          child.top -= childSpeed;
          child.left += childSpeed;
          break;
        case 'DOWN-LEFT':
          child.left -= childSpeed;
          child.top += childSpeed;
          break;
        case 'DOWN-RIGHT':
          child.left += childSpeed;
          child.top += childSpeed;
          break;
      }
      child.dirCount = (child.dirCount >= maxDirCount) ? 0 : child.dirCount += 1
      child.currentDirection = direction
      return child
    }

    this.setState({
      positions: {
        ...this.state.positions,
        child: updatePosition()
      }
    });
  }


  getRandomDirection = () => {
    const dirs = ['DOWN','LEFT','RIGHT', 'UP-RIGHT', 'UP-LEFT', 'DOWN-RIGHT', 'DOWN-LEFT'];
    const dirIx = Math.floor(Math.random() * Math.floor(dirs.length));
    return dirs[dirIx]
  }


  updateDogPosition = () => {
    const { childSpeed, positions: { child, dog }, size: { playerSize, maxDim }} = this.state;

    const findNewDogPosition = () => {
      dog.top = (child.top < dog.top) ? dog.top - 20 : dog.top + 20
      dog.left = (child.left < dog.left) ? dog.left - 20 : dog.left + 20
      return dog
    }

    this.setState({
      positions: {
        ...this.state.positions,
        dog: findNewDogPosition()
      }
    });
  }

  componentDidMount(){
    console.log("mounted")
  }

  // componentWillUnmount() {
  //   // clearInterval(this.childInterval)
  // }

  render(){
    return(
      <div id='imgs-wrapper'>
        <Background />
        <Cat positions={this.state.positions.cat} changeGameStatus={this.changeGameStatus}/>
        <Dog positions={this.state.positions.dog}/>
        <Child positions={this.state.positions.child}/>
      </div>
    )
  }

}

export default Game;
