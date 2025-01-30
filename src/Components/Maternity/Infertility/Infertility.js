import Department from '../../Common/Department';
import { DataInfertility, SudhaInfertility } from './DataInfertility';
const Infertility = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title'>Fertility Center – Helping you build your family</p>
        <p>A Fertility Center is a medical facility that helps individuals and couples overcome fertility challenges to achieve pregnancy. It offers treatments like IVF, IUI, egg freezing, and reproductive health services with expert guidance and advanced technology.</p>
        <Department title="Diagnosis and Treatment of infertility" data={DataInfertility}/>
        <Department title="Collaboration with Sudha Fertility Center,Madurai." data={SudhaInfertility}/>
    </section>
  )
}

export default Infertility
