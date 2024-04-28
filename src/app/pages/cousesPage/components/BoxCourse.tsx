import style from '../courses.module.scss'
import Image from 'next/image'

import SharkLogo from '../../../media/SharkLogo.png'

export default function BoxCourse() {
  return (

          <div className={style.BoxCourse}> 
              <div className={style.costBox}>8000 <br></br> очків</div>
              <div className={style.infoCourse}>
                <div className={style.logoCompany}><Image src={SharkLogo} alt={''} /></div>
                <div className={style.nameCompany}>Shark Crypto</div>
                <div className={style.descriptionCompany}> fjskfgj gjd fkgjdfkg jdflgjdf ldfjglk dfjl jdf lg df</div>
                <div className={style.btnMore}> Більше інформації</div>
              </div>
           </div>
  );
}


