import Link from 'next/link'
import React from 'react'
import styles from './NadvarExterno.module.css'

const NadvarExterno = () => {
  return (
    <div className={styles.father}>
    <div className={styles.son}>
        <div className={styles.title}>
            <h1>Bienvenido a corporation AOSC</h1>
        </div>
        <div className={styles.Navegacion}>
           <Link href={"/"} className={styles.ruta}><li><ul>Inicio</ul></li></Link> 
          <Link href={"/Servicios"} className={styles.ruta}><li><ul>Servicios</ul></li></Link>  
         {/* <Link href={"/Contacto"}   className={styles.ruta}><li><ul>Contacto</ul></li></Link>    */}
        <Link href={"/Nosotros"}    className={styles.ruta}><li><ul>Sobre nosotros</ul></li></Link> 

        </div> 
    </div>
</div>
  )
}

export default NadvarExterno