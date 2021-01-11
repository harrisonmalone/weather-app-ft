export function WeatherImage(props) {
  return (
    <div className="weather-image">
      <img src={props.icon} alt="partly cloudy" width="40" />
    </div>
  );
}
