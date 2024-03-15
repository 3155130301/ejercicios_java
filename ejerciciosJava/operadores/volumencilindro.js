console.log("6. registrar el área y el volumen de un cilindro: ");
console.log("Ingrese radio del cilindro: ");
let rad = 15;
console.log(rad)
console.log("Ingrese volumen del cilindro: ");
let altu = 10;
console.log(altu)

let pi = 3.1416;

//proceso area
let resultado_a = (pi**2*rad*altu*pi**2*rad**2);
//proceso perimetro
let resultado_v = (pi*rad**2*altu);

//salida área
console.log("El área del cilindro es: ")
console.log(resultado_a);

//salida área
console.log("El volumen del cilindro es: ")
console.log(resultado_v);