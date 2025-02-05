import { NavLink } from 'react-router-dom';
import  './CTA.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CTA = () => {
  return (
    <section className='p-3 p-sm-5 row align-items-center gy-4'>
      <div className='col-lg-6'>
          <LazyLoadImage src="/Images/Home/Home.webp" className='w-100 border border-3 border-success' alt="Home Page - Sabari Hospital - Sivaganga" effect="blur" threshold={200}/>
      </div>
      <div className='col-lg-6 d-flex flex-column align-items-center'>
       <p className='title'>Welcome To Sabari Hospital</p>
       <p className='fw-bold fs-4 text-secondary'>Your Health,Our Priority</p>
       <div className='d-flex flex-column flex-sm-row gap-3 gap-sm-5 mt-1 mt-sm-3'>
         <NavLink to="/contact" className='btn btn-success px-5 py-2'>Book Appointment</NavLink>
         <NavLink to="/about" className='btn btn-secondary px-5 py-2'>Know More</NavLink>
       </div>
      </div>
    </section>
  )
}

export default CTA
