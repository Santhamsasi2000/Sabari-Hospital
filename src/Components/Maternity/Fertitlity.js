import Department from '../Common/Department';
import { Hysteroscopic, Maternity, Surgical } from './ListFertitlity';

const Fertitlity = () => {
  return (
   <section className="px-5 px-sm-0 py-3 py-sm-5 department">
       <p className='title'>Obstetrics and Gynaecology</p>    
       <Department title='Maternity Services' data={Maternity}/>
       <Department title="Surgical Procedures" data={Surgical} />
       <Department title="Hysteroscopic Surgeries" data={Hysteroscopic} />
   </section>
  )
}

export default Fertitlity
