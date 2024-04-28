import Link  from 'next/link';
import style from './loginpahe.module.scss'
import aboutus from '../../../media/studySection/AboutUS.png'
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className={style.LOGIN}>
      <div className={style.loginBox}>
      <h1 className={style.h1}>Вхід</h1>
      <form className={style.loginForm}>
        <label className={style.labelLogin}>Логін</label>
        <input className={style.inputLogin} type="text" pattern=''/>
        <label className={style.labelLogin} >Пароль</label>
        <input className={style.inputLogin} type="password" pattern=''/>
        <button className={style.sendFormBtn} type='submit'> Увійти </button>
      </form>

      <div className={style.other}> 
        <h4 className={style.h4ForgetPass}>Забули пароль?</h4>
        <h4 className={style.h4ForgetReg}>Реєстріція</h4>
      </div>
      </div>
    </div>
  );
}


