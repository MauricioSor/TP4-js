class persona {
    constructor(nombre, edad, sexo, peso, altura, año,dni) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._año = año;
        this._dni = dni || this.generarDNI();

    }
    set nombre(nuevoNombre) {
        if (nuevoNombre != null) {
            return this._nombre = nuevoNombre;
        }
    }
    get nombre() {
        return this._nombre;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            return this._edad = nuevaEdad;
        }
    }
    get edad() {
        return this._edad;
    }
    set sexo(nuevoSexo) {
        if (nuevoSexo == `H` || nuevoSexo == `M`) {
            return this._sexo = this.nuevoSexo;
        }
    }
    get sexo() {
        return this._sexo;
    }
    set peso(nuevoPeso) {
        if (nuevoPeso > 30) {
            return this._peso = nuevoPeso;
        }
    }
    get peso() {
        return this._peso;
    }
    set altura(nuevaAltura) {
        if (nuevaAltura > 100) {
            return this._altura = nuevaAltura;
        }
    }
    get altura() {
        return this._altura;
    }
    set año(nuevoAño) {
        if (nuevoAño >= 1930 && nuevoAño < 2024) {
            return this._año = nuevoAño;
        }
    }
    get año() {
        return this._año;
    }
    set dni(nuevoDni) {
        if (nuevoDni !== undefined) {
            this._dni = nuevoDni;
        }
        
    }
    get dni() {
        return this._dni;
    }
    mostrarGeneracion() {
        if (this.año >= 1994 && this.año <= 2010) {
            document.write("<br>Pertenece a la generacion: Z");
            document.write("<br> Rasgo caracteristico: Irreverencia");
        } else if (this.año >= 1981 && this.año <= 1993) {
            document.write("<br>Pertenece a la generacion: millnials Y");
            document.write("<br> Rasgo caracteristico: Frustracion");
        } else if (this.año >= 1969 && this.año <= 1980) {
            document.write("<br>Pertenece a la generacion: X");
            document.write("<br> Rasgo caracteristico: Obsesion por el Exito");
        } else if (this.año >= 1949 && this.año <= 1968) {
            document.write("<br>Pertenece a la generacion: Baby Boom");
            document.write("<br> Rasgo caracteristico: Ambicion");
        } else {
            document.write("<br>Pertenece a la generacion: Silent Generation (Los niños de la posguerra)");
            document.write("<br> Rasgo caracteristico: Austeridad");
        }
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<br> ${this.nombre} Es mayor de edad`);
        } else {
            document.write(`<br> ${this.nombre} No es mayor de edad`);
        }
    }
    mostrarDatos() {
        for (let clave in this ) {
            if (typeof this[clave] !== 'function') {
                document.write("<br>"+clave + ': ' + this[clave] + '<br>');
            }        
        }
    }
    generarDNI() {
    let dni = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
    return dni;
}
}
const carlos = new persona("Carlos", 25, "H", 88, 170,2006,2746782);
carlos.esMayorDeEdad();
carlos.mostrarGeneracion();
carlos.mostrarDatos();
const mariana = new persona("Mariana", 27,"M",62.5,160,1980);
mariana.esMayorDeEdad();
mariana.mostrarGeneracion();
mariana.mostrarDatos();

