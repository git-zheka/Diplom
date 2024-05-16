import style from './courses.module.scss'
import Image from 'next/image'

import SharkLogo from '../../media/SharkLogo.png'
import BoxCourse from './components/BoxCourse';

export default function CoursesPage() {
  return (
    <div className={style.COURSES}>
        <div className={style.NameAndSearch}>
          <div className={style.h1}><h1>Курси</h1></div>
          <div className={style.Search}><input type='text'/></div>
        </div>

        <div className={style.allCouses}>

           <BoxCourse />
           <BoxCourse />
           <BoxCourse />
           <BoxCourse />
           <BoxCourse />
           <BoxCourse />
           <BoxCourse />
        
        </div>
    </div>
  );
}


