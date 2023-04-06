class Persona{
    #nombre; 
    #edad; 
    #profesion;
    constructor(nombre,edad,profesion){
    this.#nombre=nombre;
    this.#edad=edad;
    this.#profesion=profesion;
    }
    set nombre(nuevoNombre){
    if(nuevoNombre!=undefined){
    return this.#nombre=nuevoNombre;
    }
    }
    get nombre(){
        return this.#nombre;
    }
    set edad(nuevaEdad){
    if(nuevaEdad>0){
    return this.#edad=nuevaEdad;
    }
    }
    get edad(){
        return this.#edad;
    }
    set profesion(nuevaProfesion){
        if(nuevaProfesion!=undefined){
        return this.#profesion=nuevaProfesion;
        }
    }
    get profesion(){
        return this.#profesion;
    }
    saludar(){
    document.write(`Estas saludando a ${this.#nombre}<br>`);
    }
    despedirse(){
    
    }
}
function menu(id){
alert("Ingrese el numero de lo que desee hacer:");
let x = parseInt(prompt("1- Saludar // 2-Despedir"));
switch (x){
case 1:
    persona.saludar();
    break;
case 2:
    persona.despedirse();
    break;
}
}
const hugo = new Persona(`Hugo`,25,"ingeniero");
const luis = new Persona(`Luis`,30,"vendedor");
let nombre = prompt("Quien es usted? Hugo o Luis?");
const persona = (nombre === 'Hugo') ? luis : hugo;
menu(nombre);