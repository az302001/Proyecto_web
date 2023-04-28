import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'

const Cards = ({c}) => {
  return (
    <div className={styles.cards}>
        {
            c.map((e, i)=>{
                return(

                    <Card key={i} nombre={e.nombre} imagen={e.img}/>
                )
                
            })
        }
    </div>
  )
}

export default Cards