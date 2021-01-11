import React from "react";
import { Temperature } from "./Temperature";
import { WeatherData } from "./WeatherData";
import { WeatherImage } from "./WeatherImage";
import { Container } from "../templates/Container";

// 1. functional component
// 2. class component
  // a. state, data that is related to that specific component
  // b. lifecycle methods, methods that are invoked at certain points in time as the component is rendering, they help set state at the correct times

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

// order of lifecycle execution

// 1. constructor
// 2. render
// 3. conditional rendering, loading h2 is rendered
// 4. DOM updates
// 5. componentDidMount runs
// 6. we fetch from a remote resource, it processes asynchronously
// 7. once we get the response from the remote resource we invoke setState to update state
// 8. whenever you update state (or call setState) render runs again!
// 9. render runs for a second time, because weatherData state is now truthy (it's an object) we go into the first code block and return that jsx
// 10. DOM updates

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

// 1. fetch data from a remote resource, weather api
// 2. once we fetch the data from the weather api we need to set it in state
