import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './NadvarInterno.module.css'
import { sistem, conta, Sgeneral } from '@/Data/Data'
import MiniCard from '../Card/MiniCard'



const NadvarInterno = () => {

  const allData = sistem.concat(conta).concat(Sgeneral)

  // console.log(allData)

  const router = useRouter()

  // const [search, setSearch] = useState('')

  // const [results, setResults] = useState([])

  // const handleSearch = () => {
  //   const datafilter=allData.filter((e) => e.nombre === search)
  //   setResults(datafilter)
  // }

  // console.log(results)


  const [search, setSearch] = useState("");
  const [sericesSearch, setSericesSearch] = useState([]);

  useEffect(() => {
    if (search.length > 2) {
      handleSearch();
    } else {
      setSericesSearch([]);
    }
  }, [search]);
  const handleSearch = () => {
    const filtered = allData.filter((e) =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    );
    setSericesSearch(filtered);
  };


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Bievenido a la tienda de AOSC</h1>
        </div>
        <div className={styles.Buscador}>
          <div className={styles.continput}>
            <input type="text" placeholder='Buscar' value={search} className={styles.input} onChange={(e) => setSearch(e.target.value)} />
            {sericesSearch.length > 0 && (
              <div className={styles.contentMinicard}>
                {sericesSearch.map((e, i) => (
                  <MiniCard key={i} nombre={e.nombre} imagen={e.img} tipo={e.tipo} />
                ))}
              </div>
            )}
          </div>
          {/* <div className={styles.contboton}>
          </div> */}
          <div className={styles.return}>
            {/* <Link href={'/Service'} ><button className={styles.retorno}>🡐 Regresar</button></Link> */}
            <button className={styles.retorno} onClick={() => router.back()}>🡐 Regresar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NadvarInterno