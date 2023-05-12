import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './NadvarExterno.module.css'
import Image from 'next/image';
import menu from '@/Assets/menu.png'




const NadvarExterno = () => {
  
  const [estado, setestado ]= useState("")
  
  const toggleMenu = () => {


  estado ? setestado("") : setestado(styles.visible) ;

  }

 useEffect(() => {

  const responsive = document.getElementById('menu')

  estado ? responsive?.classList.add(estado) : responsive?.classList.remove(styles.visible)
 
 }, [estado,setestado])
 

  return (

    <div className={styles.father}>
      <div className={styles.menures}>

      <Image src={menu} alt="Mostrar menú" onClick={toggleMenu} className={styles.btnMenu} />
      </div>
      <div className={styles.son} >
        <div className={styles.title} >
          <h1>Bienvenido a corporation AOSC</h1>
        </div>
        <div className={styles.Navegacion}>
          <Link href={"/"} className={styles.ruta}><li><ul>Inicio</ul></li></Link>
          <Link href={"/Servicios"} className={styles.ruta}><li><ul>Servicios</ul></li></Link>
          <Link href={"/Contacto"}   className={styles.ruta}><li><ul>Contacto</ul></li></Link>   
          <Link href={"/Nosotros"} className={styles.ruta}><li><ul>Sobre nosotros</ul></li></Link>

        </div>
      </div>

      <div id='menu' className={styles.menuresponsive}>
      <div className={styles.titleresponsive} >
          <h1>Bienvenido a corporation AOSC</h1>
        </div>
        <div className={styles.Navegacionresponsive}>
          <Link href={"/"} className={styles.rutaResponsive}><li><ul>Inicio</ul></li></Link>
          <Link href={"/Servicios"} className={styles.rutaResponsive}><li><ul>Servicios</ul></li></Link>
          <Link href={"/Contacto"}   className={styles.rutaResponsive}><li><ul>Contacto</ul></li></Link>   
          <Link href={"/Nosotros"} className={styles.rutaResponsive}><li><ul>Sobre nosotros</ul></li></Link>

        </div>

      </div>
    </div>
  )
}

export default NadvarExterno