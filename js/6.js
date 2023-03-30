class libro{
    constructor(isbn,titulo,autor,cantPaginas){
    this._isbn=isbn;
    this._titulo=titulo;
    this._autor=autor;
    this._cantPaginas=cantPaginas;
    }
    set isbn(nuevoisbn){
    if(nuevoisbn>0){
     this._isbn=nuevoisbn;
    }
    }
    get isbn(){
    return this._isbn;
    }
    set titulo(nuevotitulo){
    if(nuevotitulo!==null){
     this._titulo=nuevotitulo;
    }
    }
    get titulo(){
    return this._titulo;
    }
    set autor(nuevoAutor){
    if(nuevoAutor!=null){
     this._autor=nuevoAutor;
    }
    }
    get autor(){
    return this._autor;
    }
    set cantPaginas(nuevoCantPaginas){
    if(nuevoCantPaginas>0){
     this.cantPaginas=nuevoCantPaginas;
    }
    }
    get cantPaginas(){
    return this._cantPaginas;
    }
    mostraLibro(){
    document.write(`<br>El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene paginas ${this._cantPaginas}`)
    }
}
const harryPotter = new libro (12345,"Harry Potter","J.K Rowlling",5000);
harryPotter.mostraLibro();
const DonQuijote = new libro (15489,"DonQuijote de la mancha","Nose",800);
DonQuijote.mostraLibro();
