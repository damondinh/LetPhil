import { useState } from 'react'
import axios from 'axios'
import { WeatherForecast } from './components/WeatherCard.jsx';
import './App.css'

function App() {

  // Weather API
  const key = 'd2a20a6e03c7f3a3c3abf70b9dbb284a';
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('perth');

  const getWeatherData = async () => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`);
      console.log(data);

      // Parsing Data
      let fiveDayForecast = [];

      // Getting weather text (rainy,cloudy, etc), icon, temperate, day
      for(let i = 0; i < 40; i+= 8) {
        let weatherText = data?.list?.[i]?.weather?.[0]?.main;
        let icon = data.list?.[i]?.weather?.[0]?.icon;
        let temp = data.list?.[i]?.main?.temp;
        let date = data.list?.[i]?.dt_txt.split(" ")[0];

        fiveDayForecast.push({weatherText, icon, temp, date}); // pushes date object to array
      }

      // Setting weatherData to parsed data
      const cityWeatherData = {city:data?.city?.name, forecast:fiveDayForecast};
      setWeatherData(cityWeatherData);
      console.log(cityWeatherData);
    } catch (error) {
      console.error('Error fetching weather api:', error);
    }
  }

  return (
    <>
    <h1>Open Weather Map API</h1>
      <div>
        <input className="border rounded-lg mr-4 px-2" value={city} type='text' placeholder='Enter city name' onChange={(event) => setCity(event.target.value)}/>
        <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-500 transition duration-100" onClick={getWeatherData}>Get Weather Data</button>
      </div>

      <WeatherForecast weatherData={weatherData}/>
    </>
  )
}

export default App
