import React from "react";
import { Temperature } from "./Temperature";
import { WeatherData } from "./WeatherData";
import { WeatherImage } from "./WeatherImage";
import { Container } from "../templates/Container";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: null
    }
  }

  async componentDidMount() {
    // fetch remote resources
    // get data from an api
    try {
      const response = await fetch("http://api.weatherstack.com/current?access_key=207e49535dcc72806118f758b6312595&query=Melbourne")
      const data = await response.json()
      this.setState({
        weatherData: data
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    console.log("here 2")
    const { weatherData } = this.state
    if (weatherData) {
      const { temperature, weather_icons, weather_descriptions } = this.state.weatherData.current
      const { name, region, localtime } = this.state.weatherData.location
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
    } else {
      return (
        <h2>Loading...</h2>
      )
    }
  }
}

export default App;
