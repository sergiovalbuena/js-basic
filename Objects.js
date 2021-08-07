var objeto = {};

var miAuto = {
    marca: "mercedes",
    modelo: "X4",
    annio: 2020, 
    //metodo de objeto: 
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.annio //output: 2020
miAuto.detalleDelAuto(); //output: Auto mercedes 2020



//Funcion Contructora 
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//crear un nuevo objeto
var autoNuevo = new auto("Tesla", "modelo 3", 2020);
var autoNuevo2 = new auto("BMW", "X2", 2021);
var autoNuevo3 = new auto("Subaru", "XW", 2020);

//RETO: construir un loop que cree funciones contsructoras automaticas. 