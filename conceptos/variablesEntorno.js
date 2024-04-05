
// --> definir primero en la powershell

//$env:NOMBRE="Paulo";
//$env:WEB="miweb.com";

let nombre = process.env.NOMBRE || 'Jose';
let web = process.env.WEB || 'No tengo Web';

console.log("Hola "+ nombre);
console.log("Mi web es " + web);


