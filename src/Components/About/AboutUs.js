import { LazyLoadImage } from "react-lazy-load-image-component";
import "./About.css";

const title1 = "The Best Hospital in Sivaganga";
const title2 = "Our Journey and Achievements";
const para1 = "At Sabari Hospital, we have been dedicated to providing exceptional healthcare services since our establishment in 2012. Over the years, we have become a trusted name in Sivaganga, known for our commitment to excellence in patient care and specialized medical treatments.";
const para2 = "Since our inception, Sabari Hospital has proudly celebrated the joy of bringing over 6,000 healthy deliveries into the world. Our expert team has also successfully treated more than 20,000 cases of viral and bacterial pneumonia, reflecting our dedication to tackling critical health challenges with precision and compassion.";
const AboutUs = () => {
  return (
    <section>
      <div className='row mb-5 gap-3 gap-md-0'>
      <div className='col-md-6'>
        <LazyLoadImage src="/Images/About/About.webp" effect="blur" threshold={200} alt="No-Image" className="about-img w-100 rounded-3"/>
      </div>
      <div className='col-md-6'>
          <p className='fw-bold fs-4 text-uppercase mt-2 mt-md-0'>{title1}</p>
          <p className='lh-lg'>{para1}</p>
          <p className='fw-bold fs-4 text-uppercase mt-2 mt-md-0'>{title2}</p>
          <p className='lh-lg'>{para2}</p>
          <p className='lh-lg'>For more information or to book an appointment, visit Sabari Hospital in Sivaganga and experience our dedication to your family's health and happiness.</p>
      </div>
      </div>
      <p>Our Specialties</p>
      <p>We focus on two key areas of medical care to ensure the health and well-being of women and children:</p>
      <ul>
        <li>Pediatrics & Neonatology: Comprehensive care for infants, children, and adolescents, including advanced treatment for premature and critically ill newborns.</li>
        <li>Gynaecology & Obstetrics: Expert care for women, from routine gynecological consultations to high-risk pregnancies and safe deliveries.</li>
      </ul>

      <p>Why Choose Sabari Hospital?</p>
      <ul>
        <li>Experienced Medical Professionals: Our highly skilled pediatricians, neonatologists, gynecologists, and obstetricians are dedicated to providing top-tier medical care.</li>
        <li>Compassionate Care: We combine medical expertise with a patient-centered approach to ensure every individual feels supported and cared for.</li>
        <li>State-of-the-Art Facilities: Equipped with modern technology and comfortable patient spaces, we create an environment that promotes healing and well-being.</li>
      </ul>

      <p>Our Commitment</p>
      <p>At Sabari Hospital, our mission is to deliver personalized healthcare solutions with unwavering care and dedication. We take pride in being a pillar of health for women, children, and families in our community.</p>
    
      <p>Contact Us</p>
      <p>For trusted care and medical expertise, Sabari Hospital is here for you. Whether you’re planning for a safe delivery or need expert pediatric care, our doors are always open to serve you.</p>
    </section>
  )
}

export default AboutUs
