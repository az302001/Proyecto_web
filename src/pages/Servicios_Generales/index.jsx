import Cards from '@/Components/Cards/Cards'
import Footer from '@/Components/Footer/Footer'
import NadvarInterno from '@/Components/NadvarInterno/NadvarInterno'
import { Sgeneral } from '@/Data/Data'
import React from 'react'


const index = () => {
  return (
    <div>
        <NadvarInterno/>
        <Cards c={Sgeneral}/>
        <Footer/>
    </div>
  )
}

export default index