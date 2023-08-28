import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./App.css";



export default function CurentTemp(props){
    
    return(
        <div>
        <h6 className="label">Your city</h6>
        <div className="now">
          <div className="card-city">
            <h1 id="city"> {props.data.city} </h1>
            <p className="date-curent" id="current-day"><bold><FormattedDate date={props.data.date} /></bold></p>
            <p className="it-is" id = "description">{props.data.descritption}</p>
            <p className="it-is" id = "wind">Wind: {Math.round(props.data.wind)} km/h</p>

          </div>
          <div className="current-temperature">
            <h1 className="enter-temp" id="temperature" ><span><WeatherTemperature celsius={Math.round(props.data.temperature)} /></span></h1>
            <p className="image"><span class="current-emoj"><WeatherIcon code={props.data.icon} size={35} /></span></p>
          </div>
        </div>
      
      </div>
     
    )
};