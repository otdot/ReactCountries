import axios from "axios";
import "dotenv/config";
import React, { useState, useEffect } from "react";
import classes from "./assets/SingleCountry.module.css";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SingleCountry = () => {
  const [weather, setWeather] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const capital = useParams().capital;
  const country = useParams().country;
  const api_key = process.env.WEATHER_API_KEY;

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}
        `
      )
      .then((res) => {
        setWeather(res.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header />
      <div className={classes.SingleCountry}>
        <div>
          <h1>{country}</h1>
          <h2>{capital} weather: </h2>
          <div>
            <p>Temperature: {(weather.main?.temp - 273.15).toFixed(1)}°C</p>
            <p>Visibility: {weather?.visibility / 1000}km </p>
            <p>Wind: {weather?.wind?.speed}m/s</p>
            <p>Weather: {weather.weather?.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
