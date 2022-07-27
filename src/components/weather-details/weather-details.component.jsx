import React, { useState, useEffect } from 'react'

import './weather-details.styles.scss'

const WetaherDetails = ({
  main,
  temp,
  pressure,
  humidity,
  speed,
  name,
  country,
  sunset
}) => {

  const [weatherState, setWeatherState] = useState('')
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`

  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [main]);

  return (
    <article className="widget">
      <div className="weather-icon">
        <i className={`wi ${weatherState}`}></i>
      </div>
  
        <div className="temperature">
          <div className="description">
          
              <span className='degree'>{temp}&deg;</span>
              <div className="place">
                <span className="weather-condition">{main}</span>
                {name}, {country}
              </div>
          </div>
        
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        

      
        <div className="extra-info">
        
          <div className="extra-info-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
              {timeStr} PM <br />
              Sunset
            </p>
          </div>

          <div className="extra-info-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity} <br />
              Humidity
            </p>
          </div>
        

        
          <div className="extra-info-section">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure} <br />
              Pressure
            </p>
          </div>

          <div className="extra-info-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
              {speed} <br />
              Speed
            </p>
          </div>
        
        </div>
      
    </article>
  )
}

export default WetaherDetails