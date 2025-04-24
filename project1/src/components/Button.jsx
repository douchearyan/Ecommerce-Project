import React from 'react'
import {UseState} from 'react'
const Button = () => {
    const [hover, setHover] = UseState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const buttonStyle = {
    textcolor: blue ,
  };

  return (
    <div>
      <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
    </button>
    </div>
  )
}

export default Button
