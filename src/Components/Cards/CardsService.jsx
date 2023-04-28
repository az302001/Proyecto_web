import React from 'react'
import Card from '../Card/Card'
import styles from './CardsService.module.css'
import ServiceCard from '../ServiceCard/ServiceCard'

const CardsService = ({c}) => {
  return (
    <div className={styles.container}>
        {
            c.map((e,i)=>{
                return(
                    <ServiceCard  key={i} imagen={e.imagen} name={e.name} />
                )
            })
        }
    </div>
  )
}

export default CardsService