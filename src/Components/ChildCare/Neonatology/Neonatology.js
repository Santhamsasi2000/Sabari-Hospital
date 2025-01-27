import { LazyLoadImage } from 'react-lazy-load-image-component';
import Department from '../../Common/Department';
import { DataNeo } from './DataNeo';

const image = "/Images/Home/Expertise/Neonatologist.webp";
const title = "Neonatology: Special Care for Newborn Babies";
const subTitle = "Neonatology is a specialized branch of medicine focused on the care and treatment of newborn babies, especially those who are premature, low birth weight, or have medical conditions at birth. Neonatologists work to ensure the health and well-being of newborns in their critical first days of life.";
const Neonatology = () => {
  return (
    <section className='p-3'>
      <div className='row'>
        <div className='col-6'>
          <LazyLoadImage src={image} alt="Sabari Hospital is best neonatology in Sivaganga" className='w-100 border border-success border-2 p-3 rounded-2' effect="blur" threshold={200}/>
        </div>
        <div className='col-6'>
          <p>{title}</p>
          <p>{subTitle}</p>
        </div>
      </div>
      <Department title="Our Services" data={DataNeo}/>
    </section>
  )
}
export default Neonatology
