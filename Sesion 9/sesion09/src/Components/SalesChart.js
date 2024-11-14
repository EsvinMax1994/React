import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as chartjs, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

chartjs.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const SalesChart = () => {
    const [sales, setSales] = useState([]);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    //funcion para agregar una nueva venta
    const handleAddSale = () => {
        const newSale = {
            product,
            quantity: parseInt(quantity),
            price: parseFloat(price)
        };
        setSales([...sales, newSale]);
        setProduct('');
        setQuantity('');
        setPrice('');
    };

    //construir grafico barras
    const barData = {
        labels: sales.map(sale => sale.product),
        datasets: [
            {
                label: 'Cantidad vendida',
                data: sales.map(sale => sale.quantity),
                backgroundColor: 'rgba(75,192,192,0.6)',
            },
            {
                label: 'Ventas (Q)',
                data: sales.map(sale => sale.quantity * sale.price),
                backgroundColor: 'rgba(153,102,255,0.6)'
            }
        ]
    };

    //construir grafico Pie
    const pieData = {
        labels: sales.map(sale => sale.product),
        datasets: [
            {
                label: 'Ventas (Q)',
                data: sales.map(sale => sale.quantity * sale.price),
                backgroundColor: ['rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'
                ]
            }
        ]
    };

    return (
        <div>
            <h1>Detalles de ventas: </h1>
            <div>
                <input
                    type="text"
                    placeholder='Producto'
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='Cantidad'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='Precio'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button onClick={handleAddSale}>Agregar</button>
            </div>
            <h2>Tabla de ventas: </h2>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.price}</td>
                            <td>{sale.quantity * sale.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Grafico de barras</h2>
            <Bar data={barData} />

            <h2>Grafico de Pie</h2>
            <Pie data={pieData} />

        </div>


    )
}

export default SalesChart;