import React, { useState } from "react";

const FormularioValidado = () => {

    const[nombre, setNombre]=useState('');
    const[email, setEmail]=useState('');
    const[direccion, setDireccion]=useState('');
    const[telefono, setTelefono]=useState('');
    const[edad, setEdad]=useState('');
    const[errors, setErrors]=useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const handleValidation = () =>{
        let formIsValid = true;
        let newErrors = {};

        if (nombre.trim().length<3){
            newErrors.nombre="El nombre debe tener al menos 3 caracteres";
            formIsValid=false;
        }
        if(!emailRegex.test(email)){
            newErrors.email="Ingrese un correo valido";
            formIsValid=false;
        }
        if (direccion.length<=0){
            newErrors.direccion="La direccion no debe estar vacia";
            formIsValid=false;
        }
        if(telefono.length<11){
            newErrors.telefono="Ingrese un telefono valido";
            formIsValid=false;
        }

        if(edad<18){
            newErrors.edad="No es mayor de edad";
            formIsValid=false;
        }

        setErrors(newErrors);
        return formIsValid;
    }

    const handleChangeNombre = (e) =>{
        setNombre(e.target.value);
        if(errors.nombre){
            setErrors((prevErrors)=>({
                ...prevErrors,
                nombre:''
            }))
        }
    };

    const handleChangeEmial = (e) =>{
        setEmail(e.target.value);
        if(errors.email){
            setErrors((prevErrors)=>({
                ...prevErrors.email,
                email:''
            }))
        }
    }

    const handleChangeDireccion = (e) =>{
        setDireccion(e.target.value);
        if(errors.direccion){
            setErrors((prevErrors)=>({
                ...prevErrors.direccion,
                direccion:''
            }))
        }
    }

    const handleChangeTelefono = (e) =>{
        setTelefono(e.target.value);
        if(errors.telefono){
            setErrors((prevErrors)=>({
                ...prevErrors.telefono,
                telefono:''
            }))
        }
    }

    const handleChangeEdad = (e) =>{
        setEdad(e.target.value);
        if(errors.edad){
            setErrors((prevErrors)=>({
                ...prevErrors.edad,
                edad:''
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(handleValidation()){
            console.log("formulario enviado", {nombre, email,direccion, telefono, edad});
            //aqui iria la logica para enviar el formulario
        }else{
            console.log('formulario no valido, verifiquelos errores');
        }
    }

    return (
        <div>
            <h2>Formulario Validado</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={handleChangeNombre}
                    ></input>
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                </div>
                <div>
                    <label>Correo Electronico: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={handleChangeEmial}
                    ></input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Direccion: </label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={handleChangeDireccion}
                    ></input>
                    {errors.direccion && <p className="error">{errors.direccion}</p>}
                </div>
                <div>
                    <label>Telefono: </label>
                    <input
                        type="number"
                        value={telefono}
                        onChange={handleChangeTelefono}
                    ></input>
                    {errors.telefono && <p className="error">{errors.telefono}</p>}
                </div>
                <div>
                    <label>Edad: </label>
                    <input
                        type="number"
                        value={edad}
                        onChange={handleChangeEdad}
                    ></input>
                    {errors.edad && <p className="error">{errors.edad}</p>}
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )

};

export default FormularioValidado;