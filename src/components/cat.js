import React from 'react';
import cat from './cat-svg-5/cat-svg-5-transparent.png'

const Cat = ({positions, changeGameStatus}) => {

  return (
    <div
      id='cat-wrapper'
      style={{
        position: 'relative',
        top: positions.top,
        left: positions.left,
        backgroundImage: `url('${cat}')`,
        backgroundPosition: '0, 0',
        backgroundSize: '60px 60px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '60px',
        height: '60px',
        draggable: 'true'
      }}
      onClick={() => changeGameStatus()}
    />

  )
}

export default Cat;


// <img src={cat} className="img" id='cat-img' style={imgStyle} alt="cat" />
