import React from "react";
import classes from "./assets/Header.module.css";
import { Link } from "react-router-dom";

export const Header = ({ change }) => {
  return (
    <header className={classes.Header}>
      <Link to="/">All Countries</Link>

      <form>
        <label>Search for Country</label>
        <input onChange={change} className="searchTerm"></input>
      </form>
    </header>
  );
};
