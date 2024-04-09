//Spread = Propagador
//EmaScript 6


// Spread con arrays
let array1 = [1,2,3,4];
let array2 = ["Uno","Dos","Tres","Cuatro"];

let merriage = [...array1, ...array2]

console.log(merriage)

// Spread con objects
let user = {Gabriela: {name: "Gabriela", age: 23}}
let friend = {Javier: {name: "Javi", age: 18}}

let user2 = {name: "Sebas", age:20}

let merriage2 = {...user, ...friend}

console.log(merriage2)

// No se puede mezclar llaves o corchetes
//let merriage3 = [...user2]
//console.log(merriage3)

let merriage4 = [...array1, 5,6,7]
console.log(merriage4)
