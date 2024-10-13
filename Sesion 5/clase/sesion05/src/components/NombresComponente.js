import React, {useEffect, useState} from 'react'

export const NombresComponente = () =>{

    const [nombre, setNombre] = useState('');
    //Efectopara cargar el nombre local storage cuando cargue la pagina
    useEffect(()=>{
        const nombreGuardado = localStorage.getItem('nombre');
        if(nombreGuardado){
            setNombre(nombreGuardado);
        }
    },[])


    //Funcion para manejar el cambio en el input y guardarlo en el local storage
    const handlerNameChange = (event) =>{
        const nuevoNombre = event.target.value;
        setNombre(nuevoNombre);
        localStorage.setItem('nombre', nuevoNombre)
    }

    return(
        <div>
            <input 
            type='text'
            value={nombre}
            onChange={handlerNameChange}
            placeholder='Ingrese su nombre' 
            ></input>
        </div>
    )
}