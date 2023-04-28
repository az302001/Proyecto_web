import NadvarExterno from '@/Components/NadvarExterno/NadvarExterno'
import React from 'react'
import styles from './Nostros.module.css'
import Footer from '@/Components/Footer/Footer'
import img01 from '@/Assets/mision.jpg'
import Image from 'next/image'
import img02 from '@/Assets/futuro.jpg'
import img03 from '@/Assets/valores.jpg'


const index = () => {
    return (
        <div className={styles.containerData}>
            <NadvarExterno />
            <div className={styles.Frase}>
                <h1>Nosotros</h1>
               <p>Corporación AOSC es una empresa que presta servicios profesionales enfocados al desarrollo de Sistemas y Contabilidad, propone ideas y soluciones innovadoras orientadas a la captura del valor.</p>
            </div>
            <div className={styles.data}>
                {/* <div className={styles.Nostros}>
                    <h1></h1>
                    <p></p>
                </div> */}
                <div className={styles.mision}>
                    <h1>Nuestra Mision</h1>
                    <p>Empresa orientada a brindar servicios de calidad, con el respaldo de nuestra experiencia en los Sistemas Informáticos, Contabilidad y Servicios Generales en el Sector Privado, Público y en General; ofreciendo las mejores soluciones con un Staff de profesionales altamente competentes y comprometidos con los estándares de calidad, seguridad y medio ambiente.</p>
                    <Image src={img01} className={styles.img}/>
                </div>

                <div className={styles.Vision}>
                    <h1>Nuestra Vision</h1>
                    <p>Empresa orientada a brindar servicios de calidad, con el respaldo de nuestra experiencia en los Sistemas Informáticos, Contabilidad y Servicios Generales en el Sector Privado, Público y en General; ofreciendo las mejores soluciones con un Staff de profesionales altamente competentes y comprometidos con los estándares de calidad, seguridad y medio ambiente.</p>
                    <Image src={img02} className={styles.img} />
                </div>

                <div className={styles.Valores}>
                    <h1>Nuestros Valores</h1>
                    <p>HONESTOS: Hacemos lo que decimos y decimos lo que hacemos. SENCILLOS: Creemos que las cosas buenas, mientras más simples sean, mejores son. TESONEROS: Trabajamos duro hasta alcanzar lo que queremos. SERVICIALES: Nos apasiona la idea de servir con amabilidad a los demás. JUSTOS: Procuramos tratar a otros como deseamos que nos traten a nosotros.</p>
                    <Image src={img03} className={styles.img} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index