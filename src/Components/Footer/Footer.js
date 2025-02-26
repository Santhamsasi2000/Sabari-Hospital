import SocialMedia from './SocialMedia';
import "./Footer.css";
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';
import Time from './Time';

const Footer = () => {
  return (
    <section className='footer mt-1 p-3 p-sm-5 row gy-5 justify-content-between gx-0'>
      <div className='col-md-6 col-xl-3'>
        <SocialMedia/>
       </div>
       <div className='col-md-6 col-xl-3'>
        <Time/>
      </div>
      <div className='col-md-6 col-xl-3'>
         <QuickLinks/>
       </div>
       <div className='col-md-6 col-xl-3'>
         <FooterContact/>
       </div>
       <p className='text-start text-sm-center mt-5'>Developed By <a href='https://pogowebsolutions.com/' target="_blank" 
          rel="noopener noreferrer" className='fw-bold'> POGO WEB SOLUTIONS</a></p>
    </section>
  ) 
}

export default Footer
