import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './NadvarInterno.module.css'
import { sistem, conta, Sgeneral } from '@/Data/Data'



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
              <div className="z-10 absolute w-full max-h-[400px] overflow-y-auto right-0">
                {sericesSearch.map((e, i) => (
                  <div key={i}>{e.nombre}</div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.contboton}>
            <button className={styles.boton} onClick={handleSearch}>Buscar</button>
          </div>
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