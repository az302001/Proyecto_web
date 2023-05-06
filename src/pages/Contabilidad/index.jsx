import Cards from '@/Components/Cards/Cards'
import NadvarInterno from '@/Components/NadvarInterno/NadvarInterno'
import React from 'react'
import {conta} from '@/Data/Data'
import Footer from '@/Components/Footer/Footer'
import styles from './Contabilidad.module.css'


const index = () => {
  return (
    <div className={styles.container}>
        <NadvarInterno/>
        <Cards c={conta}/>
        <Footer/>
    </div>
  )
}

export default index