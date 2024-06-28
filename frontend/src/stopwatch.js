import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './stopwatch.css';
import axios from 'axios';
import OffCanvasMenu from "./offcanvas";

const Stopwatch=()=>{
    const [time,setTime]=useState(0);
    const [timeron,setTimeon]=useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    const handleReset=async()=>
    {
        const  response = await axios.post("https://clock-1-vz1p.onrender.com/stopwatch/"+time);
    console.log(response);
        setTime(0);
    }
    useEffect(()=>{
        let interval=null;

        if(timeron){
            interval=setInterval(() => {
                setTime(prevTime=>prevTime+10);
            }, 10);
        }else
        {
            clearInterval(interval);
        }

        return ()=>clearInterval(interval);

    },[timeron])


    return(
        <>
       
        <div className="stop_main">
        <h1 className="heading">{localStorage.pur}</h1>
         <div className="stop_inter">  
         <h2 className="stopwatch">STOPWATCH</h2>
        
            <div className="time">
                <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
                <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
                <span>{("0"+((time/10)%100)).slice(-2)}</span>
            </div>
            <div className="buttons">
                {!timeron && time===0 &&(
                <button className="start" onClick={()=>setTimeon(true)}>Start</button>
                )
            }
            {timeron&&(  <button className="stop" onClick={()=>setTimeon(false)}>Stop</button>)}
            { !timeron&& time!== 0&&(  <button className="resume" onClick={()=>setTimeon(true)}>Resume</button>)}
            { !timeron&& time >0 &&(  <button className="reset" onClick={handleReset}>Reset</button>)}
           
            </div>
            <div className="hid">
            <button className="hist" onClick={toggleMenu}>History</button>
            </div>
            </div>
            </div>
            <div>
      
      <OffCanvasMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
            
            
        </>
    );
}



export default Stopwatch;