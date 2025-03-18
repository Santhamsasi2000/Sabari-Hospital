import { DataWhy } from './DataWhy';
import './Why.css';

const Why = () => {
  return (
    <section className='p-3 p-sm-5'>
       <p className='title'>Why Sabari Hospital ?</p>
       <div className='row gy-4'>
          {
           DataWhy.map(({id,numbers,title})=>(
                 <div className='col-sm-6 col-lg-3' key={id}>
                     <div className='card text-center expertise-bg-img'>
                         <div className='card-body text-white'>
                             <h5 className='card-title fw-bold'>{numbers}</h5>
                             <p className='card-text fw-semibold'>{title}</p>
                         </div>
                     </div>
                 </div>
  
           ))
          }
       </div>
    </section>
  )
}

export default Why
