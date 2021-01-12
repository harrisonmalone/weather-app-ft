import React, { useState, useEffect } from "react";
import { Temperature } from "./Temperature";
import { WeatherData } from "./WeatherData";
import { WeatherImage } from "./WeatherImage";
import { WeatherWidget } from "../templates/WeatherWidget";
import { SearchInput } from "./SearchInput";

// functional components (with hooks)
// - simple stuff
// - for rendering
// - state

// positives of using react hooks
// - cleaner more readable code
// - end with less code
// - third party tools easier to use with react hooks

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState("Melbourne");

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=207e49535dcc72806118f758b6312595&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          throw new Error("wrong location");
        }
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [query]);

  if (weatherData) {
    const {
      temperature,
      weather_icons,
      weather_descriptions,
    } = weatherData.current;
    const { name, region, localtime } = weatherData.location;
    return (
      <div className="container">
        <WeatherWidget>
          <WeatherData
            observationTime={localtime}
            name={name}
            region={region}
            description={weather_descriptions[0]}
          />
          <WeatherImage icon={weather_icons[0]} />
          <Temperature temperature={temperature} />
        </WeatherWidget>
        <SearchInput setQuery={setQuery} />
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default App;
