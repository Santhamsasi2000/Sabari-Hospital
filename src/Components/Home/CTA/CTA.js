import { NavLink } from 'react-router-dom';
import  './CTA.css';

const CTA = () => {
  return (
    <section className='p-3 p-sm-5 d-flex flex-column align-items-center'>
      <p className='cta-title text-center'>Welcome To Sabari Hospital</p>
       <p className='fw-bold fs-2 text-secondary'>Your Health,Our Priority</p>
       <div className='d-flex flex-column flex-sm-row gap-3 gap-sm-5 mt-1 mt-sm-3'>
        <NavLink to="/contact" className='btn btn-success px-5 py-2'>Book Appointment</NavLink>
        <NavLink to="/about" className='btn btn-secondary px-5 py-2'>Know More</NavLink>
       </div>
    </section>
  )
}

export default CTA
