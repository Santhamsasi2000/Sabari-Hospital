import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const place = "96, State Highway 33, 4/106, Justice rajasekaran road, Aranmanai Vaasal, Sivaganga, Tamil Nadu 630561";
const placeUrl = "https://www.google.com/maps?s=web&lqi=ChlzYWJhcmkgaG9zcGl0YWwgc2l2YWdhbmdhSOyI1eHxqoCACFotEAAQARgAGAEYAiIZc2FiYXJpIGhvc3BpdGFsIHNpdmFnYW5nYSoGCAIQABABkgEIaG9zcGl0YWyqAU0KCC9tLzBocG5yEAEyIBABIhyyZjJWDF-ROwNHEfOkh7tpMlSnLsdI9Varqux3Mh0QAiIZc2FiYXJpIGhvc3BpdGFsIHNpdmFnYW5nYQ&vet=12ahUKEwj71q_Yt_yKAxWbs1YBHV54ADgQ1YkKegQILBAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTVinVbF-gA7MSyfq0AxIhSX&daddr=4/106+sabari+hospital+lane+justice+rajasekaran+street.+sivagangai630561";
const email = "sabarihospital@gmail.com";
const mobile1 = "94421 40768";
const mobile2 = "73057 95324";
const FooterContact = () => {
  return (
    <div>
       <p className='footer-title'>Contact Us</p>
         <div className="mb-2 d-flex gap-3 align-items-center">
          <i className="fs-2"><SlLocationPin /></i>
          <a href={placeUrl}
          target="_blank" 
          rel="noopener noreferrer" className="footer-Links text-decoration-none">{place}</a>
         </div>
         <div className="mb-3 d-flex gap-3 align-items-center">
              <i className="fs-2"><IoMailOpenOutline /></i>
              <a href={`mailto:${email}`} className="footer-Links mt-1 text-decoration-none">{email}</a>
         </div>
         <div className="d-flex gap-3 align-items-center">
              <i className="fs-3"><LuPhoneCall /></i>
              <a  href={`tel:${mobile1}`} className="footer-Links ms-sm-2 text-decoration-none">{mobile1}</a>
              <a  href={`tel:${mobile2}`} className="footer-Links ms-sm-2 text-decoration-none">{mobile2}</a>
         </div>
    </div>
  )
}

export default FooterContact
