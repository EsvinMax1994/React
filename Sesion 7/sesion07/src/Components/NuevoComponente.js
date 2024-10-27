import React from "react";

function NuevoComponente() {

    return (
        <div className="container">
            <h1 className="text-center mt-5">Componente con Bootstrap</h1>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tarjeta 1</h5>
                            <p className="card-text">
                                Este es un ejemplo de un parrafo en una tarjeta con Bootstrap.
                            </p>
                            <div className="text-end">
                                <button className="btn btn-primary">Leer mas</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tarjeta 2</h5>
                            <p className="card-text">
                                Este es un ejemplo de otro parrafo en una tarjeta con Bootstrap.
                            </p>
                            <div className="text-end">
                            <button className="btn btn-danger">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tarjeta 3</h5>
                            <p className="card-text">
                                Este es el tercer ejemplo de un parrafo en una tarjeta con Bootstrap.
                            </p>
                            <div className="text-end">
                            <button className="btn btn-success">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tarjeta 4</h5>
                            <p className="card-text">
                                Este es el cuarto ejemplo de un parrafo en una tarjeta con Bootstrap.
                            </p>
                            <div className="text-end">
                            <button className="btn btn-warning">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoComponente