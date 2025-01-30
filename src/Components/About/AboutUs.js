import { LazyLoadImage } from "react-lazy-load-image-component";
import "./About.css";
import Doctors from "./Doctors";

const title1 = "The Best Hospital in Sivaganga";
const title2 = "Our Journey and Achievements";
const para1 = "";
const para2 = "";
const AboutUs = () => {
  return (
    <section>
      <div className='row mb-5 gap-3 gap-md-0'>
      <div className='col-md-6'>
        <LazyLoadImage src="/Images/About/About.webp" effect="blur" threshold={200} alt="No-Image" className="about-img w-100 rounded-3"/>
      </div>
      <div className='col-md-6'>
          <p className='fw-bold fs-4 text-uppercase mt-2 mt-md-0'>{title1}</p>
          <p className='lh-lg justify-text'>At Sabari Hospital, we have been dedicated to providing exceptional healthcare services since our establishment in <span className="fw-semibold">2012</span>. Over the years, we have become a trusted name in Sivaganga, known for our commitment to excellence in patient care and specialized medical treatments.</p>
          <p className='fw-bold fs-4 text-uppercase mt-2 mt-md-0'>{title2}</p>
          <p className='lh-lg justify-text'>Since our inception, Sabari Hospital has proudly celebrated the joy of bringing over <span className="fw-semibold">6,000 healthy deliveries</span> into the world. Our expert team has also successfully treated more than <span className="fw-semibold">20,000 cases</span> of viral and bacterial pneumonia, reflecting our dedication to tackling critical health challenges with precision and compassion.</p>
          <p className='lh-lg justify-text'>For more information or to book an appointment, visit Sabari Hospital in Sivaganga and experience our dedication to your family's health and happiness.</p>
      </div>
      </div>

     <Doctors/>

      <p className="fw-bold fs-5 mt-4 mt-sm-5">Our Specialties:</p>
      <p className="justify-text">We focus on two key areas of medical care to ensure the health and well-being of women and children:</p>
      <ul>
        <li><span className="fw-semibold justify-text">Pediatrics & Neonatology:</span> Comprehensive care for infants, children, and adolescents, including advanced treatment for premature and critically ill newborns.</li>
        <li><span className="fw-semibold justify-text">Gynaecology & Obstetrics: </span> Expert care for women, from routine gynecological consultations to high-risk pregnancies and safe deliveries.</li>
      </ul>

      <p className="fs-5 fw-bold">Why Choose Sabari Hospital?</p>
      <ul>
        <li className="justify-text">Experienced Medical Professionals: Our highly skilled pediatricians, neonatologists, gynecologists, and obstetricians are dedicated to providing top-tier medical care.</li>
        <li className="justify-text">Compassionate Care: We combine medical expertise with a patient-centered approach to ensure every individual feels supported and cared for.</li>
        <li className="justify-text">State-of-the-Art Facilities: Equipped with modern technology and comfortable patient spaces, we create an environment that promotes healing and well-being.</li>
      </ul>

      <p className="fs-5 fw-bold mb-2">Our Commitment:</p>
      <p className="justify-text">At Sabari Hospital, our mission is to deliver personalized healthcare solutions with unwavering care and dedication. We take pride in being a pillar of health for women, children, and families in our community.</p>
    
      <p className="fs-5 fw-bold mb-2">Contact Us:</p>
      <p className="justify-text">For trusted care and medical expertise, Sabari Hospital is here for you. Whether you’re planning for a safe delivery or need expert pediatric care, our doors are always open to serve you.</p>
    </section>
  )
}

export default AboutUs
