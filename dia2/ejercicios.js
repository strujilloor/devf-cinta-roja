// Parte 1
// 1)
class Maestro {
    constructor(materia){
        this.materia = materia
    }

    calcularPromedio(calificaciones) {
        let suma = 0
        let promedio = 0
        calificaciones.forEach(element => {
            suma += element
        });
        promedio = suma / calificaciones.length
        return promedio
    }
}

class MaestroFisica extends Maestro {
    constructor(antiguedad){
        super('Maestro de Fisica'),
        this.antiguedad = antiguedad // number
    }
    
}

class MaestroMusica extends Maestro {
    constructor(edad){
        super('Maestro de Musica')
        this.edad = edad // number
    }
    
}

let stiven = new MaestroMusica(27)

console.log(stiven, "el promedio es: " + stiven.calcularPromedio([4, 5, 3.5]));

// 2)
class Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        this.numPuertas = numPuertas,
        this.numVentanas = numVentanas,
        this.numPisos = numPisos,
        this.direccion = direccion,
        this.altura = altura,
        this.largo = largo, 
        this.ancho = ancho
    }

    getMetrosCuadrados() {
        return this.largo * this.ancho
    }

    getDireccion() {
        return this.direccion
    }

    setDireccion(newDireccion) {
        this.direccion = newDireccion
    }
}

class Casa extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
}

class Edificio extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
}

let miCasa = new Casa(3, 10, 2, 'cr83c', 6, 5, 5)

console.log(miCasa, miCasa.getMetrosCuadrados());

// 3)
class Bebida {
    constructor(cantidad) {
        this.cantidad = cantidad
    }

    getCantidad() {
        return this.cantidad
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol) {
        super(cantidad),
        this.porcentajeAlcohol = porcentajeAlcohol
    }

    getPorcentajeAlcohol() {
        return this.porcentajeAlcohol
    }

    setPorcentajeAlcohol(porcentajeAlcohol) {
        this.porcentajeAlcohol = porcentajeAlcohol
    }

}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad),
        this.azucar= azucar
    }

    getAzucar() {
        return this.azucar
    }

    setAzucar(azucar) {
        this.azucar = azucar
    }
}

let corona = new Cerveza(500, 15)
corona.setCantidad(200)
console.log(corona);

// 4)
class Electrodomestico {
    constructor(precio, color, capacidad) {
        this.precio = precio,
        this.color = color, 
        this.capacidad = capacidad,
        this.consumoEnergetico = 100
    }
}

// 5)
class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga) {
        super(precio, color, capacidad),
        this.carga = carga // kg de ropa
    }

    precioFinal() {
        return this.consumoEnergetico * this.carga
    }
}

let miLavadora = new Lavadora(100, 'gris', 20, 15)
console.log(miLavadora, miLavadora.precioFinal());

// Parte 2
// 1)
const mostrar = (porConsola, mensaje) => {
    porConsola(mensaje)
}

const porConsola = (mensaje) => {
    console.log(mensaje);
}

mostrar(porConsola, "hola mundo")

// 2)
const mensajear = (tipoMensaje, mensaje) => {
    tipoMensaje(mensaje)
}

const mensajeWarning = (mensaje) => {
    console.warn(mensaje)
}

const mensajeNormal = (mensaje) => {
    console.log(mensaje)
}

mensajear( mensajeWarning, "peligro" )

// 3)
const operacionMate = (a, b, callback) => callback(a, b)

const sumaOp = (a, b) => a + b
const restaOp = (a, b) => a - b
const multOp = (a, b) => a * b

console.log(operacionMate(5, 5, multOp));

// 4)
const ordenSuperior = (texto, callback) => callback(texto)
const minus = (texto) => texto.toLowerCase()
const mayus = (texto) => texto.toUpperCase()

console.log(ordenSuperior("PejeLagarto", mayus));

// 5)
const mayores2Horas = (lista, callback) => callback(lista)
const extraer = (lista) => {
    let minutos = lista.map((element) => element / 60)
    return minutos.map((element) => {
        if(element >= 2) {
            return element
        }
    })
}

console.log(mayores2Horas([120, 60, 140, 80], extraer)); 
