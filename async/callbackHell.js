
function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 2500);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("Bla bla bla...");
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios " + nombre);
        otroCallback();
    }, 1000);
}

//buenas practicas, funcion compleja
function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    }else{
        adios(nombre,callback);
    }
}

console.log("Iniciando proceso...");

hola("Paulo", function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Proceso Terminado");
    });
})

//codigo espagueti, mala practica

// hola("Paulo",function(nombre){
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log("Terminando Proceso...");
//                 });
//             });
//         });
//     });
// });