//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
const noRepetido = cadena => {
    let cadenaEnMinuscula = cadena.toLowerCase();
    for (let x = 0; x < cadena.length; x++){
        let caracterActual = cadena.charAt(x).toLowerCase();
        if (cadenaEnMinuscula.indexOf(caracterActual)=== cadenaEnMinuscula.lastIndexOf(caracterActual)){
            return cadena.charAt(x);
        }
    }
    return "";
}

const pruebas = [
    "abacddbec"
]
pruebas.forEach(pruebas => {
    console.log(`Primera letra que no se repite en '${pruebas}': '${noRepetido(pruebas)}'`); 
});

noRepetido();

console.log("Hola")




let getMax = function (str) {
    let max = 0,
        maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
   };