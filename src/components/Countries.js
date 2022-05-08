import React, { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "./Country";

export const Countries = ({ searchTerm }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {countries
        .filter((country) => {
          if (searchTerm === "") {
            return country;
          } else if (
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country) => {
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
