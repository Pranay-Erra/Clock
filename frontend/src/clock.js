import React, { useState, useEffect } from 'react';
import './clock.css';
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='clock'>
      <h1 className='clock_2'>{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
