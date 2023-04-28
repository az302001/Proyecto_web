import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './ServiceCard.module.css' 

function ServiceCard({imagen,name}) {
    const type=name.replace(/\s+/g, "_");

    console.log(type)
    return (
        <div className={styles.father}>
            <div className={styles.Cards}>
                <div class={styles.container}>
                    <div class={styles.card_box}>
                        <span className={`${name ? styles[type] : ''}`}></span>
                        <Link href={`/${name}`}><Image src={imagen} className={styles.img}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard