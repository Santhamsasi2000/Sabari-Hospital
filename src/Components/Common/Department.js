import { LazyLoadImage } from "react-lazy-load-image-component";
const Department = ({title,data}) => {
  return (
     <div className="mt-4">
            <div className='row gap-5 justify-content-center gx-0'>
             {
                data.map(({id,image,title,subTitle}) =>
                    <div className='col-sm-4 col-md-3 treatments-border' key={id}>
                        <LazyLoadImage src={image} alt={title} className='w-100 mb-2' effect="blur" threshold={200}/>
                        <div className='card-body'>
                            <p className='card-title fw-bold fs-5 text-center'>{title}</p>
                            <p className="mb-0">{subTitle}</p>
                        </div>
                    </div>
                )
             }
           </div>
     </div>
  )
}

export default Department
