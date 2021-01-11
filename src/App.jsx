import React from "react";
import partlyCloudy from "./partly_cloudy.png";

function App() {
  return (
    <div
      className="container"
    >
      <div className="weather-data">
        <h3>Melbourne, VIC</h3>
        <h5>Monday 10:00 am</h5>
        <p>Partly cloudy</p>
      </div>
      <div className="weather-image">
        <img src={partlyCloudy} alt="partly cloudy" />
      </div>
      <div className="temperature">
        <h1>32 degrees</h1>
      </div>
    </div>
  );
}

export default App;

// WeatherData
// - location
// - time of weather recorded
// - description of weather
// WeatherImage
// - icon of the kind of weather thats occuring
// Temperature
// - celsius

// write css in react
// 1. use SASS
// 2. use CSS modules
// 3. styled components 