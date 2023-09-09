import React, { useState } from "react";
import CurentTemp from "./CurentTemp";
import WeekTemp from "./WeekTemp";
import axios from "axios";
import "./Search.css";

export default function Search(props){

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
  
      function handleResponse(response) {
       console.log(response.data);
        setWeatherData({
          ready:true,
          temperature: response.data.main.temp,
          coordinates: response.data.coord,
          city: response.data.name,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          date: new Date(response.data.dt * 1000),
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        search();
      }

      function handleCityChange(event) {
        setCity(event.target.value);
      }
      function search() {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }
    
      if (weatherData.ready) {
    return(
        <div className="search-app">
        <form className="enter-city" onSubmit={handleSubmit}>
          <div className="row">
         <div className="col-6 p-0">
          <input  
          type="search" 
          placeholder="Enter a city" 
          className="form-control me-auto"
          autoFocus="on"
          onChahge={handleCityChange} />
        </div>
        <div className="col p-0 ms-1">
        <input className="find-city btn btn-primary w-100" type="submit" value="Search" />
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
    search();
    return "Loading...";
  }
}
