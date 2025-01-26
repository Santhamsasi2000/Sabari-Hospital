import { LazyLoadImage } from "react-lazy-load-image-component"
import { DoctorList } from "./DoctorList"

const Doctors = () => {
  return (
     <>
       <p className="text-center fs-1 fw-bold mb-4">Meet Our Specialized Doctors</p>
       <div className="d-flex flex-column flex-sm-row gap-5 justify-content-center align-items-center">
        {
            DoctorList.map(({id,image,name,degree,speaclist,position})=>(
                <div className="card shadow doctors-list rounded-4 p-3 border-success border-2"  key={id}>
                <LazyLoadImage
                    src={image}
                    alt="No-image"
                    className="w-100 object-fit-cover" effect="blur" threshold={200}/>
                    <p className="fw-semibold fs-5 text-center mt-3 mb-1 text-success">{name}</p>
                    <p className="fw-semibold text-center mb-1">{degree}</p>
                    <p className="fw-semibold text-center mb-1">{speaclist}</p>
                    <p className="fw-semibold text-center mb-1">{position}</p>
                </div>
            ))
        }
       </div>
    </>
  )
}

export default Doctors
