
// let i = 0;
// let intervalo = setInterval(function(){
//     console.log("Hola");
//     if (i === 3){
//         clearInterval(intervalo);
//     }
//     i++;
// });

setImmediate(function(){
    console.log("Hola");
});

globalThis.miVariable = "Hola mi Variable";
console.log(miVariable);
