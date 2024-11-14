import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from "../Components/Inicio";
import { Contacto } from "../Components/Contacto";
import { Articulo } from "../Components/Articulo";
import { Error } from "../Components/Error";
import { Persona } from "../Components/Persona";

export const RouterPrincipales = () => {
    return (
        <BrowserRouter>
            <h1>Cabecera</h1>
            <hr></hr>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                        to="/"
                        className={({isActive}) => isActive? "activado":""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/contacto"
                        className={({isActive}) => isActive? "activado":""}>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink
                         to="/articulo"
                         className={({isActive}) => isActive? "activado":""}>Articulo</NavLink>
                    </li>
                </ul>
            </nav>
            <hr></hr>
            <section>
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/contacto" element={<Contacto></Contacto>}></Route>
                    <Route path="/articulo" element={<Articulo></Articulo>}></Route>
                    <Route path="/*" element={<Error></Error>}></Route>
                    <Route path="/persona/:nombre" element={<Persona></Persona>}></Route>
                    <Route path="/persona" element={<Persona></Persona>}></Route>
                </Routes>
            </section>
            <hr></hr>
            <footer>
                Pie de pagina
            </footer>
        </BrowserRouter>
    )
}