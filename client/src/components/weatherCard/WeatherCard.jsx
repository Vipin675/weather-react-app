import React from "react";
import "./weatherCard.css";

const WeatherCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{props.data.name}</p>
          </div>
          <div className="temp">
            {props.data.main ? (
              <h1>{props.data.main.temp.toFixed()}°F</h1>
            ) : null}
          </div>
          <div className="description">
            {props.data.weather ? <p>{props.data.weather[0].main}</p> : null}
          </div>
        </div>

        {props.data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {props.data.main ? (
                <p className="bold">{props.data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {props.data.main ? (
                <p className="bold">{props.data.main.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {props.data.wind ? (
                <p className="bold">{props.data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
