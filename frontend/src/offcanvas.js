import React from 'react';
import './OffCanvasMenu.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const OffCanvasMenu = ({ isOpen, toggleMenu }) => {
  const [data, setData] = useState('');
  const [data_2, setData_2] = useState('');
  let count=0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/stopwatch");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData_2 = async () => {
      try {
        const response = await axios.get("http://localhost:8000/stopwatch");
        console.log(response.data);
        setData(response.data);  // Fix this line
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData_2();
  }, []);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };
  const Increment=()=>
  {
    count=count+1;
    return count;
  }
  return (
    <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`}>
      <button className='close_button' onClick={toggleMenu}>X</button>
      {/* <h1 className='done'>{localStorage.pur}</h1> */}
      {data && data.map((item,index) => (
         <h1>{index + 1}</h1>,
  <h2 className='done_time' key={item.id}>{formatTime(item.hist)}</h2>
  ))}


      {/* {data && data.map((item) => (
       
        <h1 key={item.id}>{item.purpose}</h1>
      ))} */}
    </div>
  );
};

export default OffCanvasMenu;
