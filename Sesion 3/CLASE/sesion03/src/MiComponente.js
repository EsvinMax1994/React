//importar dependencias
import React from "react";
import './App.css';

const MiComponente = () =>{
    const nombre = "Esvin";
    const web = "www.intecap.edu.gt";
    let usuario = {
        nombre: "Esvin Lezana",
        direccion: "ciudad"
    }

    console.log(usuario)

    return (
        <div>
            <h2 className="texto">Componente creadro</h2>
            <h3 className="texto2">Datos del Usuario: </h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Direccion: <strong>{usuario.direccion}</strong></li>
            </ul>
            <p>Nombre exterior: {nombre}</p>
            <p>Sitio web: {web}</p>
        </div>
    );
};

export default MiComponente;