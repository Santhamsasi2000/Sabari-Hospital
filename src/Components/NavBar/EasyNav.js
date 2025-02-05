import { NavLink } from "react-router-dom";
import "./EasyNav.css";

const navbarTitle = "Sabari Hospital";
const closeNavbar = () => {
  const navbar = document.querySelector(".navbar-collapse");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};

const EasyNav = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3 px-sm-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand title" to="/">
          {navbarTitle}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex gap-lg-4">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>

            {/* Child Care */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Child Care
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/pediatrics" onClick={closeNavbar}>
                    Pediatrics
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/neonatology" onClick={closeNavbar}>
                    Neonatology
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Maternity */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Maternity
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/pregnancy" onClick={closeNavbar}>
                    Pregnancy
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/women-health" onClick={closeNavbar}>
                    Gynaecology
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/laparoscopy" onClick={closeNavbar}>
                    Laparoscopy
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/infertility" onClick={closeNavbar}>
                    Infertility
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/about" onClick={closeNavbar}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/facilities" onClick={closeNavbar}>
                    Facilities
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/patient-reviews" onClick={closeNavbar}>
                    Patient Testimonial
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EasyNav;
