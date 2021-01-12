import { Component } from "react";
import { Temperature } from "./Temperature";
import { WeatherData } from "./WeatherData";
import { WeatherImage } from "./WeatherImage";
import { WeatherWidget } from "../templates/WeatherWidget";
import { SearchInput } from "./SearchInput";

class App extends Component {
  state = {
    weatherData: null,
    query: "Melbourne"
  };

  async componentDidMount() {
    // fetch remote resources
    // get data from an api
    this.fetchLatestWeather()
  }

  setQuery = (query) => {
    // because setState is async when we call fetchLatestWeather
    // we need query to be the new query that comes from the search input
    // one way to ensure this is the case is to use the callback notation
    // that comes with setState
    this.setState({
      query: query
    }, () => {
      this.fetchLatestWeather();
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.query !== prevState.query) {
  //     this.fetchLatestWeather()
  //   }
  // }

  fetchLatestWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=207e49535dcc72806118f758b6312595&query=${this.state.query}`
      );
      const data = await response.json();
      this.setState({
        weatherData: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state)
    const { weatherData } = this.state;
    if (weatherData) {
      const {
        temperature,
        weather_icons,
        weather_descriptions,
      } = this.state.weatherData.current;
      const { name, region, localtime } = this.state.weatherData.location;
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
          <SearchInput setQuery={this.setQuery} />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default App;
