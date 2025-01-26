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
import NavBar3 from "./Components/NavBar/NavBar";
import Obstetrics from "./Components/Maternity/Obstetrics/Obstetrics";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
