

/*
let numero; 
se declara la variable numero como let, recordemos que let es una variable que SI se puede modificar entonces aqui solo se indica que se va a inicializar la variable let, pero no tiene un valor definido
numero = 29;
 en esto la variable numero que ya habia sido pre inicializada antes se le va a dar el valor de 29
alert(numero); 
con el alert se muestra en panatalla en forma de mensaje que numero tiene el valor 29

en caso de querer modifical el valor de la variable numero se puede declarar como numero = a algo, asi numero obtendria un nuevo valor

si la variable solo se declara como 
let numero;
alert (numero)
esto marcaria un mensaje de numero = undefined ya que esta inicializada previamiente pero no tiene un valor osea el valor esta indefinido


const son variables que no se pueden modificar, si un variable const esta declara con el valor 15 esa variable no se puede cambiar y siempre va a valer 15

const se tiene que declarar el valor cuando se inicializa, si se hace después es un error 

-----codigo base----
let numero = 29;
numero = 18;
alert(numero)
---------------------
prompt: se usa para poder pedir datos al usuario por medio de una ventana emergente del navegador, los datos que se ingresan se guaran en memoria 
-------codigo base pruebas prompt-------------
let nombre = prompt("Hola escribe tu nombre");
console.log(nombre)
alert("tu nombre es : " + nombre)
-----------------------------------------------

------------Concatenación---------------------

nombre = prompt(" Escribe tu nombre:  ");

oracion =  `Hola y bienvenido ${nombre} Espero que tu estancia sea de tu agrado`;

document.write(oracion);

esto esta con backtiks

-----------Operadores de comparación-------
let numero1 = 20;
let numero2 = 5;
let texto1 = "20";
let texto2 = "texto2"

document.write(numero1 !== texto1);
------------Operadores lógicos----------------
let valor = true;
let valor2 = true;

let resultado_and = valor && valor2; //logico de AND 

let resultado_or = valor || valor2 // logico de OR

let resultado_not = !valor // logico de Not 

document.write(resultado_not);

//tablas de verdad


*/



let valor = true;
let valor2 = true;

let resultado_and = valor && valor2; //logico de AND 

let resultado_or = valor || valor2 // logico de OR

let resultado_not = !valor // logico de Not 

document.write(resultado_not);








