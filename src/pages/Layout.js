import React, { useState } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import classes from "../components/assets/Layout.module.css";

export const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header change={(e) => handleInput(e)} />
      <p className={classes.watermark}>Made by Otto</p>
      <Main searchTerm={searchTerm} />
      <Footer />
    </>
  );
};
