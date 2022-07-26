import React, {useState} from 'react';
import SearchMain from './components/search-main/search-main';
import './App.scss';

function App() {
  const [weather, setWeather] = useState([])

  const fetchData = async (searchTerm) => {
    const apiKey = '91bc0415490fcdd798928cf7d8e25c26'

    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`);
      const response = await data.json();
      setWeather(response)
    } catch (error) {
      console.log(error);
    }

  }

  console.log(weather);
  
  return (
    <div className="App">
      <SearchMain fetchData={fetchData} />
    </div>
  );
}

export default App;
