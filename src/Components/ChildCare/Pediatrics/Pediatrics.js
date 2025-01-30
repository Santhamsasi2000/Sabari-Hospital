import Department from '../../Common/Department';
import { DataPedi } from './DataPedi';
import { SurgeryData } from './SurgeryData';

const image = "/Images/Home/Expertise/Obstetrics.webp";
const Pediatrics = () => {
  return (
    <section className='p-3 p-sm-5'>
      <p className='title mb-1'>Pediatrics: The Medical Care of Babies, Children, and Teenagers</p>
      <p>Pediatrics is a branch of medicine focused on the health and well-being of children, from newborns to teenagers. Pediatricians specialize in diagnosing, treating, and preventing illnesses in kids, ensuring their physical, emotional, and developmental growth is on track.</p>
      <Department title="General Pediatrics" data={DataPedi}/>
      <Department title="Pediatric Surgery - Minor and Major" data={SurgeryData}/>
    </section>
     
  )
}


export default Pediatrics
