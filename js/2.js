let cuenta={
    titular:"Alex",
    saldo:0,
    ingresar: function(cantidad){
    this.saldo=this.saldo+cantidad;
    console.log(" Ahora tiene: "+this.saldo);
    },
    extraer: function(cantidad){
    this.saldo=this.saldo-cantidad;
    console.log("Le queda: "+cuenta.saldo);
    },
    informe:function(){
    console.log("El titular es: "+this.titular+" Su saldo es: "+this.saldo);
    }
}
let x;

function menu(){
    while(confirm("Presione cancelar para salir")){
        alert("A continuacion ingrese el valor de lo que desea hacer 1-Ingresar dinero //2-extraer dinero//3-Solicitar informe");
        let n= parseInt(prompt("Ingrese el valor:"));
        if(n>=0&&n<4){
            switch (n){
                case 1:
                x=parseFloat(prompt("Ingrese la cantidad de dinero a ingresar: "));
                cuenta.ingresar(x);
                break;
                case 2:
                x=parseFloat(prompt("Ingrese la cantidad de dinero a extraer: "));
                cuenta.extraer(x);
                break;
                case 3:
                cuenta.informe();
                break;
            }
        }else{
            alert("Ingrese un numero valido:")
        }
    }
}
menu();
