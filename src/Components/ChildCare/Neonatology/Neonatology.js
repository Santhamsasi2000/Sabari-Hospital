import Department from '../../Common/Department';
import { DataNeo } from './DataNeo';
const Neonatology = () => {
  return (
    <section className='p-3'>
        <p>Gynaecology: Caring for Mothers and Babies</p>
        <p>Gynaecology is the medical field that focuses on the health of the female reproductive system, including the uterus, ovaries, and vagina. It involves diagnosing and treating conditions like menstrual issues, infertility, pregnancy care, and menopause. Gynaecologists also guide women on general reproductive health and wellness.</p>
        <Department title="Our Services" data={DataNeo}/>
    </section>
  )
}
export default Neonatology
