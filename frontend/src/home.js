import React from "react";
import Clock from "./clock";
import './clock.css';
import { useNavigate } from "react-router-dom";
const Home=()=>
{
    const nav=useNavigate();
    const gotoStopwatch=()=>
    {
        nav('/purpose');
    }
    return(
        <>
            <div className="home_main">
                <div className="home_inter">
                    <h1 className="hef">CLOCK</h1>
                    <Clock id="clock"/>
                    <button className="goto" onClick={gotoStopwatch}>Go to Stopwatch</button>
                </div>
            </div>
        </>
    )
}

export default Home;