import CambioNombreCSS from './CambioNombre.module.css'
import { useState } from 'react'

const CambioNombre = () => {

    const [nombre, setNombre] = useState("Acrux")
    return(
        <div className={CambioNombreCSS.mainContainer}>
        {nombre}
        <br></br>
        <div>
            <button
            className={CambioNombreCSS.estilosBotonesContador}
            onClick={()=>{setNombre("Pau")}}>
                Pau
            </button>
        
            <button
            className={CambioNombreCSS.estilosBotonesContador}
            onClick={()=>{setNombre("Guille")}}>
                Guille
            </button>
        
            <button
            className={CambioNombreCSS.estilosBotonesContador}
            onClick={()=>{setNombre("Acrux")}}>
                Acrux
            </button>            
        </div>

        </div>
    )
}

export default CambioNombre;