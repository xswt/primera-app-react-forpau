import ContadorStyles from '@/pages/Components/Contador/Contador.module.css'
import { useState } from 'react'



const Contador = () => {

    const [numero, setNumero] = useState(0)

  return (
    <div className={ContadorStyles.mainContainer}>
        Contador: {numero}
        <br></br>
        <div>

            <button 
            className={ContadorStyles.estilosBotonesContador}
            onClick={()=>{setNumero(numero+1)}}
            >
                +
            </button>

            <button 
            className={ContadorStyles.estilosBotonesContador}
            onClick={()=>{setNumero(numero-1)}}
            >
                -
            </button>
            
        </div>
        
    </div>
  )
}

export default Contador