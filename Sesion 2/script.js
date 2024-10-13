//declaracion de variables
let nombreA = "Esvin Lezana";
let numeroA = 123;
let bandera = true;
let gravedad = 0.8;

console.log(nombreA);

//creacion de objetos
const persona = {
    nombre: "Maria",
    edad: 22,
    pais: "Guatemala"
}

const usuario = { nombre: "Esvin", Apellido: "Ramirez", telefono: 123 }

const libro = { nombre: "POPOLBU", autor: "Juan", paginas: 219 }

console.log(persona);
console.log(usuario);
console.log(libro);
console.log(libro.nombreLibro)
console.log(libro.paginas);

//destructing objetos

const { nombre, autor, paginas } = libro;

const { nombreLibro, autorLibro, paginasLibro } = libro;

console.log(nombre);
console.log(autor);

//Esto no funciona
console.log(nombreLibro);
console.log(autorLibro);

//destructing multiple
let persona1 = { nombreCompleto: "Esvin Lezana", edad: 29, esEstudiante: true }

let persona2 = { nombreCompleto: "Max Lorenzana", edad: 30, esEstudiante: false }

const { nombreCompleto: nombre1, edad: edad1, esEstudiante: esEstudiante1 } = persona1;

const { nombreCompleto: nombre2, edad: edad2, esEstudiante: esEstudiante2 } = persona2;

console.log(edad2);

//destructing anidado

let persona3 = { nombre: "Carlos Fuentes", direccion: { calle: "Calle A", numero: "4-28" } };

const { nombre: nombrePersona, direccion: { calle, numero } } = persona3;
console.log(calle);

//unir objetos

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

const objetoUnido = { ...objeto1, ...objeto2 };
console.log(objetoUnido);

//arreglos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 54, 12, 653, 1234, 23];
const frutas = ["Manzana", "Pera", "Naranja", "Melon"];
console.log(frutas);

//agregar elemento al final
frutas.push("Papaya");
console.log(frutas)

//agregar un elemento al inicio
frutas.unshift("Sandia");
console.log(frutas);

//iterraciones 
//map
console.log("-----MAP-----");
frutas.map(fruta => {
    console.log(fruta);
})

//for
console.log("-----FOR-----");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//FOR ....... OF
console.log("------FOR ...... OF-----");
for (const fruta of frutas) {
    console.log(fruta);
}

//Foreach
console.log("------FOREACH-----");
frutas.forEach(function (fruta) {
    console.log(fruta);
})

//funciones
//funcion basica

function Saludar() {
    console.log("Hola buenas tardes!");
}

//llamar funcion
Saludar();

//funcion parametros

function mostrarMensaje(mensaje) {
    console.log("Mensaje recibido: " + mensaje);
}

function sumarNumeros(_primerNumero, _segundoNumero) {
    let suma = _primerNumero + _segundoNumero;
    mostrarMensaje(suma);
}

//funcion flecha
const multiplicar = (a, b) => {
    return a * b;
}

const restar = (a, b) => a - b;

//llamar funcion
Saludar();
mostrarMensaje("Tomen en cuenta las siguientes recomendaciones.");
mostrarMensaje(2);
sumarNumeros(3, 6);

console.log(multiplicar(5, 3));
console.log(restar(8, 3));

//Condiciones
console.log("--Condicionales--")

let edadPaciente = 10;

if (edadPaciente <= 17) {
    console.log("Es menor de edad");
} else {
    console.log("Es mayor de edad");
}

if (edadPaciente >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//operador Ternario
let mensaje = (edadPaciente>=18) ? "T: Es mayor de edad" : "T: Es menor de edad";
console.log(mensaje)

//Igualdad (no es estricta, no va considerar el tipo del valor)
if (edadPaciente==18){
    console.log("Es mayor de edad");
}

//Igualdad (Estricta, considera el tipo del valor)
if (edadPaciente===18){
    console.log("Es mayor de edad");
}

//desigualdad
if (edadPaciente != 18){
    console.log("Es menor de edad");
}

//desigualdad estricta
if (edadPaciente !== 18){
    console.log("Es menor de edad");
}

//Condiciones Anidadas
let sabeLeer = false;
let edadPersona = 21;

if(edadPersona >= 18 && sabeLeer){
    console.log("Es candidato para licencia");
}else{
    console.log("No es candidato para licencia");
}