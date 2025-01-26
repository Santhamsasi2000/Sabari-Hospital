import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const whatsapp = "919788622000";
const linkedin = "https://www.linkedin.com/in/jim-divakar-75911a173/?originalSubdomain=in";
const SocialMedia = () => {
  return (
    <div>
       <p className='footer-title'>Follow Us</p>
       <p className='fw-semibold'>Get Involved with Online</p>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'
          target='_blank'  rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' 
           target='_blank'  rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'
          target='_blank' rel='noopener noreferrer'> <FaYoutube /></a>
        </div>
      </div>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href={`https://wa.me/${whatsapp}`}
          target='_blank'  rel="noopener noreferrer"><SiWhatsapp /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href={linkedin}
           target='_blank'  rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'  href='https://www.youtube.com/@shanthiranimatrichr.sec.sc9160/featured'
          target='_blank' rel='noopener noreferrer'><FaXTwitter /></a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
