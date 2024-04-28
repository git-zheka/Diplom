import style from './moreinfo.module.scss'
import Image from 'next/image'

import SharkLogo from '../../../media/SharkLogo.png'
import youtubeIcon from '../../../media/youtubeIcon.png'
import instagramIcon from '../../../media/instaIcon.png'
import telegramIcon from '../../../media/telegramIcon.png'


export default function MoreInfo() { 
  return (
    <div className={style.MOREINFO}>
      <div className={style.logoAndPrice}> 
        <Image src={SharkLogo} alt={''}/>
        {/* <div className={style.price}> 8000 <br></br> балів </div> */}
      </div>
      
      <div className={style.allinfo}>
        <div className={style.NameSchool}> <p className={style.name}>Shark Trade </p> <p>- Ukrainian Crypto Enthusiasts</p></div>
        <div className={style.them}>
          <h2>Теми:</h2>
          <h3>Трейдинг, Ноди, NFT, ICO, IDO </h3>
          
        </div> 

        <div className={style.socialMedia}>
          <div className={style.social}> <Image src={instagramIcon} alt={""}/> 90.0К </div>
          <div className={style.social}> <Image src={telegramIcon} alt={""}/> 90.0К </div>
          <div className={style.social}> <Image src={youtubeIcon} alt={""}/> 90.0К </div> 
        </div>

        <div className={style.btnTakeCourse}> Отримати курс </div>
      </div>
      <div className={style.description}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
    </div>
  );
}


