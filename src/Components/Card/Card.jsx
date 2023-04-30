import React from 'react'
import styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Card({imagen,nombre,tipo}) {
  return (
    <div className={styles.data}>
       <div className={styles.card}>
            <div className={styles.contentimage}><Image src={imagen} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>{nombre}</p>         
            </div>
            <Link href={`/${tipo}/${nombre}`}className={styles.button}>Mas informacion</Link>
          </div>
    </div>
  )
}

export default Card