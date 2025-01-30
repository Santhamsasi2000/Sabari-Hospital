import Department from '../../Common/Department';
import { DataLap } from './DataLap';

const Laparoscopy = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title'>Laparoscopy: A Simple Guide to Keyhole Surgery</p>
        <p>Laparoscopy is a minimally invasive surgical procedure that uses a small camera (laparoscope) to diagnose and treat conditions inside the abdomen or pelvis. It involves tiny cuts, causing less pain, faster recovery, and minimal scarring compared to traditional surgery.</p>
        <Department title="Common Laparoscopic Surgical Procedures" data={DataLap}/>
    </section>
  )
}

export default Laparoscopy
