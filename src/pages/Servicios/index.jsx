import CardsService from '@/Components/Cards/CardsService'
import NadvarExterno from '@/Components/NadvarExterno/NadvarExterno'
import React from 'react'
import {Services} from '@/Data/Data'
import Footer from '@/Components/Footer/Footer'
import styles from './Servicios.module.css'



const Servicios = () => {
  console.log(Services)
  return (
    <div className={styles.container}>
        <NadvarExterno/>
        <CardsService c={Services}/>
        <Footer/>
    </div>
  )
}

export default Servicios