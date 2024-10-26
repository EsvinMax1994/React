import React,{useState} from "react";
import ErrorComponente from "./ErrorComponente";
const ListaDeNombres = ({nombres}) => {

    const [error, setError] = useState('');

    const simularError = () => {
        setError('Ocurrio un error verifique');
    }
    return(
        <div>
        <ul>
            {nombres.map((nombre, index)=>(
                <li key={index}>{nombre}</li>
            ))}
        </ul>
            <button onClick={simularError}>Simular Error</button>
            {error && <ErrorComponente mensaje={error}></ErrorComponente>}
        </div>
    )
};

export default ListaDeNombres;