import React, {useState} from 'react'


export const MiprimerEstado =() =>{

    /*
    problematica no se puede cambiar el valor de la variable en tiempo real
    let nombre = "Esvin Lezana";

    const cambiarNombre = e =>{
        nombre="Daniel Lezana";
    }*/

    //Nos apoyamos con el hook de estado para cambiar los valores de una constante en tiempo real
    const [nombre, setNombre]= useState("Esvin Lezana");
    const cambiarNombre = e =>{
        setNombre("Daniel Lezana")
    }

    return (
        <div>
            <h3>Mi primer Estado</h3>
            <strong>{nombre}</strong>
            <br/>
            <button onClick={cambiarNombre}>Cambiar Nombre</button>
        </div>
    )
}