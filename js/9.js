class Animal{
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
    alert(`Un animal llamado ${this.#nombre} esta emitiendo sonido`);
    }
}
class Perro extends Animal{
    #nombre;
    #edad;
    #raza;
    constructor(nombre,edad,raza){
    super(nombre,edad);
    this.#raza=raza;
    }
    set raza(nuevaRaza){
    if(nuevaRaza!=undefined){
        return this.#raza=nuevaRaza;
    }
    }
    get raza(){
    return this.#raza;
    }
    emitirSonido(){
        alert(`El perro de nombre ${this.nombre} de raza ${this.raza} esta emitiendo sonido`);
        }
}
class Gato extends Animal{
    #nombre;
    #edad;
    #raza;
    constructor(nombre,edad,raza){
    super(nombre,edad);
    this.#raza=raza;
    }
    set raza(nuevaRaza){
    if(nuevaRaza!=undefined){
    return this.#raza=nuevaRaza;
    }
    }
    get raza(){
    return this.#raza;
    }
    emitirSonido(){
    alert(`El gato ${this.nombre} de raza ${this.raza} esta emitiendo sonido`);
    }
}
function tipoAnimal(x){
    let  Animal;
    switch(x){
        case "Spyke":
         Animal = spyke;
         break;
        case "Jerry":
         Animal = jerry;
         break;
        case "Tom":
         Animal = tom;
         break;
    }
    return Animal;
}
function menu(Animal){
    alert("Ingrese el numero de lo que desee hacer:");
    let x = parseInt(prompt("1- Saludar "));
    switch (x){
    case 1:
        Animal.emitirSonido();
        break;
    }
    }
const jerry = new Animal("Jerry",3);
const tom = new Gato("Tom",6,"mestizo");
const spyke = new Perro("Spyke",2,"Dogo");
let x= prompt("Que tipo de animal es? Spyke , Tom o Jerry?");
menu(tipoAnimal(x));
