import React,{useEffect, useReducer} from "react";
import { JuegosReducer } from "../reducers/JuegoReducer";


const init= ()=> {
    return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const MisJuegos = () =>{

    const [juegos, dispatch]=useReducer(JuegosReducer,[],init);
    useEffect(()=>{
        localStorage.setItem("juegos", JSON.stringify(juegos))
    },[juegos]);

    const conseguirDatosForm = e => {
        e.preventDefault();
        let juego={
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };
        const accion ={
            type: "crear",
            payload: juego
        };
        dispatch(accion);
    }

    const borramelo = id =>{
        const action ={
            type: "borrar",
            payload: id
        };
        dispatch(action)
    }

    return(
        <div>
            <h1>Estos son mis videojuegos</h1>
            <p>Numero de videojuegos: {juegos.length} </p>
            <ul>
                {
                    juegos.map(juego =>(
                        <li key={juego.id}>
                            {juego.titulo}
                            &nbsp;<button onClick={e=>borramelo(juego.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
            <h3>Agregar Juegos</h3>
            <form onSubmit={conseguirDatosForm}>
                <input type="text" name="titulo" placeholder="titulo"></input>
                <textarea name="descripcion" placeholder="descripcion"></textarea>
                <input type="submit" value="Guardar"></input>
            </form>
        </div>
    )
}