import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
// Importar Chart.js
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    BarElement,
    LinearScale,
} from 'chart.js';
import { Error } from './error';

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale);

export const ToDoList = () => {
    const [tareas, setTareas] = useState([]);
    const [newTarea, setNewTarea] = useState('');
    const [duracion, setDuracion] = useState('');
    const [mostrarError, setMostrarError] = useState(false);

    const agregarTarea = (e) => {
        e.preventDefault();
        if (newTarea.trim() === '' || duracion.trim() === '') {
            setMostrarError(true);
            return;
        }
        const tarea = {
            id: Date.now(),
            text: newTarea,
            completed: false,
            duration: duracion, // Añadir duración a la tarea
        };
        setTareas([...tareas, tarea]);
        setNewTarea('');
        setDuracion('');
    };

    const alternarCompletado = (id) => {
        setTareas(tareas.map(tarea =>
            tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
        ));
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    const cerrarError = () => {
        setMostrarError(false);
    };

    // Calcular tareas completadas y pendientes
    const completadas = tareas.filter(tarea => tarea.completed).length;
    const pendientes = tareas.length - completadas;

    // Configurar datos para el gráfico
    const data = {
        labels: ['Completadas', 'Pendientes'],
        datasets: [
            {
                data: [completadas, pendientes],
                backgroundColor: ['#4caf50', '#ff5722'],
                hoverBackgroundColor: ['#45a049', '#e64a19'],
            },
        ],
    };

    // Configurar datos para el gráfico de barras
    const dataBar = {
        labels: tareas.map(tarea => tarea.text), // Usar el nombre de las tareas como etiquetas
        datasets: [
            {
                label: 'Duración de Tareas (minutos)',
                data: tareas.map(tarea => tarea.duration), // Usar la duración de las tareas
                backgroundColor: '#4caf50',
                borderColor: '#388e3c',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container mt-5 bg-dark bg-gradient p-5">
            <h1>Lista de Tareas Fitness: </h1>

            {mostrarError && <Error message="La tarea y la duración no pueden estar vacías" onClose={cerrarError} />}

            <form onSubmit={agregarTarea}>
                <input
                    type="text"
                    value={newTarea}
                    onChange={(e) => setNewTarea(e.target.value)}
                    placeholder="Añadir nueva tarea"
                    className='m-3 rounded'
                />
                <input
                    type="text"
                    value={duracion}
                    onChange={(e) => setDuracion(e.target.value)}
                    placeholder="Duración (minutos)"
                    className='m-3 rounded'
                />
                <br></br>
                <button type="submit" className='btn btn-warning w-50 m-3'>Agregar tarea</button>
            </form>

            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id} className='mb-3'>
                        <input
                            type="checkbox"
                            checked={tarea.completed}
                            onChange={() => alternarCompletado(tarea.id)}
                        />
                        <span style={{ textDecoration: tarea.completed ? 'line-through' : 'none' }}>
                            {" " + tarea.text + " "} - <strong>{tarea.duration} minutos </strong>
                        </span>
                        <button onClick={() => eliminarTarea(tarea.id)} className='btn btn-danger'>Eliminar</button>
                    </li>
                ))}
            </ul>

            {/* Gráfico de pastel */}
            <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
                <h2>Progreso de Actividades: </h2>
                <Pie data={data} />
            </div>

            {/* Gráfico de barras */}
            <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
                <h2>Duración de las Tareas: </h2>
                <Bar data={dataBar} options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `Duración: ${tooltipItem.raw} minutos`; // Mostrar la duración en las tooltips
                                },
                            },
                        },
                    },
                }} />
            </div>
        </div>
    );
};
