import React from "react";
import { Link } from "react-router-dom";

export const Articulo = () =>{
    return(
        <div>
            <h1>Pagina de Articulo</h1>
            <p>Esta es La pagina de articulo</p>
            <Link to="/">Volver a Inicio</Link>
        </div>
    )
}
