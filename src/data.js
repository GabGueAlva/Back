/*Desestructuring Separar data de un export o de un elemento 
const animales = ['caballo', 'perro', 'gato', 'pato'];

const  [p1,p2,p3,p4]= animales;

//console.log(p2)

const persona = {
    nombre: "Javier",
    edad:"36",
    ocupacion: "dev"
}

console.log(persona)

const {edad, ocupacion, nombre} = persona

console.log(nombre)*/

export const saluda = () => {
    console.log("Estoy saludando")
}

export const saltar = () => {
    console.log("Estoy saltando")
}

export const comiendo = () =>{
    console.log("Estoy comiendo")
}

const principal = () =>{
    console.log("soy el principal")
}

export default principal