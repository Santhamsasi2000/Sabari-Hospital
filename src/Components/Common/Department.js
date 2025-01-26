import { LazyLoadImage } from "react-lazy-load-image-component";
const Department = ({title,data}) => {
  return (
     <div className="mt-5">
            <p className='text-success text-center fw-bold fs-5'>{title}</p>
            <div className='row gap-5 justify-content-center'>
             {
                data.map(({id,image,title}) =>
                    <div className='col-sm-4 col-md-3 ' key={id}>
                        <LazyLoadImage src={image} alt={title} className='w-100 border border-success border-2 p-3 rounded-2' effect="blur" threshold={200}/>
                        <div className='card-body'>
                            <p className='card-title fw-bold fs-5 text-center'>{title}</p>
                        </div>
                    </div>
                )
             }
           </div>
     </div>
  )
}

export default Department
