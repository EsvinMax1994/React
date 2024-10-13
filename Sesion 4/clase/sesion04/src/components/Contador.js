import React, {useState} from "react";

export const Contador =() =>{

    const [contador, setContador]=useState(0);

    const sumarN =e =>{
        setContador(contador+1);
    }

    const restarN  =e =>{
        setContador(contador-1);
    }

    return(
        <div>
            <h3>CONTADOR:</h3>
            <strong>{contador}</strong>
            <br/>
            <button onClick={sumarN}>+</button>
            <button onClick={restarN}>-</button>
        </div>
    )
}