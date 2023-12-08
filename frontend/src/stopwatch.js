import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './stopwatch.css';
import axios from 'axios';

const Stopwatch=()=>{
    const [time,setTime]=useState(0);
    const [timeron,setTimeon]=useState(false);

    const handleReset=async()=>
    {
        const  response = await axios.post("http://localhost:8000/stopwatch/"+time);
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
        <div>
            <div className="time">
                <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
                <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
                <span>{("0"+((time/10)%100)).slice(-2)}</span>
            </div>
            <div className="buttons">
                {!timeron && time===0 &&(
                <button onClick={()=>setTimeon(true)}>Start</button>
                )
            }
            {timeron&&(  <button onClick={()=>setTimeon(false)}>Stop</button>)}
            { !timeron&& time!== 0&&(  <button onClick={()=>setTimeon(true)}>Resume</button>)}
            { !timeron&& time >0&&(  <button onClick={handleReset}>Reset</button>)}

            </div>
            </div>
        </>
    );
}



export default Stopwatch;