import React, { useEffect, useState } from "react";

export const PruebaComponent = () => {

    const [usuario, setUsuario] = useState("Esvin");
    const [fecha, setfecha] = useState("05/10/2024");
    const [contador, setContador] = useState(usuario.length)

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    useEffect(() => {
        console.log("Se ha cambiado algo en el componente")
    }, [usuario]);

    const cambiarFecha = e => {
        setfecha(Date.now());
    }

    const contarLetras = e =>{
        setContador(usuario.length)
    }

    return (
        <div>
            <h3>El efecto - Hook UseEffect</h3>
            <strong>{usuario}</strong>
            <br></br>
            <h4>Numero de letras: </h4>
            <strong>{contador}</strong>
            <p>
            <strong>{fecha}</strong>
                <br></br>
                <input type="text" onChange={modUsuario} placeHolder="Cambiar el nombre"></input>
                <br></br>
                <button onClick={cambiarFecha}>Cambiar fecha</button>
                <br></br>
                <button onClick={contarLetras}>Contar letras de nombre</button>
            </p>

        </div>
    )
}