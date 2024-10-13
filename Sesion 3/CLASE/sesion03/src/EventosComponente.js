import React from "react";

export const EventosComponente =()=>{
    const hasDadoClick=(e)=>{
        alert("Has dado click al boton 2");
        console.log(e);
    }

    const hasDadoClickb3 = (e, nombre) => {
        alert("Has Dado click al boton 3" + nombre);
    }

    const hasDadoDobleClick = (e) => {
        alert("has dado doble click");
    }

    const hasEntrado=()=>{
        console.log("Ingreso a la caja")
    }

    const hasSalido=()=>{
        console.log("Has salido de la caja")
    }

    
    return(
        <div>
            <h1>Eventos React</h1>
            <button onClick={()=>{
                console.log("Hola soy un evento de react");
            }}>Dame Click</button>
            <button onClick={hasDadoClick}>Dame click b2</button>
            <button onClick={e=> hasDadoClickb3(e, " Esvin")}>Dame click b3</button>

            <button onDoubleClick={e=>hasDadoDobleClick(e)}>Dame doble click</button>
            <div id="caja" onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
                pasa por encima!
            </div>
        </div>
        
    )
}