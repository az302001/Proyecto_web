import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './index.module.css'
import NadvarExterno from '@/Components/NadvarExterno/NadvarExterno'
import img from '@/Assets/portada.jpg'
import Footer from '@/Components/Footer/Footer'
import Link from 'next/link'



export default function Home() {
  return (

    <div className={styles.container}>
      <NadvarExterno />
      <div className={styles.contentImagen}>
        <Image src={img} className={styles.imagen} />
      </div>
      <div className={styles.data}>
        <div className={styles.frase}>
          <h1>¡Somos Expertos en el Desarrollo de Sistemas, Contabilidad y más!</h1>
        </div>
        <div className={styles.Boxbutton}>
          <Link className={styles.boton} href={'/Nosotros'}>
            Conocenos
            <div className={styles.wrapper}>
              <div className={styles.arrow}></div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  )
}
