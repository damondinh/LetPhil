// Card Component -> Creates card display a single day's weather forecast
function Card({weatherText, icon, temp, date}) {
  return (
    <>
      <div className="flex-col">
        <h2>{convertDateToDay(date)}</h2>
        <h3>{weatherText}</h3>
        <img src = {`https://openweathermap.org/payload/api/media/file/${icon}.png`}/>
        <h2>{temp}°C</h2>
      </div>
    </>
  );
}

// convertDateToDay() -> converts date string (eg.YY-MM-DD) to day string (Monday)
function convertDateToDay(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// WeatherCard Component -> Creates cards to display a 5 day weather forecast
export const WeatherForecast = ({weatherData}) => {
  return (
    <>
      <h1>{weatherData?.city}</h1>
      {weatherData && (
        <div className="flex justify-center gap-4">
          {weatherData.forecast.map((data, index) => (
            <Card key={data.date + index} weatherText={data.weatherText} icon={data.icon} temp={data.temp} date={data.date} />
          ))}
        </div>
      )}
    </>
  );
}