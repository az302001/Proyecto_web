import Cards from '@/Components/Cards/Cards'
import Footer from '@/Components/Footer/Footer'
import NadvarInterno from '@/Components/NadvarInterno/NadvarInterno'
import { sistem } from '@/Data/Data'
import React from 'react'
import styles from './Desarrollo.module.css'

const index = () => {
  return (
    <div className={styles.container}>
        <NadvarInterno/>
        <Cards c={sistem}/>
        <Footer/>
    </div>
  )
}

export default index