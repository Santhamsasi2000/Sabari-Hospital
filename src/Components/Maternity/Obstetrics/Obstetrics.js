import Department from '../../Common/Department';
import { DataObstetrics } from './DataObstetrics';

const Obstetrics = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title'>Obstetrics: Caring for Mothers and Babies</p>
        <p>Obstetrics is a branch of medicine focused on pregnancy, childbirth, and postpartum care. It ensures the health and safety of both mother and baby, providing specialized care throughout the journey from conception to delivery.</p>
        <Department title="Comprehensive Obstetric and Maternity Care Services" data={DataObstetrics}/>
    </section>
  )
}

export default Obstetrics
