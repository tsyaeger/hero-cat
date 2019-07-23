import React from 'react';
import child from './clip-lip-child-3/clip-lip-child-3-transparent.png'


const Child = ({positions}) => {

  return (
    <div
      id='child-wrapper'
      style={{
        position: 'relative',
        top: positions.top,
        left: positions.left,
        backgroundImage: `url('${child}')`,
        backgroundPosition: '20, -20',
        backgroundSize: '70px 70px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '70px',
        height: '70px',
        scaleX: '-1'
      }}
    />
  )

}

export default Child;
