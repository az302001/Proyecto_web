import Cards from '@/Components/Cards/Cards'
import Footer from '@/Components/Footer/Footer'
import NadvarInterno from '@/Components/NadvarInterno/NadvarInterno'
import { Sgeneral } from '@/Data/Data'
import React from 'react'
import styles from './Servicios.module.css'

const index = () => {
  return (
    <div className={styles.container}>
        <NadvarInterno/>
        <Cards c={Sgeneral}/>
        <Footer/>
    </div>
  )
}

export default index