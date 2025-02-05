import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataTesti } from "./DataTesti";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <section className="p-3 p-sm-5">
       <p className="title">What Our Patients Say</p>
       <p className="text-center">These testimonials are heartfelt words from our patients, shared in their own handwriting.</p>
       <div className="row gy-4">
        {
          DataTesti.map(({id,image})=>(
            <div className="col-md-6" key={id}>
               <LazyLoadImage src={image} className="w-100 border border-2 border-success" alt="Best Hospital in Sivagangai - Sabari Hospital - Children and Maternity Hospital"  effect="blur" threshold={200}/>
            </div>
          ))
        }
       </div>
    </section>
  )
}

export default Testimonial
