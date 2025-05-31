//alert("esto es una pupa alerta"); sirve para hacer alertas
//comentarios
//var variable = 0; || nombre_variable = "hola"; (manera antigua)para declarar una variable sirven esas dos formas

//let variableModerna = 0; (forma moderna de declarar una variable) 
// Una de las ventajas de usar let para declarar una variable es que si se repite el nombre de una variable te avisa si es repetido, en cambio con  var se sobreescribe y eso podria dañarte el codigo :)
//let lista = [5, 7, "hola", [4,6]]; sirve para 
//let objeto = {
  // nombre: "juan",
    //apellido: "perez",
    //edad: "35 años"
//}// esto se usa para trabajar con variables de objetos

//const estoEsSet = new Set(); //tiene valores constantes (no cambian nevera)
//estoEsSet.add(4);// Esto es para agregar un valor en un Set()
//estoEsSet.add(3);
//estoEsSet.add(4);

//console.log(estoEsSet); // Esto en la consola solo muestra el primer 4 y el 3 pero no repite el ultimo cuatro porque las constantes no se repiten
//const variable3 = 0;
//variable3 = 5;
//console.log(variable3); // da error en la consola porque no se puede sobreescribir una constante

//let nombre = prompt("Indica tu nombre")// sirve para generar una alerta con una variable que despues sera guardada.
//console.log(nombre); // esto sirve para imprimir en la consola el nombre guardado en la variable.
 //let confirmacion = confirm ("Estas seguro?"); sirve para generar una confirmacion al entrar a la pagina
 //console.log(confirmacion); // esto en la consola imprime un boolean, si se da en aceptar sale el valor True y si se da en cancelar sale el valor False

//window.screen.width(), window.screen.height();// Largo y ancho de la pagina
//window.location.href() // direccion de la pagina web
//window.open()// sirve para abrir urls que se pongan dentro de los parentesis :p
//window.close() //sirve para cerrar la ventana que se abre despues de ejecutar el window.open()
//window.print()//abre el menu contextual para imprimir

//Operadores

//let suma = 4 + 5;
//console.log(suma); da el resultado de la suma

//let resta = 4-5
//console.log(resta); da el resultado de la resta

//let div = 4 / 2;
//console.log(div); da el resultado de la division

//let multi = 4 * 2
//console.log(multi); da el resultado de la multiplicacion

//Operadores unarios
//let valor1 = 15
//let valor2 = 2

//let resultado = 0
//resultado ++; // suma una unidad al valor mas cercano, es lo mismo que sumar dos variables en este caso es como decir resultado+resultado
// y es lo mismo para la resta pero con su signo
//console.log(resultado);

// let resultado = 4;
// resultado += 2; 
//console.log(resultado); esto nos muestra el resultado que es 6, al usar la variable resultado
// y usar el operador += 2 le estarias sumando 2 al valor de la variable resultado
//esto se puede aplicar con cualquier operacion como suma, resta, multiplicacion y division


//let cadena1 = "hola";
//let cadena2 = "k ase";
//let resultado = cadena1 + cadena2;
//console.log(resultado); // esto nos muestra la concatenacion de las cadenas como se muestra en el ejemplo

//Operadores de comparacion

//let numero1 = 1;
//let numero2 = 5;

//let resultado = numero1 > numero2 da false cuando el primer valor es menor que el segundo y true cuando es mayor que el otro
//let resultado = numero1 < numero2 da true cuando el primer valor es menor que el segundo y false cuando es mayor que el otro
//let resultado = numero1 == numero2 da false cuando son distintos y true cuando son identicos
//let resultado = numero1 != numero2 da true cuando es distinto y da falso cuando es identico
//let resultado = numero1 === numero2 da true cuando son el mismo tipo de variable, y da false si son distintas como un float y un int
//console.log(resultado) //da como resultado un boolean 

//let numero1 = 1;
//let numero2 = 4;
//let numero3 = 8;
//let numero4 = 12;
//let resultado = numero3 > numero4 && numero1 > numero4; // para que de true ambas deben ser correctas, si una es incorrecta da como resultado false
//let resultado = numero1 > numero2 || numero3 > numero 4; para que de true basta con que una sola sea true, y para que pueda dar false tienen que ser falsa las dos
//let resultado = (numero3 > numero4);
//console.log(resultado);

// para decir "y" en JS se usa &&
// para decir "o" en JS se usa ||

//Condicionales

//en el uso del if Si ocurre una condicion dada hacer esto y de lo contrario hacer esto otro
//let a = 15;
//let b = 6; 
//let c = 10

//if(a>b)
//{
//console.log("poposin") si se cumple esta condicion se imprime en la consola ese string
//if (a>c)
//{console.log("tengo diarrea cronica menor")} si se cumple esta condicion se imprime en la consola ese string
//} 
//else{console.log("kakita")} cuando no se cumplen las condiciones se ejecuta este comando
 // dentro de el primer if se puede hacer una cadena de if y para cerrar usar el else {}

//para hacer que evalue la siguiente cuando la primera no se cumple se debe hacer como en el siguiente ejemplo

//let a = 100
//let b =20
//let c =17
// if(a>=b)
// {
  //console.log("puedes entrar ruco")
 //}
 //else if (a>c) 
 //{
  //console.log("Ven dentro de unos años malparido carajito")
 //}
 //else{console.log("que mierda haces aqui pinche meco")}

//Condicional multiple (puede utilizarse para hacer menus)
// let a = 12
//let b = 15
//let c = 18
//switch(a){
//  case 1:
  //  console.log("'a' vale 1")
    //break;
  //case 12:
  //console.log("'a vale 12'")
  //break;
//} // para que cuando se imprima en la consola el valor que se hizo switch debe coincidir el numero de la variable y el del case

//Funciones
//let a = 2;
//let b = 3
//let c = 7

//function suma(numero1, numero2){
  //let resultado = numero1 + numero2
  //return resultado;
//}
//let resSuma = suma(5, 10);
//console.log(resSuma)

//Bucles muy chidos
// let a = 0
// let b = 3
// let c = 7

// do{
//   console.log(a)
//   a++ // hace una lista de numeros hasta que lleguen al limite en este caso 7, todos son menores a ese limite
  
// }

// while(a<c) {
//   if (a>c){
//     console.log("a es mayor que c")
//   }
//   else {console.log("a es menor que c")}
// };

//FOR sin continue
// for(let i = 0; i < c; i++){
//   console.log(i)
// if(i == 5){break}

//FOR con continue
  //sirve para omitir el limite que se da con el if hasta el limite final que en este caso es 7
// }
// for(i = 0; i < c; i++){
  
//   if (i == 5)
//     {
//       continue
//     }
  
  
//   console.log(`el valor de i es ${i}`) 
// }

//arrays

// let lista = [1, 2, 56, 75, 4]




//forma 1
// for(let i = 0; i < lista.length; i++){
// console.log(lista[i])



//}
//forma 2
// for (let elemento in lista){
//   console.log(lista[elemento])
// }

//forma 3 de hacer un array
// for (let elemento of lista){
//   console.log(elemento)
// }
// lista.push(34);
// lista[3] = 69 // esto es para reemplazar un elemento de la lista con otro
// let UltimoElemento = lista.pop()// elimina el ultimo elemento de la lista
// let PrimerElemento = lista.shift() //elimina el primer elemento de la lista

//Para ordenar de menor a mayor en una lista
// function ordenar(a,b){
//   return a-b;
// }
// lista.sort(ordenar);

// console.log(lista)
//Para ordenar de mayor a menor en una lista
//  function ordenar(a,b){
//   return b-a;
//  }
//  lista.sort(ordenar)
//  console.log(lista)

 //para hacer separacion por algun elemento como espacios, guiones etc
// let resultadoJoin =lista.join(" ");
// console.log(resultadoJoin)
// let lista = [1, 2, 56, 75, 4]
// se elige un inicio y luego elimina y o sustituye elementos de la lista
// lista.splice(1, 2, 78, 80)

// console.log(lista)

//Programacion orientada a objetos

class Carro{// clase del objeto

motor
marca
modelo
velocidad

aceleracion(fuerza){ //metodos
 this.fuerza += fuerza;


}

frenado(fuerza){
this.fuerza -= fuerza;

}
 get getMotor(){
return this.motor;
 }
 set setMotor(motor){
  this.motor = motor;
 }

get getMarca(){
  return this.marca
}
set setMarca(marca){
  this.marca = marca
}
get getModelo(){
  return this.modelo;
}
set setModelo(modelo){
  this.modelo = modelo;
}

get getVelocidad(){
  return this.velocidad
}
set setVelocidad(velocidad)
{
  this.velocidad = velocidad
}
get getFuerza(){
  return this.fuerza
}
set setFuerza(fuerza){
  this.fuerza = fuerza
}
}
//  const Carro1 = new Carro();
//  //Forma clasica sin el get y el set
//   //  Carro1.marca = "Ford" 
//   //  Carro1.modelo = 'mustang'
//   //  Carro1.motor ='V8'
//   //  Carro1.velocidadPunta ="250 km/h"
// // Forma con el Get y el Set

// Carro1.setMarca = "Ford"
// Carro1.setModelo ='Mustang'
// Carro1.setMotor = 'V8'
// Carro1.setVelocidadPunta = '250km/h'
// console.log(Carro1)

// Carro1.aceleracion(50);
class CarroElectrico extends Carro{

wattios;
constructor(wattios, motor, marca, modelo){
  super (motor, marca, modelo)// con esto se llaman a todos los metodos del padre en este caso carro
  this.wattios = wattios
}
cargar(wattios){
this.wattios += wattios
}
frenar(velocidad){
  this.velocidad -= (velocidad - 5)
}
}
const automovil = new Carro(2.0, "Ferrari", "Testarrosa");

const automovilE = new CarroElectrico(5000, "5kw", "Tesla", "Model S");
function acelero(objAutomovil){
  objAutomovil.aceleracion(40);
  console.log(automovil.getVelocidad);
}

// const CarroElectrico1 = new CarroElectrico(5000, "5Kw", `Tesla`, "Serie S")
// console.log(CarroElectrico1.getMotor)
// CarroElectrico1.aceleracion(200)
// console.log(CarroElectrico1.getVelocidadPunta);

// acelero(automovil);
// acelero(automovilE);