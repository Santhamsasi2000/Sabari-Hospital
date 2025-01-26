import AboutUs from "./AboutUs"
import Doctors from "./Doctors"

const About = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
      <p className="title mb-4 mb-md-5">About Us</p>
      <AboutUs/>
      <Doctors/>
    </section>
  )
}

export default About
