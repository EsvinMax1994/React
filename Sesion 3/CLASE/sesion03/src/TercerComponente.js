import React from "react";

export const TercerComponente = ({nombre, apellido, ficha}) => {
    const {grupoSanguineo, alergia, estatura, IMC} = ficha
    return(
        <div>
            <h1>Ficha Medica</h1>
            <ul>
                <li><strong>Nombre: </strong> {nombre}</li>
                <li><strong>Apellido:</strong> {apellido}</li>
                <li><strong>Grupo Sanuineo:</strong> {grupoSanguineo}</li>
                <li><strong>Alergia:</strong>  {alergia}</li>
                <li><strong>Estatura:</strong> {estatura}</li>
                <li><strong>IMC:</strong> {IMC}</li>
            </ul>
        </div>
    )
}