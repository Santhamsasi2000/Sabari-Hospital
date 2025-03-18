import { NavLink } from 'react-router-dom';
import { DataExpertise } from './DataExpertise';
import './Expertise.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Expertise = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title'>Expert Departments at Sabari Hospital</p>
        <div className='row justify-content-center gap-5 h-100'>
          {
            DataExpertise.map(({id,image,title,subTitle,link,btnTitle})=>(
            <div className='col-md-5 border border-img border-4 p-0 d-flex flex-column h-100' key={id}>
              <LazyLoadImage src={image} alt={`Sabari Hospital in ${title}.Best Hospital in Sivagnaga`} effect="blur" className='w-100'/>
              <div className='expertise-bg-img p-3'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <p className='text-white fw-bold mb-0 fs-5'>{title}</p>
                    <NavLink to={link} className="btn btn-light" aria-label={`Learn more about ${title} in Sabari Hospital`}>{btnTitle}</NavLink>
                </div>
                <p className='text-white mb-0'>{subTitle}</p>
              </div>
            </div>
            ))
          }
        </div>
    </section>
  )
}

export default Expertise
