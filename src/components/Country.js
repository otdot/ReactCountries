import React from "react";
import classes from "./assets/Country.module.css";
import { Link } from "react-router-dom";

export const Country = ({ name, flag, capital }) => {
  return (
    <div className={classes.Country}>
      <img src={flag} alt={`flag of ${name}`}></img>
      <div className={classes.info}>
        <h1>{name}</h1>
        <h2>{capital}</h2>
        <Link to={`${name}/${capital}`}>more information</Link>
      </div>
    </div>
  );
};
