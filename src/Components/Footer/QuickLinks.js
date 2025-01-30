import { NavLink } from 'react-router-dom';
const QuickLinks = () => {
  return (
     <div>
        <div className='d-flex flex-column align-items-start'>
            <p className='footer-title'>Quick Links</p>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/about">About Us</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/pediatrics">Paediatrics</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/neonatology">Neonatology</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/pregnancy">Obstetrics</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/women-health">Gynaecology</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/laparoscopy">Laparoscopy</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/infertility">Fertility Center</NavLink>
        </div>
    </div>
  )
}

export default QuickLinks
