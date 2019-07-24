import React, {Component} from 'react';
import cat from '../assets/cat-svg-5/cat-svg-5-transparent.png'

class Cat extends Component {

  handleKeyDown = (e) => {
    let newDirection;

    switch(e.keyCode) {
      case 37:
          newDirection = { top: 0, left: -10 , dir: 'LEFT', direction: 1};
          break;
      case 38:
          newDirection = { top: -10, left: 0 , dir: 'UP'};
          break;
      case 39:
          newDirection = { top: 0, left: 10, dir: 'RIGHT', direction: -1};
          break;
      case 40:
          newDirection = { top: 10, left: 0, dir: 'DOWN' };
          break;
      default:
          return;
    }
    this.props.handleCatMovement(newDirection);
  }

  componentDidMount() {
    window.onkeydown = this.handleKeyDown;
  }
  render(){
    return (
      <div
      id='cat-wrapper'
      style={{
        position: 'relative',
        top: this.props.positions.top,
        left: this.props.positions.left,
        backgroundImage: `url('${cat}')`,
        backgroundPosition: '0, 0',
        backgroundSize: '60px 60px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '60px',
        height: '60px',
        draggable: 'true',
        transform: `scaleX(${this.props.positions.direction})`
      }}
      onClick={() => this.props.changeGameStatus()}
      />
    )

  }
}

export default Cat;
