class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    equals(otroContacto) {
        return this.nombre === otroContacto.nombre;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = [];
        this.tamano = tamano;
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            document.write("La agenda está llena, no se puede agregar más contactos.<br>");
            return;
        }
        if (this.existeContacto(contacto)) {
            document.write("El contacto ya existe en la agenda.<br>");
            return;
        }
        this.contactos.push(contacto);
        document.write("Contacto agregado correctamente.<br>");
    }

    existeContacto(contacto) {
        return this.contactos.some((c) => c.equals(contacto));
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            document.write("La agenda está vacía.<br>");
            return;
        }
        document.write("Contactos:<br>");
        this.contactos.forEach((contacto) =>
            document.write(`${contacto.nombre}: ${contacto.telefono}<br>`)
        );
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(
            (contacto) => contacto.nombre === nombre
        );
        if (contactoEncontrado) {
            document.write(`${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}<br>`);
        } else {
            document.write("No se encontró un contacto con ese nombre.<br>");
        }
    }

    eliminarContacto(contacto) {
        const indiceContacto = this.contactos.findIndex((c) => c.equals(contacto));
        if (indiceContacto !== -1) {
            this.contactos.splice(indiceContacto, 1);
            document.write("Contacto eliminado correctamente.<br>");
        } else {
            document.write("No se encontró un contacto con ese nombre.<br>");
        }
    }

    agendaLlena() {
        return this.contactos.length === this.tamano;
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}

// Menú
const agenda = new Agenda();
let opcion;

do {
    opcion = parseInt(prompt(
        "Seleccione una opción:\n" +
        "1. Agregar contacto\n" +
        "2. Buscar contacto\n" +
        "3. Listar contactos\n" +
        "4. Eliminar contacto\n" +
        "5. Salir"
    ));

    switch (opcion) {
        case 1:
            const nombre = prompt("Ingrese el nombre del contacto:");
            const telefono = prompt("Ingrese el teléfono del contacto:");
            const contacto = new Contacto(nombre, telefono);
            agenda.aniadirContacto(contacto);
            break;

        case 2:
            const nombreABuscar = prompt("Ingrese el nombre del contacto a buscar:");
            agenda.buscarContacto(nombreABuscar);
            break;

        case 3:
            agenda.listarContactos();
            break;

        case 4:
            const nombreAEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
            const contactoAEliminar = new Contacto(nombreAEliminar, "");
            agenda.eliminarContacto(contactoAEliminar);
            break;

        case 5:
            document.write("¡Hasta luego!<br>");
            break;

        default:
            document.write("Opción inválida.<br>");
            break;
    }
} while (opcion !== 5);