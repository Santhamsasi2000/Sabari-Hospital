import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Facilities from "./Components/About/Facilities/Facilities";
import ContactUs from "./Components/ContactUs/ContactUs";
import Location from "./Components/ContactUs/Location/Location";
import Infertility from "./Components/Maternity/Infertility/Infertility";
import Gynaecology from "./Components/Maternity/Gynaecology/Gynaecology";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop/>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
