import React from 'react';
import dog from './dog-svg-2/dog-svg-2-transparent.png'

const Dog = ({positions}) => {

  return (
    <div
      id='dog-wrapper'
      style={{
        position: 'relative',
        top: positions.top,
        left: positions.left,
        backgroundImage: `url('${dog}')`,
        backgroundPosition: '-20, 20',
        backgroundSize: '150px 150px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '150px',
        height: '150px'
      }}
    />

  )
}

export default Dog;
