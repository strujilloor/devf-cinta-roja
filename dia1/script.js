alert("Ejercicios de la clase")
// OBJETOS LITERALES
// 1)
var myPenguin = {
    character: 'Squeak',
    origin: ['Pip', 'Squeak and Wilfread'],
    creator: ['	Bertram Lamb', 'Austin Bowen Payne'],
    notes: ''
}

// 2)
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`)

// 3)
myPenguin.puedeVolar = false

// 4)
myPenguin.graznar = function () {
    console.log( 'kaww kaww!!' )
}

// 5)
myPenguin.saludar = function () {
    console.log( `Hola, soy un pingüino y mi nombre es ${this.character}` )
}

// 6)
myPenguin.character ='Señor Pingu'

myPenguin.saludar()

// 7)
myPenguin.volar = function () {
    if (this.puedeVolar) {
        console.log( '¡Puedo volar!' )
    } else {
        console.log( 'No puedo volar :(' )
    }
}

// 8)
myPenguin.puedeVolar = true

myPenguin.volar()

// 9)
var receta = {
    titulo: 'Mole',
    porciones: 2, 
    ingredientes: ['canela', 'comino', 'cocoa']
}

// 10)
var libros = [
    {
        titulo: 'Harry Potter',
        autor: 'J.K. Rowling',
        leido: false
    },
    {
        titulo: 'El retrato de Dorian Gray',
        autor: 'Oscar Wilde',
        leido: true
    }
]

libros.forEach((elemento, index) => {
    console.log( `id: ${index}, Titulo: ${elemento.titulo}, autor: ${elemento.autor}, leido: ${elemento.leido}` )
})

// OBJETOS
// 11)
class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura
        this.rfc = nombre + edad + sexo
    }

    calcularIMC() {
        return this.peso / this.altura
    }

    esMayorDeEdad() {
        if(this.edad >= 18) {
            return true
        }
        return false
    }
}

var stiven = new Persona('stiven', 27, 'masculino', 80, 173)

console.log(stiven, stiven.esMayorDeEdad())

// 12)
class Cuenta {
    constructor(titular) {
        this.titual = titular,
        this.cantidad = 10,
        this.estado = true
    }

    ingresar(valor) {
        if (this.cantidad + valor <= 900) {
            this.cantidad += valor
        }else {
            console.log('error: mas de 900')
        }
    }

    retirar(valor) {
        if (this.cantidad - valor >= 10) {
            this.cantidad -= valor
        }else {
            console.log('error: menos de 10')
        }
    }
}

var cuentaStiven = new Cuenta('Stiven')

cuentaStiven.ingresar(880)
cuentaStiven.retirar(885)

console.log(cuentaStiven)