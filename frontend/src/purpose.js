import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './purpose.css';


const Purpose=()=>
{
    const [purpose,setPurpose]=useState('');
    const nav=useNavigate();
  const handleSubmit = async() => {
    const  response = await axios.post("http://localhost:8000/purpose/"+purpose);
    console.log(response);
    if(purpose)
    {
        localStorage.pur=purpose;
        nav('/stopwatch')
    }
    else
    {
        console.log('this');
        alert("Failed");
    }
  };
    return(
        <>
            <div className="purpose_main">
                <div className="purpose_inter">
                    <h3>Please Enter the following details:</h3>
                    <div className="purpose_3">
                <label>Purpose:</label>
                <input className="putin"placeholder="Enter the purpose" onChange={(e)=>setPurpose(e.target.value)}/>
                </div>
                <div className="purpose_4">
                <label>Description:</label>
                <textarea className="putin_2"placeholder="Enter the description"/>
                </div>
                <button className="Submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}



export default Purpose;