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
cuenta.ingresar(200);
cuenta.ingresar(300);
cuenta.ingresar(500);
cuenta.extraer(500);
cuenta.informe();