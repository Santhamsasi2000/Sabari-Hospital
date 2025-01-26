import { NavLink } from 'react-router-dom';
const QuickLinks = () => {
  return (
     <div>
        <div className='d-flex flex-column align-items-start'>
            <p className='footer-title'>Quick Links</p>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/">Home</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/about">About Us</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/child">Paediatrics</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/maternity">Obstetrics and Gynaecology</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/contact">Contact Us</NavLink>
        </div>
    </div>
  )
}

export default QuickLinks
