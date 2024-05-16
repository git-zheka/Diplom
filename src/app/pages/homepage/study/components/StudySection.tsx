import Link from 'next/link';
import style from './study.module.scss'
import Image from 'next/image'
import TopicBox from './boxStudy/TopicBox';

//import style from './main.module.scss';

import Arrow from '../../../../media/studySection/Arrow.png'
import Btc from '../../../../media/studySection/BTC.svg'

export default function StudySection() {
  return (
    <div className={style.STUDY}>
      <div className={style.sectionStudy}>
        <div className={style.H2}><h2>Сфери навчання</h2></div>
        <div className={style.btnAllCurses}><Link href="../../../../pages/cousesPage">Перейти до усіх курсів</Link> <div className={style.arrow}> <Image src={Arrow} alt="Picture of the author"/> </div></div>
        
        <div className={style.allTopics}>
          <TopicBox img={Btc} text="dasdasd" />
          <TopicBox img={Btc} text="dasdasd" />
          <TopicBox img={Btc} text="dasdasd" />
          <TopicBox img={Btc} text="dasdasd" />
          <TopicBox img={Btc} text="dasdasd" />
          <TopicBox img={Btc} text="dasdasd" />
        </div>
      </div>
    </div>
  );
}


