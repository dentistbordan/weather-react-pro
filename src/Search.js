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
        <div className="row">
        <form className="enter-city" onSubmit={handleSubmit} >
          <input id="enter-now"  
          type="Search" 
          placeholder="Enter a city" 
          onChahge={handleCitychange} />
        
        <input className="find-city" id="find-city" type="Submit" value="Search" />
        <input className="find-city" id ="local" type="Submit" value="Local" />
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
