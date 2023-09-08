import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurentTemp from "./CurentTemp";
import WeekTemp from "./WeekTemp"

export default function Search(props){

    
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);
  
      function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
          temperature: response.data.main.temp,
          coordinates: response.data.coord,
          city: response.data.name,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          date: new Date(response.data.dt * 1000),
        });
    
        setReady(true);
      }

      function Search() {
        let apiKey = "2870469bf4e2d9e7713d0410e1682df1";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        Search();
      }

      function handleCitychange(event) {
        setCity(event.target.value);
      }
    
      if (ready) {

    return(
        <div className="search-app">
        <form className="enter-city" onSubmit={handleSubmit} >
          <div className="row">
         <div className="col-6 p-0">
          <input id="enter-now"  
          type="search" 
          placeholder="Enter a city" 
          className="form-control me-auto"
          autoFocus="on"
          onChahge={handleCitychange} />
        </div>
        <div className="col p-0">
        <input className="find-city btn btn-primary w-100" id="find-city" type="Submit" value="Search" />
        </div>
        <div className="col p-0">
        <input className="find-city btn btn-primary w-100" id ="local" type="Submit" value="Local" />
        </div>
        </div>
        </form>
        <CurentTemp data={weatherData} />
        <WeekTemp coordinates={weatherData.coordinates} />
        
        </div>

    );
}else {
    Search();
    return "Loading...";
  }
}
