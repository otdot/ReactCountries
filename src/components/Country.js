import React from "react";
import classes from "./assets/Country.module.css";

export const Country = ({ name, flag, capital }) => {
  return (
    <div className={classes.Country}>
      <img src={flag} alt={`flag of ${name}`}></img>
      <h1>{name}</h1>
      <h2>{capital}</h2>
      <p>More information: </p>
    </div>
  );
};
