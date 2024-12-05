
import React from "react";

class Componenteclase extends React.Component{
    render(){
        return(
            <h1>Hola desde clase</h1>
        )
    }
}
// componente funcional
function Componentefuncional(){
    return (
        <h1>Hola desde funcion</h1>
    )
}

//componente de flecha
const Componenteflecha = () => {
    return(
        <h1>Hola desde flecha</h1>
    )
}

export default Componenteclase
export {Componentefuncional}
export {Componenteflecha}
