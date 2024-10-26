import React,{useState, useEffect} from "react";

//Declarar nuestro componente
const ListaNombres =() => {
    //se declaran tres elementos diferentes

    //para poder llevar un listado de nombres
    const [nombres, setNombres] = useState(["Esvin","Max","Esvin"]);

    //donde se guardan los nombres editados
    const [nombreEditado, setNombreEditado] = useState("");

    //donde se guardaran los index editados
    const [indexEditado, setIndexEditado] = useState(null);

    //metodo useEffect se va ejecutar siempre que haya un cambio
    useEffect(()=>{
        if(indexEditado!=null){
            setNombreEditado(nombres[indexEditado]);
        }else{
            setNombreEditado("");
        }
    }, [indexEditado, nombres]);

    const eliminarNombre=(index)=>{
        const nuevosNombres = nombres.filter((_,i)=>i !== index);
        setNombres(nuevosNombres);
    }; 

    const comenzarEdicion = (index) => {
        setIndexEditado(index);
    };

    const manejarCambios = (e) => {
        setNombreEditado(e.target.value);
    };

    const guardarEdicion = (index) => {
        const nuevosNombres = nombres.map((nombre, i) => (i=== index ? nombreEditado:nombre));
        setNombres(nuevosNombres);
        setIndexEditado(null);
    }

    return(
        <div>
            <h2>Lista de nombres: </h2>
            <ul>
                {nombres.map((nombre,index) => (
                    <li key={index}>
                        {indexEditado === index ? (
                            <>
                            <input type="text" value={nombreEditado} onChange={manejarCambios} />
                            <button onClick={()=> guardarEdicion(index)}>Guardar</button>
                            </>                                
                        ):(
                            <>
                                {nombre}
                                <button onClick={()=> comenzarEdicion(index)}>Editar</button>
                                <button onClick={()=> eliminarNombre(index)}>Eliminar</button>
                            </>

                        )}
                    </li>
                ))}
            </ul>
        </div>
    )


};

export default ListaNombres;