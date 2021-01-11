import React from "react";
import { Temperature } from "./Temperature";
import { WeatherData } from "./WeatherData";
import { WeatherImage } from "./WeatherImage";
import { Container } from "../templates/Container";
import melbourneWeather from "../data/melbourne-weather.json";

function App() {
  const { temperature, weather_icons, weather_descriptions } = melbourneWeather.current
  const { name, region, localtime } = melbourneWeather.location

  return (
    <Container>
      <WeatherData
        observationTime={localtime}
        name={name}
        region={region}
        description={weather_descriptions[0]}
      />
      <WeatherImage icon={weather_icons[0]} />
      <Temperature temperature={temperature} />
    </Container>
  );
}

export default App;

// other use cases for props

// 1.
// react router
// generally libraries
// props

// 2.
// templating, children prop

// 3.
// generally passing data between different components

// WeatherData
// - location
// - time of weather recorded
// - description of weather
// WeatherImage
// - icon of the kind of weather thats occurring
// Temperature
// - celsius

// write css in react
// 1. use SASS
// 2. use CSS modules
// 3. styled components

// todos

// 1. breaking up my code into separate components
// 2. introduce a weather api, static json file of data
// 3. pass the data through as props to our components
