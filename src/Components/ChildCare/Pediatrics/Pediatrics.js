import { LazyLoadImage } from 'react-lazy-load-image-component';
import Department from '../../Common/Department';
import { DataPedi } from './DataPedi';
import { SurgeryData } from './SurgeryData';

const image = "/Images/Home/Expertise/Obstetrics.webp";
const Pediatrics = () => {
  return (
    <section className='p-3'>
      <div className='row'>
        <div className='col-6'>
          <LazyLoadImage src={image} alt="Sabari Hospital is best pediatrics in Sivaganga" className='w-100 border border-success border-2 p-3 rounded-2' effect="blur" threshold={200}/>
        </div>
        <div className='col-6'>
          <p>Pediatrics: The Medical Care of Babies, Children, and Teenagers</p>
          <p>Pediatrics is a branch of medicine focused on the health and well-being of children, from newborns to teenagers. Pediatricians specialize in diagnosing, treating, and preventing illnesses in kids, ensuring their physical, emotional, and developmental growth is on track.</p>
        </div>
      </div>
        <Department title="General Pediatrics" data={DataPedi}/>
        <Department title="Pediatric Surgery - Minor and Major" data={SurgeryData}/>
    </section>
     
  )
}


export default Pediatrics
