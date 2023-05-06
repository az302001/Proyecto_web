import React from 'react'
import MiniCard from '../Card/MiniCard'
import styles from './MiniCards.module.css'

const MiniCards = ({e}) => {
  return (
    <div className={styles.container}>
        {
            e.map((e,i)=>{
                return (

                    <MiniCard key={i} nombre={e.nombre} imagen={e.img} tipo={e.tipo} />
                )
            })
        }
    </div>
  )
}

export default MiniCards