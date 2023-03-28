const auto ={
    color:"rojo",marca:"Chevrolet",
    modelo:2020,
    encender:() =>{
    console.log("El auto esta encendido");
    },
    apagar:()=>{
        console.log("Auto apagado");
    }
    };
    while(confirm("Desea bajarse del auto?")==false){
        while(confirm("Desea encender el vehiculo?")){
            auto.encender();
        if(confirm("Desea apagar el vehiculo")){
            auto.apagar();
            break;
        }
        }
    }
    console.log("Usted esta afuera del auto");
