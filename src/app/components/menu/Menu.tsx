import React from 'react';
import style from './menu.module.scss'
import Link from 'next/link'
import Image from 'next/image'

// Зображення
import logo from '../../media/VoloLearn.png'
import OpenMenu from '../../media/homepage/menu/OpenMenu.svg'
import CloseMenu from '../../media/homepage/menu/CloseMenu.svg'

export default function Menu() {

  const isOpen = true;

  return (
    <nav className={style.nav}>
      <div className={style.Logo}> <Image src={logo} alt={""}/> </div>
      
      <div className={style.Navigations}> 
        <ul>
            <li><Link href='/'> Курси </Link></li>
            <li><Link href='/'> Про нас </Link></li>
            <li><Link href='/'> Заявки </Link></li>
         </ul>
      </div>
            
      {isOpen ? 
      (<div className={style.Auth}> 
        <Link href="/"><div className={style.btnLogin}> Вхід </div></Link>
        <Link href="/"><div className={style.btnRegis}> Реєстрація </div></Link>
      </div>) : 
      (
        <div className={style.LoginLogo}></div>
      )
} 
      
        {/* <div className={style.functionsMenuIcon}> <img src={OpenMenu}/> </div>
        <div className={style.functionsMenuIcon}> <img src={CloseMenu}/> </div> */}
    </nav>
  );
}