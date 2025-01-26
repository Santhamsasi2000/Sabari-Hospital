import "./ContactUs.css";
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location/Location";
import Direction from "./Direction/Direction";
import Timings from "./Time/Timings";

const ContactUs = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title">Contact us</p>
       <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1">
            <Location />
            <Timings/>
            <Direction/>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <ContactUsForm />
          </div>
       </div>
    </section>
  );
};

export default ContactUs;
