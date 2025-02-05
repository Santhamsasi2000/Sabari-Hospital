import { LazyLoadImage } from "react-lazy-load-image-component"
import { DataFaci } from "./DataFaci";
import "./Facilities.css";

const Facilities = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title mb-4'>Facilities and Services</p>
         <div className='row gap-5 justify-content-center'>
                     {
                        DataFaci.map(({id,image,title,subTitle}) =>
                            <div className='col-sm-5 col-lg-3 border border-success border-2 p-3 rounded-2' key={id}>
                                <LazyLoadImage src={image} alt={title} className='w-100 mb-2 height-img' effect="blur" threshold={200}/>
                                <div className='card-body'>
                                    <p className='card-title fw-bold fs-5 text-center mb-2'>{title}</p>
                                    <p className="mb-0 text-center">{subTitle}</p>
                                </div>
                            </div>
                        )
                     }
                   </div>
    </section>
  )
}

export default Facilities
