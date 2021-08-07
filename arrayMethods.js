var articulos = [
    {nombre: "bici", costo: 2000},
    {nombre: "TV", costo: 3000},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 100000},
    {nombre: "laptop", costo: 4500},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 1400},
]

//filter. genera nuevo array 
var articulosFiltrados = artiuclos.filter(function(articulo){
    return articulo.costo <= 500
});

//map. genera un nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

//find, genera nuevo array
var buscarArticulo = artiuclos.find(function(articulo){
    return articulo.nombre === "laptop"
});

//forEach(), 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//some(); genera true or false
var articuloBaratos = artiuclos.some(function(articulo){
    return articulo.costo <= 700;
});

//.push() agregar elementos al final del array

//.shift() elimina el primer elemento de un array

//.pop() elimina el ultimo elemento de un array
