class animal{
    #nombre 
    #edad
    constructor(nombre,edad){
    this.#nombre=nombre;
    this.#edad=edad;
    }
    set nombre(nuevoNombre){
    if(nuevoNombre!==undefined){
        return this.#nombre=nuevoNombre;
    }
    }
    get nombre(){
    return this.#nombre;
    }
    set edad(nuevaEdad){
    if(nuevaEdad!==undefined){
    return this.#edad=nuevaEdad;
    }
    }
    get edad(){
    return this.#edad;
    }
    emitirSonido(){
    alert("Un animal esta emitiendo sonido");
    }
}
class Perro extends animal(){
    #nombre;
    #edad;
    constructor(nombre,edad){
    super(nombre,edad)
    }
    emitirSonido(){
        alert("El perro esta emitiendo sonido");
        }
}
class Gato extends animal(){
    emitirSonido(){
    alert("El gato esta emitiendo sonido");
    }
}
const tom = new Gato();