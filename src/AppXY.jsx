import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPostion] = useState({ x: 0, y: 0 });
  return (
    <div 
      className='container'
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        // setX(e.clientX);
        // setY(e.clientY);
        setPostion({ x: e.clientX, y: e.clientY });
      }}
    >
      <div 
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}

