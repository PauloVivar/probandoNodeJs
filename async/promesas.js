//El problema de los rollbacks y su complejidad se resuelve con promises

// function hola(nombre, miCallback){
//     setTimeout(function(){
//         console.log("Hola " + nombre);
//         miCallback(nombre);
//     }, 2500);
// }

//convertir codigo asincrono a una visulización asincrona con promises, mas lejible que callbacks

//promise creada con funcion normal
function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

//promise creada con arrow function de ecma script 6
function hablar(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla...");
            //resolve(nombre);
            reject("Hay un Error");
        }, 1000);
    });
}

function adios(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Adios " + nombre);
            resolve();
        }, 1500);
    });
}

//_____

console.log("Iniciando el proceso...");

hola("Paulo")
    .then (hablar)
    .then (hablar)
    .then (adios)
    //arrow fuction
    .then ( (nombre) => {
        console.log("Finalizando el proceso");
    })
    // fuction normal
    .then(function(nombre){
        console.log("Finalizando el proceso");
    })
    .catch(error => {
        console.log("Atención!!! ");
        console.error(error);
    });
