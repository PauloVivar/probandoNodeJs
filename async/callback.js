
function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 2500);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios " + nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");

hola("Paulo",function(nombre){
    adios(nombre, function(){
        console.log("Terminando Proceso...");
    });
});

// hola("Paulo", function(){});
// adios("Paulo", function(){});

