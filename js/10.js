class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length >= this.capacidad) {
            document.write(`Lo siento, ${this.nombre} está lleno. No puede abordar.<br>`);
        } else {
            this.listaPasajeros.push(pasajero);
            document.write(`${pasajero} ha abordado el ${this.nombre}.<br>`);
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
        document.write(`${avion.nombre} ha sido agregado al ${this.nombreAeropuerto}.<br>`);
    }

    buscarAvion(nombreAvion) {
        for (let avion of this.listaAviones) {
            if (avion.nombre === nombreAvion) {
                document.write(`Nombre: ${avion.nombre}<br>Capacidad: ${avion.capacidad}<br>Destino: ${avion.destino}<br>`);
                return avion;
            }
        }
        document.write(`Lo siento, no se encontró el avión ${nombreAvion}.<br>`);
        return null;
    }
}

let aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

while (true) {
    let opcion = prompt(`Bienvenido al ${aeropuertoInternacional.nombreAeropuerto}. Elija una opción: \n1. Agregar avión \n2. Buscar avión \n3. Abordar avión \n4. Salir`);

    if (opcion === "1") {
        let nombreAvion = prompt("Ingrese el nombre del avión:");
        let capacidadAvion = prompt("Ingrese la capacidad del avión:");
        let destinoAvion = prompt("Ingrese el destino del avión:");
        let avion = new Avion(nombreAvion, capacidadAvion, destinoAvion);
        aeropuertoInternacional.agregarAvion(avion);
    } else if (opcion === "2") {
        let nombreAvion = prompt("Ingrese el nombre del avión a buscar:");
        aeropuertoInternacional.buscarAvion(nombreAvion);
    } else if (opcion === "3") {
        let nombreAvion = prompt("Ingrese el nombre del avión:");
        let avion = aeropuertoInternacional.buscarAvion(nombreAvion);
        if (avion !== null) {
            let pasajero = prompt("Ingrese el nombre del pasajero:");
            avion.abordar(pasajero);
        }
    } else if (opcion === "4") {
        break;
    } else {
        document.write("Opción inválida. Por favor intente de nuevo.<br>");
    }
}
