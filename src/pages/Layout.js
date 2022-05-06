import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
