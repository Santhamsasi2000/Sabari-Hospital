import "./Location.css";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const name = "Sabari Hospital"
const place = "96, State Highway 33, 4/106, Justice rajasekaran road, Aranmanai Vaasal, Sivaganga, Tamil Nadu 630561";
const placeUrl = "https://www.google.com/maps?s=web&lqi=ChlzYWJhcmkgaG9zcGl0YWwgc2l2YWdhbmdhSOyI1eHxqoCACFotEAAQARgAGAEYAiIZc2FiYXJpIGhvc3BpdGFsIHNpdmFnYW5nYSoGCAIQABABkgEIaG9zcGl0YWyqAU0KCC9tLzBocG5yEAEyIBABIhyyZjJWDF-ROwNHEfOkh7tpMlSnLsdI9Varqux3Mh0QAiIZc2FiYXJpIGhvc3BpdGFsIHNpdmFnYW5nYQ&vet=12ahUKEwj71q_Yt_yKAxWbs1YBHV54ADgQ1YkKegQILBAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTVinVbF-gA7MSyfq0AxIhSX&daddr=4/106+sabari+hospital+lane+justice+rajasekaran+street.+sivagangai630561";
const email = "sabarihospital@gmail.com";
const mobiles = [
  {
    mobile:"04575 245 431"
  },
]
const Location = () => {
  return (
    <section className="mb-5">
        <div className="">
          <p className="fw-bold fs-4 mb-4 text-success">{name}</p>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-success bg-success bg-opacity-10 p-3 rounded">
              <SlLocationPin />
            </i>
            <a
               href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="email text-decoration-none text-secondary lh-lg fw-semibold"
            > {place}
            </a>
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-success bg-success bg-opacity-10 p-3 rounded">
              <IoMailOpenOutline />
            </i>
            <a
              href={`mailto:${email}`}
              className="email text-secondary text-decoration-none fw-semibold"
            >
             {email}
            </a>
          </div>
          <div className="d-flex gap-3 align-items-center mb-4">
            {
              mobiles.map(({mobile})=>(
                <>
                 <i className="fs-3 border border-0 text-success bg-success bg-opacity-10 p-3 rounded">
              <LuPhoneCall />
            </i>
            <a
              href={`tel:${mobile}`}
              className="email text-secondary text-decoration-none fw-semibold"
            >
              {mobile}
            </a>
                </>
              ))
            }
          </div>
        </div>
    </section>
  );
};

export default Location;
