import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "./components/weatherCard/WeatherCard.jsx";
import "./App.css";
const apiKey = process.env.REACT_APP_WEATHER_API;

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("ludhiana");

  const searchedText = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    async function fetchWeatherData() {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
        )
        .then((response) => {
          setData(response.data);
        });
    }
    fetchWeatherData();
  }, [location]);

  return (
    <div className="App">
      <div className="search">
        <form>
          <input
            type="search"
            name="location"
            placeholder="Enter the location"
            onChange={searchedText}
          />
        </form>
      </div>
      <WeatherCard data={data} />
    </div>
  );
};

export default App;
