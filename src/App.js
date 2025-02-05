import { Route, Routes } from "react-router-dom";
// Blur Effect
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
// Blur Image
import "react-lazy-load-image-component/src/effects/blur.css";
import Emergency from "./Components/Header/Emergency";
import Obstetrics from "./Components/Maternity/Obstetrics/Obstetrics";
import Gynaecology from "./Components/Maternity/Gynaecology/Gynaecology";
import Laparoscopy from "./Components/Maternity/Laparoscopy/Laparoscopy";
import Infertility from "./Components/Maternity/Infertility/Infertility";
import Pediatrics from "./Components/ChildCare/Pediatrics/Pediatrics";
import Neonatology from "./Components/ChildCare/Neonatology/Neonatology";
import Facilities from "./Components/About/Facilities/Facilities";
import EasyNav from "./Components/NavBar/EasyNav";
import About from "./Components/About/AboutUs/About";
import Testimonial from "./Components/About/Testimonials/Testimonial";


function App() {
  return (
    <>
      <Emergency/>
      <EasyNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Child */}
        <Route path="/pediatrics" element={<Pediatrics/>} />
        <Route path="/neonatology" element={<Neonatology/>} />

        {/* Maternity */}
        <Route path="/pregnancy" element={<Obstetrics/>} />
        <Route path="/women-health" element={<Gynaecology/>} />
        <Route path="/laparoscopy" element={<Laparoscopy/>} />
        <Route path="/infertility" element={<Infertility/>} />

        {/* About */}
        <Route path="/about" element={<About/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/patient-reviews" element={<Testimonial/>} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
