import Link  from 'next/link';
import style from './header.module.scss'
import Image from 'next/image'

import back from '../../../media/BackOrange.png';

export default function Header() {
  return (
    <div className={style.HEADER}>
      {/* <Image className={style.back} src={back} alt={""}/> */}
      <div className={style.HeaderText}>VoloLearn - це онлайн платформа, яка дозволяє людям отримувати доступ до навчальних курсів за допомогою волонтерства. </div>

      <div className={style.btnsHeader}>
        <Link href="/"><div className={style.btnHeader}> Подати запит про допомогу </div></Link>
        <Link href="/"><div className={style.btnHeader}> Волонтерити </div></Link>
      </div>
      
      <div className={style.anatiliticBoxs}>
        <div className={style.analiticBox}>
          <div className={style.analiticBoxCount}>40</div>
          <div className={style.analiticBoxName}>Курсів</div>
        </div>

        <div className={style.analiticBox}>
          <div className={style.analiticBoxCount}>128</div>
          <div className={style.analiticBoxName}>Волонтерів</div>
        </div>

        <div className={style.analiticBox}>
          <div className={style.analiticBoxCount}>212</div>
          <div className={style.analiticBoxName}>Курсів</div>
        </div>
      </div>

    </div>
  );
}


