import React, { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "./Country";

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  console.log(countries);

  return (
    <>
      {countries.map((country) => {
        return (
          <Country
            key={country.name}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
          />
        );
      })}
    </>
  );
};
