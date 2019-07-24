import React from 'react';
import dog from '../assets/dog-svg-2/dog-svg-2-transparent.png'


const Dog = ({positions}) => {

  return (
    <div
      id='dog-wrapper'
      style={{
        position: 'relative',
        top: positions.top,
        left: positions.left,
        backgroundImage: `url('${dog}')`,
        backgroundPosition: '0, 0',
        backgroundSize: '100px 100px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '100px',
        height: '100px',
        transform: `scaleX(${positions.direction})`
      }}
    />

  )
}

export default Dog;
