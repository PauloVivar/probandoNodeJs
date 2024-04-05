
function serompe2(){
    serompe();

}

function serompe(){
    return(4 + 4);
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try{
            return(4 + z);
        }catch(err){
           console.error("Hay un error en fu asincrona")
           cb(err);
        }
        
    }, 1000);

    
}

try{
    //serompe2();
    seRompeAsincrona(function(){
        console.log("Se rompe funcion asincrona");
    });
}catch(err){
    console.error("Vaya se a roto");
    console.error(err);
}

console.log("Sigue el programa");