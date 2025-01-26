import "./Emergency.css";
import { MdCall } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
const Emergency = () => {
  const mobile = "9442140768";
  return (
    <div className="d-flex gap-4 justify-content-center align-items-center py-2">
       <p className="mb-0 text-danger">Medical Emergency <BiRightArrowAlt /></p>
       <div className="d-flex gap-2 align-items-center">
              <i className="fs-4 emergency-color"><MdCall /></i>
              <a href={`tel:${mobile}`} className="fw-semibold text-decoration-none emergency-color">{mobile}</a>
       </div>
    </div>
  )
}

export default Emergency
