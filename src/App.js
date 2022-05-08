import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { SingleCountry } from "./components/SingleCountry";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/:country/:capital" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
