import Department from '../../Common/Department';
import { DataNeo } from './DataNeo';

const title = "Neonatology: Special Care for Newborn Babies";
const subTitle = "Neonatology is a specialized branch of medicine focused on the care and treatment of newborn babies, especially those who are premature, low birth weight, or have medical conditions at birth. Neonatologists work to ensure the health and well-being of newborns in their critical first days of life.";
const Neonatology = () => {
  return (
    <section className='p-3 p-sm-5'>
      <p className='title'>{title}</p>
      <p>{subTitle}</p>
      <Department title="Neonatal Care Services" data={DataNeo}/>
    </section>
  )
}
export default Neonatology