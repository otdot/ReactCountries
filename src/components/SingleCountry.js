import axios from "axios";
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

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=9f8e44fdfb46f9dcdb4e14cfe6b161f8
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
