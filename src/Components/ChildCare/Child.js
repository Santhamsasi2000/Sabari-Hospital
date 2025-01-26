import { ListChild} from './ListChild';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Child = () => {
  return (
   <section className="px-5 px-sm-0 py-3 py-sm-5 department">
       <p className='title'>Paediatric And Child Care</p>    
      <div className='row gap-5 justify-content-center'>
        {
          ListChild.map(({id,image,title}) =>
              <div className='col-sm-4 col-md-3 border border-success border-2 p-3 rounded-2' key={id}>
                  <LazyLoadImage src={image} alt={title} className='w-100' effect="blur" threshold={200}/>
                  <div className='card-body'>
                      <p className='card-title fw-bold fs-5 text-center'>{title}</p>
                  </div>
              </div>
          )
        }
      </div>
   </section>
  )
}

export default Child
