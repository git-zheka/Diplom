import React from 'react';
import style from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

// Зображення
import logo from '../../media/VoloLearn.png'

export default function Footer() {

  return (
    <footer className={style.FOOTER}>
        © 2024
    </footer>
  );
}