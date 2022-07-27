import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "./components/weatherCard/WeatherCard.jsx";
import "./App.css";

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
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a21e6be663f565c3ad3f3454f1267f87`
        )
        .then((response) => {
          setData(response.data);
        });
    }
    fetchWeatherData();
  }, [location]);
  console.log(data);

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
