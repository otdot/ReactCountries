import React from "react";
// import { Outlet } from "react-router-dom";
import classes from "./assets/Main.module.css";
import { Countries } from "./Countries";

export const Main = ({ searchTerm }) => {
  return (
    <main className={classes.Main}>
      <Countries searchTerm={searchTerm} />
    </main>
  );
};
