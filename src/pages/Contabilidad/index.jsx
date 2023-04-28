import Cards from '@/Components/Cards/Cards'
import NadvarInterno from '@/Components/NadvarInterno/NadvarInterno'
import React from 'react'
import {conta} from '@/Data/Data'
import Footer from '@/Components/Footer/Footer'

const index = () => {
  return (
    <div>
        <NadvarInterno/>
        <Cards c={conta}/>
        <Footer/>
    </div>
  )
}

export default index