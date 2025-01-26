import { NavLink } from "react-router-dom";
import "./NavBar.css";

const title = "Sabari Hospital";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">{title}</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                 <div></div>
              </span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end pe-5 flex-grow-1 d-flex gap-4">

                    {/* Home */}
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                    </li>

                    {/* Child Care */}
                     <li className="nav-item dropdown">
                        <NavLink to="/"  activeClassName="active"  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Child Care
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/pediatrics"  activeClassName="active"  className="dropdown-item">Pediatrics</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                            <li><NavLink to="/neonatology"  activeClassName="active"  className="dropdown-item">Neonatology</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                        </ul>
                    </li>

                    {/* Maternity */}
                    <li className="nav-item dropdown">
                        <NavLink to="/"  activeClassName="active"  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Maternity
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/pregnancy"  activeClassName="active"  className="dropdown-item">Obstetrics</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                            <li><NavLink to="/women-health"  activeClassName="active"  className="dropdown-item">Gynaecology</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                            <li><NavLink to="/laparoscopy"  activeClassName="active"  className="dropdown-item">Laparoscopy</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><NavLink to="/infertility"  activeClassName="active"  className="dropdown-item">Infertility</NavLink></li>
                        </ul>
                    </li>
                    {/* About */}
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" aria-current="page">About</NavLink>
                    </li>
                    {/* Contact */}
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" aria-current="page">Contact</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;