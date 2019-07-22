import React from 'react';
import imageUrl from './suburb.jpg';

const Background = () => {
  return (
    <div id='background'
    style={{
      position: 'absolute',
      backgroundImage: `url('${imageUrl}')`,
      backgroundSize: '100% 100%',
      overflow: 'hidden',
      padding: 0,
      margin: 0,
      width: '100%',
      height: '100%'
    }}

    />


  )
}
export default Background;
