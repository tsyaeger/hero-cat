import React from 'react';

const Status = () => {

  const styling = {
    position: 'absolute',
    top: '200px',
    left: '600px'
  }

  return(
    <div id='status-msg' style={styling}>
      <h1>Hero Cat Saves the Day!</h1>
    </div>
  )
}
export default Status;
