import React, { useState, useEffect } from 'react';
import FormSection from './components/form-section/form-section.component';
import WetaherDetails from './components/weather-details/weather-details.component';

function App() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('Ciudad de Mexico');

  const handleQuery = (term) => {
    setQuery(term);
  };

  const fetchData = async () => {
    try {
      const apiKey = '91bc0415490fcdd798928cf7d8e25c26';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

      const data = await fetch(url);
      const response = await data.json();

      const { temp, humidity, pressure } = response.main;
      const { main } = response.weather[0];
      const { name } = response;
      const { speed } = response.wind;
      const { country, sunset } = response.sys;

      const weatherInfo = {
        main,
        temp,
        pressure,
        humidity,
        speed,
        name,
        country,
        sunset,
      };

      setWeather(weatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <main className='main'>
      <FormSection handleQuery={handleQuery} />
      <WetaherDetails {...weather} />
    </main>
  );
}

export default App;
