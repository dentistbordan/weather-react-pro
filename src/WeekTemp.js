import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeekTemp(props){

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return(
        <div className="weeks">
        <div className="day">
        <WeatherForecastDay data={forecast[0]} />
     </div>
        <div className="day">
        <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="day">
        <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="day">
        <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="day">
        <WeatherForecastDay data={forecast[4]} />
        </div>
    </div>
    )
}else {
  let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return null;
}
}

