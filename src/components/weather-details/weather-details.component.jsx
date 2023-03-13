import React from 'react';

import './weather-details.styles.scss';

const WetaherDetails = ({
  main,
  temp,
  pressure,
  humidity,
  speed,
  name,
  country,
  sunset,
}) => {
  let date = new Date(sunset * 1000);
  let minutes = date.getMinutes();
  let hours = date.getHours();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  let weatherIcon;
  switch (main) {
    case 'Clouds':
      weatherIcon = 'wi-day-cloudy';
      break;
    case 'Haze':
      weatherIcon = 'wi-fog';
      break;
    case 'Clear':
      weatherIcon = 'wi-day-sunny';
      break;
    case 'Mist':
      weatherIcon = 'wi-dust';
      break;
    case 'Rain':
      weatherIcon = 'wi-day-rain';
      break;

    default:
      weatherIcon = 'wi-day-sunny';
      break;
  }

  const extraInfos = [
    {
      icon: 'wi wi-sunset',
      info: formattedTime,
      infoText: 'sunset',
    },
    {
      icon: 'wi wi-humidity',
      info: humidity,
      infoText: 'humidity',
    },
    {
      icon: 'wi wi-rain',
      info: pressure,
      infoText: 'pressure',
    },
    {
      icon: 'wi wi-strong-wind',
      info: speed,
      infoText: 'speed',
    },
  ];

  return (
    <section className='section widget'>
      <header
        className='widget__header'
        style={{
          background: `url(${process.env.PUBLIC_URL}/images/${main}.jpg) no-repeat center 30% / cover`,
        }}>
        <span>
          <i className={`wi ${weatherIcon}`}></i>
        </span>
      </header>

      <div className='info'>
        <div className='info__description'>
          <h2 className='info__degree'>{temp}&deg;</h2>
          <div className='info__place'>
            <p className='info__weather-condition'>{main}</p>
            <p className='info__country'>
              {name}, {country}
            </p>
          </div>
        </div>

        <div className='info__date'>
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>

      <div className='extra-info'>
        {extraInfos.map((item, i) => {
          const { icon, info, infoText } = item;
          return (
            <article key={i}>
              <header>
                <span>
                  <i className={icon}></i>
                </span>
              </header>
              <h4>
                {info} {infoText === 'sunset' && 'PM'}
              </h4>
              <h5>{infoText}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WetaherDetails;
