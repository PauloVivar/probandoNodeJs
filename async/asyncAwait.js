
async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

//promise creada con arrow function de ecma script 6
async function hablar(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla...");
            resolve(nombre);
            //reject("Hay un Error");
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            console.log("Adios " + nombre);
            resolve();
        }, 1500);
    });
}

//_____

async function main(){
    let nombre = "Paulo";
    await(hola(nombre));
    await(hablar());
    await(hablar());
    await(hablar());
    await(adios(nombre));
    console.log("Finalizando el proceso...");
}


console.log("Iniciando el proceso...");
main();
console.log("Empieza fun async main... ");

   