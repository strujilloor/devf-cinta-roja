console.log(1)
// ES6

// Antigua
var age = 5;

// Puede cambiar
let name = 'Gerardo';

// Constantes
const pi = 3.1416


// Antigua
// function getAge(x) {
//     console.log('la edad que escribiste es:' + x)
// }

// Arrow Functions
const getAge = (x) =>  'La edad que escribiste es:' + x

console.log(getAge(5))

// Callback

const operacion = (tipo, x, y) => tipo(x, y);

const suma = (x, y) => x + y;

const resta = (x, y) =>  x - y;

const mult = (x, y) => x * y;

const mayorEdad = (edad, menor, mayor) => {
    return edad >= 18 
        ? mayor() 
        : menor();
    // if(edad >= 18) {1
    //     return mayor();
    // } else {
    //     return menor();
    // }
}

const menorDeEdad = () => 'Eres menor de edad';

const mayorDeEdad = () => 'Eres mayor de edad';

console.log(mayorEdad(27, menorDeEdad, mayorDeEdad));

console.log(operacion(resta, 5, 5))
console.log(operacion(suma, 5, 5))
console.log(operacion(mult, 5, 5))

// Promesa
// Pendiente (Veremos)
// se Cumplió la promesa (celular)
// No se cumple y la razón

const birthday = (dinero, amor, rencores) => { // entonces birthday es una promesa? o retorna una promesa? 
    return new Promise((resolve, reject) => { // la custion es retornar una promesa
        if (dinero && amor && !rencores) {
            resolve('celular')
        } else {
            reject('no celuar')
        }
    })
}

birthday(true, true, false)
    .then( (data) => console.log(data) )
    .catch( (razon) => console.log(razon) );