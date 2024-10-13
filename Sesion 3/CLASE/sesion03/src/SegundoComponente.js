import React from "react";

export const SegundoComponente = () =>{

    const libros = ["libro1","libro2","libro3"];
    return(
        <div>
            <h2>Listado de Libros</h2>
            {
                (() =>{
                    if(libros.length >=1){
                        return (
                            <ul>
                                {libros.map((libro, indice)=>(
                                    <li key={indice}>{libro} </li>
                                ))}
                            </ul>
                        );
                    }else{
                        return <p>no hay libros</p>
                    }
                })()
            }
        </div>
    );
}