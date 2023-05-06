import Image from 'next/image'
import React from 'react'
import styles from './MiniCard.module.css'
import Link from 'next/link'

const MiniCard = ({ nombre, imagen,tipo }) => {
  return (
    <div className={styles.container}>
      <Link href={`/${tipo}/${nombre}`} className={styles.data}>
        <div className={styles.name}><h1>{nombre}</h1></div>
        <div><Image src={imagen}className={styles.img}/></div>
      </Link>
    </div>
  )
}

export default MiniCard