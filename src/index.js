import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Child from "./Components/ChildCare/Child";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import Expertise from "./Components/Home/Expertise/Expertise";
import Why from "./Components/Home/Why/Why";
import Timings from "./Components/ContactUs/Time/Timings";
import AboutUs from "./Components/About/AboutUs";
import Obstetrics from "./Components/Maternity/Obstetrics/Obstetrics";
import NavBar from "./Components/NavBar/NavBar";
import Pediatrics from "./Components/ChildCare/Pediatrics/Pediatrics";
import Neonatology from "./Components/ChildCare/Neonatology/Neonatology";
import Laparoscopy from "./Components/Maternity/Laparoscopy/Laparoscopy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Laparoscopy/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
