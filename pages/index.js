import styles from '@/styles/Home.module.css'
import Contador from './components/Contador/Contador'
import CambioNombre from './components/CambioNombre/CambioNombre'


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* <Contador></Contador> */}
        <CambioNombre></CambioNombre>

      </main>
    </>
  )
}