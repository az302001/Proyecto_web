import React from 'react'
import styles from './Contacto.module.css'
import NadvarExterno from '@/Components/NadvarExterno/NadvarExterno'
import Footer from '@/Components/Footer/Footer'
import Image from 'next/image'
import wsp from '@/Assets/wsp.png'
import fb from '@/Assets/fb.png'
import Link from 'next/link'

const index = () => {
    return (
        <div className={styles.container}>
            <NadvarExterno />
            <div className={styles.data}>
                <div className={styles.contact}>
                    <span className={styles.heading}>Contactanos</span>
                    <div className={styles.flexbox}>
                        <form >
                            <label  >Nombre: </label>
                            <input type="text" required='es obligatorio' />
                            <label >Email: </label>
                            <input type="email" required='' />
                            <label>Mensaje: </label>
                            <textarea className={styles.menssage} required=''></textarea>
                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>

                <div className={styles.Ubicacion}>
                   <span><h1>Ubicanos</h1>
                    <p>Urb. Aproviser B3-15 2da Etapa Talara-Piura-Perú</p></span>
                    <div className={styles.flexbox}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2627684142448!2d-81.2609631708466!3d-4.58485466297828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c8b57795cef53a2!2zNMKwMzUnMDUuNSJTIDgxwrAxNSczNy41Ilc!5e0!3m2!1ses!2spe!4v1664470436431!5m2!1ses!2spe" className={styles.mapa}></iframe>
                    </div>
                </div>


            </div>

            <div className={styles.Credes}>
                <div className={styles.numeros}>
                    <p> <span>Telefonos: </span>952946964/ <br />
                    979161242 </p>
                </div>
                <div className={styles.redes}>
                    <button className={styles.btn1}>
                      <Link href='https://api.whatsapp.com/send/?phone=51952946964&text=Estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0'><Image src={wsp} className={styles.wsp} /></Link>
                        <a href="https://api.whatsapp.com/send/?phone=51952946964&text=Estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0" >Chat de Consultas</a>
                    </button>
                    <button className={styles.btn2}>
                        <Link href='https://www.facebook.com/aosc.aosc.338?_rdc=1&_rdr'> <Image src={fb} className={styles.fb} /></Link>
                        <a href="https://www.facebook.com/aosc.aosc.338?_rdc=1&_rdr">Pagina de Consultas</a>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index