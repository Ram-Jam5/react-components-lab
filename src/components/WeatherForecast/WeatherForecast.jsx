import '/src/components/WeatherForecast/WeatherForecast.css';
const WeatherForecast = (weather) => {
    return (
    <div className="weather">
        <li>
        <h2>{weather.day}</h2>
        <img src="" alt="" />
        <p><span>conditions: </span>{weather.conditions}</p>
        <p><span>time: </span>{weather.time}</p>
        </li>
    </div> 
    )
};

export default WeatherForecast;