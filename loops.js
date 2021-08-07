//FOR 

var estudiantes = ["Maria", "Sergio", "Rosa", "Juan"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// & FOR ..OF

var estudiantes = ["Maria", "Sergio", "Rosa", "Juan"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);

}


// WHILE
var estudiantes = ["Maria", "Sergio", "Rosa", "Juan"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.lenght > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);

}
