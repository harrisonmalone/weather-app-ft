# Weather App

## Types of components
1. functional component
2. class component
  a. state, data that is related to that specific component
  b. lifecycle methods, methods that are invoked at certain points in time as the component is rendering, they help set state at the correct times

## Order of lifecycle execution

1. constructor
2. render
3. conditional rendering, loading h2 is rendered
4. DOM updates
5. componentDidMount runs
6. we fetch from a remote resource, it processes asynchronously
7. once we get the response from the remote resource we invoke setState to update state
8. whenever you update state (or call setState) render runs again!
9. render runs for a second time, because weatherData state is now truthy (it's an object) we go into the first code block and return that jsx
10. DOM updates

## Other use cases for props

1.
react router
generally libraries
props

2.
templating, children prop

3.
generally passing data between different components

## Components used 

WeatherData
- location
- time of weather recorded
- description of weather
WeatherImage
- icon of the kind of weather thats occurring
Temperature
- celsius

## Options for writing css in react
1. use SASS
2. use CSS modules
3. styled components
