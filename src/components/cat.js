import React from 'react';
import cat from './cat-svg-5/cat-svg-5-transparent.png'

const Cat = ({positions}) => {

  return (
    <div
      id='cat-wrapper'
      style={{
        position: 'relative',
        top: positions.top,
        left: positions.left,
        backgroundImage: `url('${cat}')`,
        backgroundPosition: '0, 0',
        backgroundSize: '100px 100px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '100px',
        height: '100px'
      }}
    />

  )
}

export default Cat;


// <img src={cat} className="img" id='cat-img' style={imgStyle} alt="cat" />
