import moment from 'moment'

export function WeatherData(props) {
  const dateTime = moment(props.observationTime).format('MMMM Do YYYY, h:mm:ss a');
  return (
    <div className="weather-data">
      <h3>{props.name}, {props.region}</h3>
      <h5>{dateTime}</h5>
      <p>{props.description}</p>
    </div>
  );
}
