class triangulo{
    constructor(lado,altura){
    this._lado=lado;
    this._altura=altura;
    }
    set lado(nuevoLado){
    if(nuevoLado>0){
    this._lado=nuevoLado;
    }
    }
    get lado(){
    return this._lado;
    }
    set altura(nuevaAltura){
    if(altura>0){
    return this._altura=altura;
    }
    }
    get altura(){
    return this._altura;
    }
    area(){
    let x= (this.lado*this._altura)/2;
    document.write(`<br>El area es de: ${x}`);
    }
    perimetro(){
    let x=(this.lado*3);
    document.write(`<br> El perimetro es de: ${x}`);
    }
}
while(confirm("Presione cancelar si desea terminar el programa")){
    let a = parseInt(prompt("Ingrese el valor del lado"));
    let b = parseInt(prompt("Ingrese el valor de altura"));
    const rectangulo = new triangulo(a,b);
    if(a>0&&b>0){
    const rectangulo = new triangulo(a,b);
    let n=parseInt(prompt("Ingrese un valor de lo que desee hacer: 1-Calculo de Area // 2-Calculo de perimetro"));
    if(n>0 &&n<3){
        switch (n){
            case 1:
            rectangulo.area();
            break;
            case 2:
            rectangulo.perimetro();
            break;
            }
    }
    }else{
    alert("Ingrese numeros validos");
    }
}
