/**
 * codigo de ejemplo de arrays
 * let frutas =["banana", "manzanas", "pera", "mango"];
document.write(frutas[0])
 */


/**
 * codigo para ejemplo arrays asociativos
 * let pc ={
    nombrePc: "fer0oPC",
    procesador: "intel i7",
    ram: "16gb",
    espacio: "500GB"
};
let nombrePC = pc["nombrePc"];
let procesador =pc["procesador"];
let ram = pc["ram"];
let discoDuro = pc["espacio"];

frase = `el nombre de mi PS es <b>${nombrePC}</b>  <br>
el procesador es <b>${procesador}</b> <br> 
la memoria ram  es de  <b>${ram}</b> <br>
mientras que la capacidad de disco es de <b>${discoDuro}</b>`
;


document.write(frase);





/**
 * codigo ejemplo bucle while
 * imprime numeros desde 0 al 10 preguntando en cada vuelta si el numero que tiene es mayor a 10, si no se le incrementa un numero y vuelve a preguntar.
 * 
 * let numeroParaSumar =0;

while(numeroParaSumar <10){
    numeroParaSumar++;  
    document.write(numeroParaSumar + "<br>");
}
 
 * 
let numero =0;

while(numero < 1000){
    numero++;
    document.write(numero);
    if(numero ==10){
        break;
    }
}
document.write("fin")

//ya con el break
 */


/** 
 * codigo ejemplo for 
 * let i = 20; //este let i es una variable declarada e inicializada con el valor de 20, este valor no es parte del bucle del for
 * //en el ciclo for se declara el la variable i con un valor de 0, esta no es igual a la anterior, esta solo se ve afectada por el bucle
 *
for( let i =0; i <= 10; i++){
    document.write(i + "<br>")
}
document.write(i);
//final de codigo se muestran los numeros del 0 al 10 y aparte el valor de i fuera del bucle con el valor de 20
for (i = 20; i>=0; i--){
    document.write(i + "<br>");
    if(i ==12){
        break;
        
    }
    
}

document.write("ya parale loco" +"<br>")
*/



/**
 * codigo ejemplo for in/on
 * 
 * //for in nos sirve para mostrar el índice de los objetos de un array
let animales =["michi", "milanezo", "t-rex", "un ratoncio"];

for(animal in animales){
    document.write(animales[animal] +"<br>")
}

document.write("<br>");


//for of nos muestra el valor del array
for(animal of animales){
    document.write(animal +"<br>")

}
 
 */
/*
//arrays y ciclos for para recorrer ciclos


array1 = ["maria", "josefa", "roberta"];
array2=["pedro", "marcelo", array1,"martha"];

forRancio:
for(let array in array2){
    if(array ==2){
        for(let array of array1){
            document.write(array +"<br>")
            break forRancio;
        }
    }
    else{
        document.write(array2[array] + "<br>")
    }
}
*/


/**
 * //Funciones
 * 
 * 
function saludar(){
    respuesta = prompt ("Hola Usuario!!. como te fue en tu día");
    if(respuesta == "bien"){
        alert("Que bueno");
    }
    else{
        alert("que pena");
    }

}
saludar();
 */

/** 
 * //crear función
function saludar(){
    alert("hola");
    return 3;   //aqui muestra donde acaba de ejecutarse el programa, todo lo que sea despues del return ya no va
                //si pusiera
                //alert("hola"); no se mostraría esto, debido a que la funcion terminó en el return

}
let saludo = saludar()
//llamando función saludar
document.write(saludo);

*/


/**
 * //parametros de las funciones
 * //las funciones no son funciones si no tienen parametros
 * 
 * function suma (num1, num2){          //<----- se declara la funcion suma y dentro del parentesis en vez de solo declarar que sea suma se le dan los parametros num1 y num2
    let resultado_suma = num1 + num2;            //<----- se crea la variable rultado_suma y se inicializa con los parametros de num1 y num2 en forma de suma que es lo que necesita hacer el programa
    document.write(resultado_suma);              //<----- se va a escribir el valor de resultado_suma
    document.write("<br>");
}

suma(20,100);
suma(70,55)

 */

/*
opcion = prompt("bienvenido a la calculadora, que opción desea, digite solo el número?1.- suma 2.- Resta 3.-Multiplicación 4.-Division");
opcion = parseInt(opcion);

num1 = prompt("numero 1");
num1 = parseInt(num1);
num2 = prompt("numero 2 ");
num2 = parseInt(num2);
if(opcion === 1){
    function suma (num1, num2){
        let resultado_suma = num1 + num2;
        return resultado_suma
    }
let resultadoSuma = suma(num1, num2);
document.write( "El resultado de la suma es: " + resultadoSuma);
document.write("<br>");

}
else if(opcion ===2){
    function resta ( num1, num2){
        let resultado_resta = num1 - num2
        return resultado_resta
    }
let resultadoResta= resta(num1, num2);
document.write("El resultado de la resta es " + resultadoResta);
document.write("<br>");


}

else if(opcion ===3){
    function multiplicacion( num1, num2){
        let resultado_multiplicacion = num1 * num2
        return resultado_multiplicacion
    }
let resultadoMultiplicacion= multiplicacion(num1, num2);
document.write("El resultado de la multiplicación es "+resultadoMultiplicacion);
document.write("<br>");

}

else if(opcion === 4){
    function division ( num1, num2){
        let resultado_division = num1 / num2
        return resultado_division
    }

let resultadoDivision= division(num1, num2);
document.write("El resultado de la division es " + resultadoDivision);
document.write("<br>");

}
else{
    prompt("opción no válida");
}

*/

let nombre = prompt("cual es tu nombre: ")
const saludar = (nombre) =>{
    let frase = `Hola ${nombre}, como estas?`
    document.write(frase);
}
saludar(nombre);











