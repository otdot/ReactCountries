import React from "react";
import classes from "./assets/Header.module.css";

export const Header = () => {
  return (
    <header className={classes.Header}>
      <h1>All Countries</h1>
      <ul>
        <li>
          <input className="searchTerm"></input>
        </li>
      </ul>
    </header>
  );
};
