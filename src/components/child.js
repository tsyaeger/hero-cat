import React from 'react';
import child from './clip-lip-child-3/clip-lip-child-3-transparent.png'


const Child = ({positions}) => {

  console.log('child pos',positions)

  return (
    <div
      id='child-wrapper'
      style={{
        position: 'relative',
        top: positions.top,
        left: positions.left,
        backgroundImage: `url('${child}')`,
        backgroundPosition: '20, -20',
        backgroundSize: '90px 90px',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        width: '90px',
        height: '90px'
      }}
    />
  )

}

export default Child;
