import React from "react";
import { Countries } from "./Countries";
import classes from "./assets/Main.module.css";

export const Main = () => {
  return (
    <main className={classes.Main}>
      <Countries />
    </main>
  );
};
