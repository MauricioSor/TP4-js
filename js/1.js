const auto ={
    color:"rojo",marca:"Chevrolet",modelo:2020,
    encender:() =>{
    encender=alert("Desea encender su auto?");
    console.log("El auto esta encendido");
    }
    ,apagar:()=>{
        apagar=alert("Desea apagar su auto?");
        console.log("Auto apagado");
    }
    };
    while(confirm("Desea bajarse del auto?")!=true){
        auto.encender();
        if(confirm!="Desea apagar el auto?"==true){
            auto.apagar();
        }
    }