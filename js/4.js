class producto{
    constructor(codigo,nombre,precio){
    this._codigo=codigo;
    this._nombre=nombre;
    this._precio=precio;
    }
    set codigo(nuevoCodigo){
    if(codigo!=null){
        return this._codigo=nuevoCodigo;
    }
    }
    get codigo(){
    return this._codigo;
    }
    set nombre(nuevoNombre){
    if(nuevoNombre!=null){
    return this._nombre=nuevoNombre;
    }
    }
    get nombre(){
    return this._nombre;
    }
    set precio(nuevoPrecio){
    if(precio>0){
    return this._precio=nuevoPrecio;
    }
    }
    get precio(){
    return this._precio;
    }
}
const mostrar=()=>{
    for(let i=0;i<productos.length;i++){
    let producto = productos[i];
        document.write(`<br> Codigo: ${producto.codigo} Nombre : ${producto.nombre} Precio: ${producto.precio}`);
    }
}
const lavandina = new producto(12346,'lavandina',1199.99);
const jabon = new producto(215679,'jabon',249.99);
const deshodorante = new producto(12346,'deshodorante',320.99);
let productos = [lavandina,jabon,deshodorante];
mostrar();

